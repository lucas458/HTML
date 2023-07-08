

var CURRENT_SCREEN = 'construction';

var minetip_tooltip = document.getElementById("minetip-tooltip");

var tempSlot        = document.getElementById("tempSlot");

var inputText       = document.getElementById("inputText");

var scroll_track    = document.getElementById("scroll_track");
var scroll_thumb    = scroll_track.firstElementChild;


var interface_wrapper = document.getElementById("interface");

var slot_all        = document.getElementById("slot_all");
var slot_armor      = document.getElementById("slot_armor");
var slot_inventory  = document.getElementById("slot_inventory");
var slot_hand       = document.getElementById("slot_hand");
var slot_delete     = document.getElementById("slot_delete");



Math.clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
};



function formatGetQty( value ){
    return (value == null || value == '')? 1 : parseInt(value);
}



function formatSetQty( value ){
    return (value == 1 )? null : value;
}



function setScreen( name ){

    document.querySelector('.interface_active').classList.remove('interface_active');
    inputText.value = '';

    if ( name == 'all' || name == 'search' ){
        blocks_interface.classList.add('interface_active');
        blocks_interface.classList.toggle('search_mode', name == 'search');
        CURRENT_SCREEN = document.querySelector('.tab_active').getAttribute('group');
    }else if ( name == 'survival' ){
        survival_interface.classList.add('interface_active');
        CURRENT_SCREEN = document.querySelector('.tab_active').getAttribute('group');
    }

}



function setTooltipVisible( state ){
    minetip_tooltip.style.visibility = (state)? "visible" : "hidden";
}



function setTooltipTitle( content ){
    minetip_tooltip.firstElementChild.innerHTML = content;
}



function setTooltipSubTitle( content ){
    minetip_tooltip.lastElementChild.innerHTML = content;
}



function clearInventory(){
    slot_armor.querySelectorAll('.item').forEach(e => e.remove());
    slot_inventory.querySelectorAll('.item').forEach(e => e.remove());
    slot_hand.querySelectorAll('.item').forEach(e => e.remove());
}



function findSlotUsed( parentSlotId, referenceItemName ){

    let index = -1;
    
    document.querySelectorAll(`#${parentSlotId} .slot`).forEach((e, i)=>{
        
        if ( e.firstElementChild != null && index < 0 ){
            if ( referenceItemName == e.firstElementChild.getAttribute("item-name") ){
                index = i;
                return false;
            }
        } 

    });

    return index;

}



function findSlotFree( parentSlotId, referenceItemName ){

    let freeSlotIndex = -1;
    let freeSlotSameTypeItem = -1;

    document.querySelectorAll(`#${parentSlotId} .slot`).forEach((e, i)=>{

        if ( e.firstElementChild == null && freeSlotIndex < 0 ){
            freeSlotIndex = i;
        }

        if ( e.firstElementChild != null && freeSlotSameTypeItem < 0 ){
            
            if ( referenceItemName == e.firstElementChild.getAttribute("item-name") && formatGetQty(e.firstElementChild.innerHTML) < formatGetQty(e.firstElementChild.getAttribute("pack")) ){
                freeSlotSameTypeItem = i;
            }
        }

        if ( freeSlotIndex >= 0 && freeSlotSameTypeItem >= 0 ){
            return false;
        } 

    });

    return [freeSlotIndex, freeSlotSameTypeItem];

}



function moveItemTo( refTo, refSlotClick ){

    let list_ref = document.getElementById(refTo);

    do{ 
        let indexFound  = findSlotFree(refTo, refSlotClick.firstElementChild.getAttribute("item-name") );
        let newSlotQty  = formatGetQty(refSlotClick.firstElementChild.innerHTML);
        let maxPack     = formatGetQty(refSlotClick.firstElementChild.getAttribute("pack"));

        // NO SPACE
        if ( indexFound[0] < 0 && indexFound[1] < 0 ){
            break;
        }

        // SLOT USED (SUM)
        if ( indexFound[1] >= 0 ){
            let foundItemQty = formatGetQty(list_ref.children[ indexFound[1] ].firstElementChild.innerHTML);

            if ( foundItemQty + newSlotQty <= maxPack ){
                list_ref.children[ indexFound[1] ].firstElementChild.innerHTML =  foundItemQty + newSlotQty;
                refSlotClick.innerHTML = '';
            }
            else{
                let diff = maxPack - foundItemQty;
                list_ref.children[ indexFound[1] ].firstElementChild.innerHTML = diff + foundItemQty;
                if ( newSlotQty - diff > 0 ){
                    refSlotClick.firstElementChild.innerHTML = newSlotQty - diff;
                }
                else{
                    refSlotClick.innerHTML = '';
                }
            }
        }

        // SLOT FREE
        else if ( indexFound[0] >= 0 ){
            list_ref.children[ indexFound[0] ].appendChild( refSlotClick.firstElementChild );
        }
            
        } while ( refSlotClick.firstElementChild != null );

}



function generateGridItems( group = 'all', offsetLine = 0 ){
    
    for (let i = 0; i < 9 * 5; i++){

        slot_all.children[i].innerHTML = '';

        if ( MINECRAFT_ITEMS_GROUPS[group] ){
            let founded_list = [];
            
            if ( group == 'all' ){ 
                founded_list = MINECRAFT_ITEMS.filter(e => e.label.toLowerCase().indexOf( inputText.value.toLowerCase() ) >= 0).map(e => e.name);
            }else{
                founded_list = MINECRAFT_ITEMS_GROUPS[group];
            }

            scroll_thumb.classList.toggle('scroll_enabled', founded_list.length > 9*5);
            let name = founded_list[i + offsetLine*9];
            let item = MINECRAFT_ITEMS.find(e => e.name == name); 

            if ( item ){
                let item_element = document.createElement('div');
                item_element.classList.add("item");
                item_element.setAttribute("item-name", item.name);
                item_element.setAttribute("item-label", item.label);

                if ( item.icon ){
                    item_element.style.backgroundPosition = `${-16 * item.icon[0]}px ${-16 * item.icon[1]}px`;
                }else if ( item.animation ){
                    item_element.style.backgroundSize = '100%';
                    item_element.style.backgroundImage = `url(assets/${item.animation})`;
                }

                if ( item.pack ){
                    item_element.setAttribute("pack", item.pack);
                }
                slot_all.children[i].appendChild(item_element);
            }
            
        }else{
            scroll_thumb.classList.toggle('scroll_enabled', false);
        }

    }
    
}



function pickItem( name, qty, index = 0 ){
    
    if ( qty <= 0 ) return;

    index = Math.abs(index % 9);
    let item = MINECRAFT_ITEMS.find(e => e.name == name);

    if ( item ){

        let item_element = document.createElement('div');
        item_element.classList.add("item");
        item_element.setAttribute("item-name", item.name);
        item_element.setAttribute("item-label", item.label); 

        if ( item.icon ){
            item_element.style.backgroundPosition = `${-16 * item.icon[0]}px ${-16 * item.icon[1]}px`;
        }else if ( item.animation ){
            item_element.style.backgroundSize = '100%';
            item_element.style.backgroundImage = `url(assets/${item.animation})`;
        }

        if ( item.pack ){
            item_element.setAttribute("pack", item.pack);
            if ( qty > item.pack ){
                qty = item.pack;
            }
        }else{
            qty = 1;
        }
        
        item_element.innerHTML = (qty == 1)? null : qty;
        slot_hand.children[index].innerHTML = '';
        slot_hand.children[index].appendChild( item_element );
    }

}








// SCROLL THUMB PRESS
scroll_thumb.onmousedown = (event) => {
    if (scroll_thumb.classList.contains("scroll_enabled")){
        scroll_thumb.classList.add('scroll_pressed');
    }
};




// MOVE
onmousemove = (event) => {

    // MOVE SCROLL
    if ( scroll_thumb.classList.contains('scroll_pressed') ){
        let posY = event.clientY - (interface_wrapper.offsetTop + scroll_track.offsetTop + scroll_thumb.offsetHeight/2);
        let max_value = scroll_track.offsetHeight - scroll_thumb.offsetHeight
        posY = Math.clamp(posY, 0, max_value);
        let step = 1;
        let size = 1;

        if ( MINECRAFT_ITEMS_GROUPS[CURRENT_SCREEN] ){

            if ( CURRENT_SCREEN == 'all' ){
                size = MINECRAFT_ITEMS.filter(e => e.label.toLowerCase().indexOf( inputText.value.toLowerCase() ) >= 0).length;
            }else{
                size = MINECRAFT_ITEMS_GROUPS[CURRENT_SCREEN].length;
            }
            
            step = Math.round(posY / (max_value / (Math.trunc(size/9) - 4)));

        }
        scroll_thumb.style.top = posY  + 'px';
        generateGridItems(CURRENT_SCREEN, step);
    }

    // MOVE TEMP ITEM
    tempSlot.style.left = (event.clientX - tempSlot.offsetWidth/2) + 'px';
    tempSlot.style.top = (event.clientY - tempSlot.offsetHeight/2) + 'px';

    // MOVE TOOLTIP
    minetip_tooltip.style.left = (event.clientX + 8) + 'px';
    minetip_tooltip.style.top = (event.clientY - minetip_tooltip.offsetHeight) + 'px';

};


// MOUSE UP, BLUR
onmouseup = onblur = () => {
    scroll_thumb.classList.remove('scroll_pressed');
};










// TAB
document.querySelectorAll(".tab").forEach(e => {

    e.onmousedown = (event) => {

        if ( event.button == 0 && !e.classList.contains("tab_active") ){
            CURRENT_SCREEN = e.getAttribute("group");
            scroll_thumb.style.top = '0px';

            if ( CURRENT_SCREEN != 'survival' ){
                generateGridItems(CURRENT_SCREEN, 0);
            }

            document.querySelectorAll(".tab_active").forEach(el => el.classList.remove("tab_active"));
            e.classList.add("tab_active");
            let group = e.getAttribute("group");

            if ( group == "all" ){
                setScreen('search');
            }else if ( group == "survival" ){
                setScreen('survival');
            }else{
                setScreen('all');
            }
        }
    };


    e.onmousemove = () => {
        minetip_tooltip.firstElementChild.style.color = '';
        setTooltipTitle(e.getAttribute("label"));
        setTooltipSubTitle('');
        setTooltipVisible(true);
    };


    e.onmouseleave = () => { 
        setTooltipVisible(false);
    };

});




























// SLOTs
document.querySelectorAll(".slot").forEach(slot => {

    // KEY DOWN
    slot.onkeydown = (event) => {

        if ( event.key.charCodeAt() >= 49 && event.key.charCodeAt() <= 57 && !event.repeat && tempSlot.firstElementChild == null ){
            let groupSlot  = slot.parentElement.id;
            let slotNumber = parseInt(event.key) - 1;

            if ( groupSlot == "slot_all" && slot.firstElementChild != null ){
                pickItem(slot.firstElementChild.getAttribute("item-name"), formatGetQty( slot.firstElementChild.getAttribute("pack") ), slotNumber);

            }else if ( groupSlot != "slot_armor" && slot.id != "slot_delete" ){
                let clickedSlotFree = slot.firstElementChild == null;
                let handSlotFree    = slot_hand.children[slotNumber].firstElementChild == null;

                if ( clickedSlotFree && !handSlotFree ){
                    slot.appendChild(slot_hand.children[slotNumber].firstElementChild);
                }else if ( !clickedSlotFree && handSlotFree ){
                    slot_hand.children[slotNumber].appendChild(slot.firstElementChild);
                }else if ( !clickedSlotFree && !handSlotFree ){
                    slot.appendChild(slot_hand.children[slotNumber].firstElementChild);
                    slot_hand.children[slotNumber].appendChild(slot.firstElementChild);
                }
            }
        }
    };




    // MOUSE MOVE
    slot.onmousemove = () => {
        slot.setAttribute("tabindex", 0);
        slot.focus();
        setTooltipVisible(false);

        if ( tempSlot.firstElementChild == null && slot.firstElementChild != null ){
            let item = MINECRAFT_ITEMS.find(e => e.name == slot.firstElementChild.getAttribute("item-name"));

            if ( item ){
                minetip_tooltip.firstElementChild.style.color = (item.color)? item.color : '';

                if ( item.subTitle ){
                    minetip_tooltip.lastElementChild.style.color = (item.subTitle.color)? item.subTitle.color : '';
                    setTooltipSubTitle(item.subTitle.text);
                }else{
                    setTooltipSubTitle('');
                }
            }

            setTooltipTitle(slot.firstElementChild.getAttribute("item-label"));
            setTooltipVisible(true);

        }else if ( slot.id == "slot_delete" ){
            setTooltipTitle("Destruir Item");
            setTooltipSubTitle('');
            setTooltipVisible(true);
        }
    };




    // MOUSE LEAVE
    slot.onmouseleave = () => {
        setTooltipVisible(false);
        slot.removeAttribute("tabindex");
        slot.blur();
    };




    // MOUSE UP
    slot.onmouseup = (event) => {

        // DOUBLE CLICK
        if ( event.button == 0 && event.detail == 2 && slot.parentElement.id != 'slot_all' && tempSlot.firstElementChild != null ){

            let name          = tempSlot.firstElementChild.getAttribute("item-name");
            let tempSlotQty   = formatGetQty(tempSlot.firstElementChild.innerHTML);
            let pack          = formatGetQty(tempSlot.firstElementChild.getAttribute("pack"));
            let search_group  = "slot_hand";
            let founded_index = findSlotUsed(search_group, name);

            if ( founded_index < 0 ){
                search_group  = "slot_inventory";
                founded_index = findSlotUsed(search_group, name);
            }

            while ( founded_index >= 0 && tempSlotQty < pack ){
                
                let founded_slot = document.getElementById(search_group).children[founded_index];

                if ( founded_slot.firstElementChild == null ){
                    break;
                }

                let founded_qty = formatGetQty(founded_slot.firstElementChild.innerHTML);

                if ( tempSlotQty + founded_qty <= pack ){
                    tempSlotQty += founded_qty;
                    tempSlot.firstElementChild.innerHTML = formatSetQty(tempSlotQty);
                    founded_slot.innerHTML = ''; 
                }else{
                    founded_slot.firstElementChild.innerHTML = formatSetQty((tempSlotQty + founded_qty) % pack);
                    tempSlotQty += pack - tempSlotQty;
                    tempSlot.firstElementChild.innerHTML = formatSetQty(tempSlotQty);
                    break;
                }
 
                search_group  = "slot_hand";
                founded_index = findSlotUsed(search_group, name);

                if ( founded_index < 0 ){
                    search_group  = "slot_inventory";
                    founded_index = findSlotUsed(search_group, name);
                }

            }

        }

        if ( slot.id == "slot_delete" ){
            tempSlot.innerHTML = '';
        }

    };




    // MOUSE DOWN
    slot.onmousedown = (event) => {
        let groupSlot    = slot.parentElement.id;
        let slotFree     = slot.firstElementChild == null;
        let tempSlotFree = tempSlot.firstElementChild == null;
        let slotQty      = 0;
        let tempSlotQty  = 0;
        let pack         = 1;

        if ( !slotFree ){
            slotQty      = formatGetQty(slot.firstElementChild.innerHTML);
            pack         = formatGetQty(slot.firstElementChild.getAttribute("pack"));
        }

        if ( !tempSlotFree ){
            tempSlotQty  = formatGetQty(tempSlot.firstElementChild.innerHTML);
        }
        
        // LEFT CLICK
        if ( event.button == 0 ){
            
            // PRESSING SHIFT 
            if ( event.shiftKey ){

                if ( CURRENT_SCREEN == 'survival' ){

                    if ( slot.id == "slot_delete" ){
                        clearInventory();
                    }else if ( !slotFree ){
                        let itemCanMove = true;
                        let itemArmorFounded = Object.keys(MINECRAFT_ARMOR).find(e => e == slot.firstElementChild.getAttribute("item-name"));
                        let armorSlot = slot_armor.querySelector(`.slot[armor=${ MINECRAFT_ARMOR[itemArmorFounded] }]`);

                        if ( armorSlot != null ){

                            if ( armorSlot.firstElementChild == null ){
                                armorSlot.appendChild(slot.firstElementChild);
                                itemCanMove = false;
                            }
                        }

                        if ( itemCanMove ){

                            if ( groupSlot == "slot_hand" ){
                                console.log("move item to INVENTORY");
                                moveItemTo("slot_inventory", slot);
                            }else if ( groupSlot == "slot_inventory" ){
                                console.log("move item to HAND");
                                moveItemTo("slot_hand", slot);
                            }else if ( groupSlot == "slot_armor" ){
                                moveItemTo("slot_inventory", slot);
                                if ( slot.firstElementChild != null ){
                                    moveItemTo("slot_hand", slot);
                                }
                            }
                        }
                    }
                }else{

                    if ( groupSlot == "slot_all" ){

                        if ( !slotFree && tempSlotFree ){
                            let clone = slot.firstElementChild.cloneNode(true); 
                            clone.innerHTML = formatSetQty(pack);
                            tempSlot.appendChild(clone);
                        }else if ( !tempSlotFree ){

                            if ( slot.firstElementChild.getAttribute("item-name") != tempSlot.firstElementChild.getAttribute("item-name") ){
                                tempSlot.innerHTML = '';
                            }
                        }

                    }else{
                        slot.innerHTML = '';
                    }
                }
            }


            // NOT PRESSING SHIFT 
            else{

                if ( !slotFree && tempSlotFree ){
                    console.log("PICK ITEM");
                    setTooltipVisible(false);

                    if ( groupSlot == 'slot_all' ){
                        let clone = slot.firstElementChild.cloneNode(true);
                        clone.innerHTML = formatSetQty(slotQty);
                        tempSlot.appendChild(clone);
                    }else{
                        tempSlot.appendChild(slot.firstElementChild);
                    }

                }else if ( slotFree && !tempSlotFree ){

                    if ( groupSlot == 'slot_all' ){
                        tempSlot.innerHTML = '';
                    }else if ( slot.id != "slot_delete" ){
                        console.log("PUT ITEM AT FREE SLOT");

                        if ( groupSlot == "slot_armor" ){
                            let itemArmorFounded = Object.keys(MINECRAFT_ARMOR).find(e => e == tempSlot.firstElementChild.getAttribute("item-name"));
                            let armorSlot = slot_armor.querySelector(`.slot[armor=${ MINECRAFT_ARMOR[itemArmorFounded] }]`);

                            if ( MINECRAFT_ARMOR[itemArmorFounded] == slot.getAttribute("armor") && armorSlot.firstElementChild == null ){
                                armorSlot.appendChild(tempSlot.firstElementChild);
                            }
                        }else{
                            slot.appendChild(tempSlot.firstElementChild);
                        }
                    }

                }else if ( !slotFree && !tempSlotFree ){

                    if ( slot.firstElementChild.getAttribute("item-name") == tempSlot.firstElementChild.getAttribute("item-name") ){

                        if ( slotQty + tempSlotQty <= pack && groupSlot != 'slot_all' ){
                            console.log("PUT ITEM AT USED SLOT: NO REMAINS");
                            tempSlot.innerHTML = '';
                            slot.firstElementChild.innerHTML = slotQty + tempSlotQty;
                        }else if ( tempSlotQty + 1 <= pack && groupSlot == 'slot_all' ){
                            tempSlot.firstElementChild.innerHTML = formatSetQty(tempSlotQty + 1);
                        }else if ( groupSlot != 'slot_all' ){
                            console.log("PUT ITEM AT USED SLOT: REMAINS");
                            tempSlotQty -= pack - slotQty;
                            slot.firstElementChild.innerHTML     = formatSetQty(pack);
                            tempSlot.firstElementChild.innerHTML = formatSetQty(tempSlotQty);
                        }

                    }else{

                        if ( groupSlot == 'slot_all' ){
                            console.log("DELETE ITEM");
                            tempSlot.innerHTML = '';
                        }else{
                            let canSwap = true;

                            if ( groupSlot == "slot_armor" ){
                                let itemArmorFounded = Object.keys(MINECRAFT_ARMOR).find(e => e == tempSlot.firstElementChild.getAttribute("item-name"));
                                canSwap = MINECRAFT_ARMOR[itemArmorFounded] == slot.getAttribute("armor");
                            }

                            if ( canSwap ){
                                console.log("SWAP");
                                tempSlot.appendChild(slot.firstElementChild);
                                slot.appendChild(tempSlot.firstElementChild);
                            }
                        }
                    }
                }
            }
        }



        
        // RIGHT CLICK
        else if ( event.button == 2 ){

            if ( !slotFree && tempSlotFree ){

                if ( slotQty > 1 ){
                    console.log("DIVIDE");
                    let tempQty = Math.trunc(slotQty/2);
                    tempSlotQty = slotQty - tempQty;
                    slotQty     = tempQty;
                    slot.firstElementChild.innerHTML     = formatSetQty( slotQty );
                    let clone = slot.firstElementChild.cloneNode(true);
                    clone.innerHTML = formatSetQty(tempSlotQty);
                    tempSlot.appendChild(clone);
                }else{
                    console.log("PICK ITEM");

                    if ( groupSlot == 'slot_all' ){
                        let clone = slot.firstElementChild.cloneNode(true);
                        clone.innerHTML = formatSetQty(slotQty);
                        tempSlot.appendChild(clone);
                    }else{
                        tempSlot.appendChild(slot.firstElementChild);
                    }
                }

            }else if ( slotFree && !tempSlotFree ){

                if ( slot.id != "slot_delete" ){  
                    console.log("PUT ONE AT FREE SLOT");

                    if ( groupSlot != 'slot_all' ){

                        if ( groupSlot == "slot_armor" ){
                            let itemArmorFounded = Object.keys(MINECRAFT_ARMOR).find(e => e == tempSlot.firstElementChild.getAttribute("item-name"));
                            let armorSlot = slot_armor.querySelector(`.slot[armor=${ MINECRAFT_ARMOR[itemArmorFounded] }]`);

                            if ( MINECRAFT_ARMOR[itemArmorFounded] == slot.getAttribute("armor") && armorSlot.firstElementChild == null ){
                                armorSlot.appendChild(tempSlot.firstElementChild);
                            }
                        }else{
                            let clone = tempSlot.firstElementChild.cloneNode(true);
                            clone.innerHTML = '';
                            slot.appendChild(clone);

                            if ( tempSlotQty - 1 > 0 ){
                                tempSlot.firstElementChild.innerHTML = formatSetQty(tempSlotQty - 1);
                            }else{
                                tempSlot.innerHTML = '';
                            }
                        }
                    } 
                }
            }else if ( !slotFree && !tempSlotFree ){

                if ( slot.firstElementChild.getAttribute("item-name") == tempSlot.firstElementChild.getAttribute("item-name") ){
                    console.log("PUT ONE AT USED SLOT");

                    if ( slotQty + 1 <= pack && tempSlotQty > 0 ){

                        if ( groupSlot != 'slot_all' ){
                            slot.firstElementChild.innerHTML = slotQty + 1;
                        }

                        if ( tempSlotQty - 1 > 0 ){
                            tempSlot.firstElementChild.innerHTML = formatSetQty(tempSlotQty - 1);
                        }else{
                            tempSlot.innerHTML = '';
                        }
                    }
                }else{

                    if ( groupSlot == 'slot_all' ){
                        console.log("DELETE ITEM");
                        tempSlot.innerHTML = '';
                    }else{
                        let canSwap = true;

                        if ( groupSlot == "slot_armor" ){
                            let itemArmorFounded = Object.keys(MINECRAFT_ARMOR).find(e => e == tempSlot.firstElementChild.getAttribute("item-name"));
                            canSwap = MINECRAFT_ARMOR[itemArmorFounded] == slot.getAttribute("armor");
                        }

                        if ( canSwap ){
                            console.log("SWAP");
                            tempSlot.appendChild(slot.firstElementChild);
                            slot.appendChild(tempSlot.firstElementChild);
                        }
                    }
                }
            } 

        }

        // MIDDLE CLICK
        else if ( event.button == 1 ){
            if ( !slotFree && tempSlotFree ){
                let clone = slot.firstElementChild.cloneNode(true); 
                clone.innerHTML = formatSetQty(pack);
                tempSlot.appendChild(clone);
            }
        }


    };

});




inputText.oninput = () => {
    console.log("change text input");
    scroll_thumb.style.top = '0px';
    generateGridItems();
};


generateGridItems(CURRENT_SCREEN, 0);


pickItem('iron_helmet', 1, 0);
pickItem('iron_chestplate', 1, 1);
pickItem('iron_leggings', 1, 2);
pickItem('iron_boots', 1, 3);
pickItem('grass_block', 32, 4);
pickItem('grass_block', 35, 5);
pickItem('oak_planks', 12, 6);
pickItem('ender_pearl', 16, 7);
