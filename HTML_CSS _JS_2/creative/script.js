



function clamp(value, min, max){
    if ( value < min ) return min;
    if ( value > max ) return max;
    return value;
}




var scroll_thumb = document.getElementById("scroll_thumb");


var tab_list = document.querySelectorAll("#tab_wrapper .tab");
var tab_label = document.getElementById("tab_label");

var input_element = document.getElementById("input_element");


var itens_slot_list = document.getElementById("itens_slot_list");

var inventory_slot_list = document.getElementById("inventory_slot_list");
var hand_slot_list = document.getElementById("hand_slot_list");
var armor_slot_list = document.getElementById("armor_slot_list");


var all_slots = document.querySelectorAll(".slot");
var temp_slot = document.getElementById("temp_slot");
var tooltip = document.getElementById("tooltip");





var moveRow = 0;
var moveRow_new = 0;
var current_group_index = 0;
var rowMax = 0;
var current_screen_index = 0;





window.onload = ()=>{
    genItemList();
};



window.oncontextmenu = (evt)=>{
    evt.preventDefault();
};




scroll_thumb.onmousedown = (evt)=>{
    scroll_thumb.setAttribute("pressed", true);
    scroll_thumb.setAttribute("initY", evt.clientY);
};


window.onmouseup = ()=>{
    scroll_thumb.setAttribute("pressed", false);
};

window.onblur = ()=>{
    scroll_thumb.setAttribute("pressed", false);
};





window.onmousemove = (evt)=>{


    
    

    // SCROLL
    if ( scroll_thumb.getAttribute("pressed") === "true" && !scroll_thumb.classList.contains("scroll_inactive") ){

        

        let posY = scroll_thumb.offsetTop + ( evt.clientY - parseFloat(scroll_thumb.getAttribute("initY")) );
        posY = clamp(posY, 0, scroll_thumb.parentElement.offsetHeight - scroll_thumb.offsetHeight);
        scroll_thumb.style.top = posY + 'px';

        let percent = posY / (scroll_thumb.parentElement.offsetHeight - scroll_thumb.offsetHeight);
        scroll_thumb.setAttribute("percent", percent);
        
 
        rowMax = Math.ceil( (MINECRAFT_ITEM[current_group_index].list.length-1) / itens_slot_list.children.length );
        moveRow_new = Math.trunc(scroll_thumb.offsetTop / (scroll_thumb.parentElement.offsetHeight/(rowMax+1)));
 
        if ( moveRow_new != moveRow ){
            moveRow = moveRow_new; 
            genItemList(current_group_index, moveRow_new);
        } 


        if ( posY > 0 && posY < scroll_thumb.parentElement.offsetHeight - scroll_thumb.offsetHeight){
            scroll_thumb.setAttribute("initY", evt.clientY);
        }

    }








    // TEMP SLOT
    temp_slot.style.left = (evt.clientX - temp_slot.offsetWidth/2) + 'px';
    temp_slot.style.top  = (evt.clientY - temp_slot.offsetHeight/2) + 'px';


    // TOOLTIP
    tooltip.style.left = (evt.clientX + 8) + 'px';
    tooltip.style.top  = (evt.clientY - tooltip.offsetHeight) + 'px';

    

};





























window.onwheel = (evt)=>{


    if ( !scroll_thumb.classList.contains("scroll_inactive") ){

        rowMax = Math.ceil( (MINECRAFT_ITEM[current_group_index].list.length-1) / itens_slot_list.children.length );
        
        moveRow_new += (evt.deltaY < 0)? -1 : 1;
        moveRow_new = clamp(moveRow_new, 0, rowMax);

        genItemList(current_group_index, moveRow_new);
    
        let posY = clamp((moveRow_new * (scroll_thumb.parentElement.offsetHeight/rowMax)), 0, scroll_thumb.parentElement.offsetHeight - scroll_thumb.offsetHeight);
        scroll_thumb.style.top = (posY) + 'px';
    
    }

};






















tab_list.forEach((e, i)=>{

    e.onclick = ()=>{
        selectTabByIndex(i);
        tab_label.innerHTML = e.getAttribute("tab-title");
    };

    e.onmouseenter = ()=>{
        setTooltipContent( e.getAttribute("tab-title") );
        toggleTooltip(true);
    };

    e.onmouseleave = ()=>{
        toggleTooltip(false);
    };


});











function setTooltipContent( html = '' ){
    tooltip.innerHTML = html;
}

function toggleTooltip( state = false ){
    tooltip.style.visibility = (state)? 'visible' : 'hidden';
}








 



// SELCT TAB
function selectTabByIndex( index = 0 ){
    
    document.querySelectorAll('.tab_active').forEach(e=>{
        e.classList.remove("tab_active");
    });
    tab_list[index].classList.add("tab_active");


    
    if ( index == 5 ){
        setScreen(1);
    }
    else if ( index == 11 ){
        setScreen(2);
    }
    else{
        setScreen(0);
    }


}














// SCREEN (GUI)
// 0 -- ITENS
// 1 -- ITENS (SEARCH)
function setScreen( index = 0 ){

    current_screen_index = index;

    tab_label.style.display = (index != 2)? 'block' : 'none';
    scroll_thumb.parentElement.parentElement.style.display = (index != 2)? 'block' : 'none';
    itens_slot_list.style.display = (index != 2)? 'grid' : 'none';
    input_element.style.display = (index == 1)? 'block' : 'none';
    input_element.value = (index == 1)? input_element.value : '';

    inventory_slot_list.style.display = (index == 2)? 'grid' : 'none';
    armor_slot_list.style.display = (index == 2)? 'initial' : 'none';

    document.querySelectorAll(".gameui_active").forEach(e=>{
        e.classList.remove('gameui_active');
    });

    document.querySelectorAll(".gameui_wrapper")[index].classList.add('gameui_active');

}














function genItemList( groupIndex = 0, offsetRow = 0 ){

    current_group_index = groupIndex;

    
    const refArry = MINECRAFT_ITEM[groupIndex].list;
    

    let canScroll = (itens_slot_list.children.length < refArry.length);

    
    if ( !canScroll ){
        scroll_thumb.style.top = 0;
    }
    
    scroll_thumb.classList.toggle("scroll_inactive", !canScroll);


    // SLOTS ITEMS
    for (let i = 0; i < itens_slot_list.children.length; i++){

        // CLEAR SLOT
        itens_slot_list.children[i].innerHTML = '';

        // OFFSET
        let offset = offsetRow * 9 + i;
        
        // ADD ITEM
        if ( i < refArry.length ){

            if ( refArry[offset] ){
                let item = document.createElement("div");
                item.classList.add("item");
                // item.innerHTML = `<div class="item-value">1</div>`;
                item.setAttribute("item-label", refArry[offset].label);
                item.setAttribute("item-name", refArry[offset].item);
                item.setAttribute("item-pack", refArry[offset].pack);
                item.style.backgroundPosition = `${-16 * refArry[offset].icon[0]}px ${-16 * refArry[offset].icon[1]}px`;
                itens_slot_list.children[i].appendChild(item);
            }

        }

    }


}








function searchItem( text = '' ){


    const index = MINECRAFT_ITEM[0].list.findIndex(object => {
        return object.label === 'b';
    });

    return index;
}





















// REMOVER VALOR (1) DO ITEM
function updateItemSlotValue(){

    all_slots.forEach(e=>{
        if ( e.querySelector(".item-value") ){
            e.querySelector(".item-value").style.visibility = (e.querySelector(".item-value").innerHTML <= 1)? 'hidden' : 'visible';
        }
    });

    if ( temp_slot.querySelector(".item-value") ){
        temp_slot.querySelector(".item-value").style.visibility = (temp_slot.querySelector(".item-value").innerHTML <= 1)? 'hidden' : 'visible';
    } 

}

















// FIND SLOT FREE INDEX

function findSlotFree( parentSlotId, referenceItemName ){


    let freeSlotIndex = -1;
    let freeSlotSameTypeItem = -1;


    document.querySelectorAll(`#${parentSlotId} .slot`).forEach((e, i)=>{

        

        // FIND SLOT FREE
        if ( e.firstElementChild == null && freeSlotIndex < 0 ){
            freeSlotIndex = i;
        }


        if ( e.firstElementChild != null && freeSlotSameTypeItem < 0 ){

            if ( referenceItemName == e.firstElementChild.getAttribute("item-name") && parseInt(e.querySelector(".item-value").innerHTML) < parseInt(e.firstElementChild.getAttribute("item-pack")) ){
                freeSlotSameTypeItem = i;
            }

        }


        if ( freeSlotIndex >= 0 && freeSlotSameTypeItem >= 0 ){
            return false;
        } 

    });




    return [freeSlotIndex, freeSlotSameTypeItem];



}








// MOVE ITEM TO...
// ex: from HAND to INVENTORY

function moveItemTo( refTo, refSlotClick ){
 
    let list_ref = document.getElementById(refTo);

    do{ 
        let indexFound = findSlotFree(refTo, refSlotClick.firstElementChild.getAttribute("item-name") );
        let newSlotQty = parseInt(refSlotClick.querySelector(".item-value").innerHTML);
        let maxPack = parseInt(refSlotClick.firstElementChild.getAttribute("item-pack"));


        // NO SPACE
        if ( indexFound[0] < 0 && indexFound[1] < 0 ){
            break;
        }

        // SLOT USED (SUM)
        if ( indexFound[1] >= 0 ){
            let foundItemQty = parseInt(list_ref.children[ indexFound[1] ].querySelector(".item-value").innerHTML);

            if ( foundItemQty + newSlotQty <= 64 ){
                list_ref.children[ indexFound[1] ].querySelector(".item-value").innerHTML =  foundItemQty + newSlotQty;
                refSlotClick.innerHTML = '';
            }
            else{
                let diff = maxPack - foundItemQty;
                list_ref.children[ indexFound[1] ].querySelector(".item-value").innerHTML = diff + foundItemQty;
                if ( newSlotQty - diff > 0 ){
                    refSlotClick.querySelector(".item-value").innerHTML = newSlotQty - diff;
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



















// SLOT EVENT
all_slots.forEach((el, idx)=>{



    el.onmousemove = ()=>{
        let state = el.firstElementChild != null && temp_slot.firstElementChild == null;
        if ( state ){
            setTooltipContent( el.firstElementChild.getAttribute("item-label") );
        }
        toggleTooltip( state );
    };

    el.onmouseleave = ()=>{
        toggleTooltip(false);
    };







    el.ondblclick = (evt)=>{
        console.log("XXXXXXXXXXXXXXXXXXx");



    };







    el.onmousedown = (evt)=>{


        let slot_free =  el.firstElementChild == null;
        let temp_free = temp_slot.firstElementChild == null;


        console.log(`slot ${idx}, parent (${el.parentElement.id}), shift(${evt.shiftKey}), button(${evt.button})`);


        let slot_qty = 0;
        let temp_qty = 0;

        if ( !slot_free ){ slot_qty = (el.querySelector('.item-value'))? Math.trunc(el.querySelector('.item-value').innerHTML) : null; }
        if ( !temp_free ){ temp_qty = Math.trunc(temp_slot.querySelector('.item-value').innerHTML); }


         
            

        // LEFT CLICK
        if ( evt.button == 0 ){
            


            // ITEM SLOT ( TRIGGER )
            if ( el.parentElement.id == "itens_slot_list" ){

                if ( !slot_free ){
                    
                    // PEGAR
                    if ( temp_free ){
                        temp_slot.innerHTML = el.innerHTML;
                        temp_slot.firstElementChild.innerHTML = `<div class="item-value">1</div>`;
                    }
                    // ADD +1
                    else{
                        if ( temp_slot.firstElementChild.getAttribute("item-name") == el.firstElementChild.getAttribute("item-name") ){
                            if ( temp_qty+1 <= temp_slot.firstElementChild.getAttribute("item-pack") ){
                                temp_slot.querySelector('.item-value').innerHTML = temp_qty + 1;
                            }
                        }
                        else{
                            temp_slot.innerHTML = '';
                        }
                    }
                }
                else{
                    temp_slot.innerHTML = '';
                }

            } 



           
            

            // INVENTORY | HAND ( TRIGGER )
            if ( el.parentElement.id == "inventory_slot_list" || el.parentElement.id == "hand_slot_list" ){
                
                if ( evt.shiftKey ){

                    // DELETE ITEM
                    if ( current_screen_index != 2 ){
                        el.innerHTML = '';
                    }

                    // MOVE ITEM
                    else{ 

                        if ( !slot_free ){
                            if ( el.parentElement.id == "hand_slot_list" ){
                                console.log("move to INVENTORY");
                                moveItemTo("inventory_slot_list", el);
                            }
                            else{
                                console.log("move to HAND");
                                moveItemTo("hand_slot_list", el);
                            }
                        }
                        
                    }


                }
                
                else{


                    // PEGAR ITEM
                    if ( temp_free && !slot_free ){
                        temp_slot.appendChild( el.firstElementChild );
                    }


                    // COLOCAR ITEM NO SLOT VAZIO
                    else if ( !temp_free && slot_free ){
                        el.appendChild( temp_slot.firstElementChild );
                    }



                    // COLOCA ITEM NO SLOT USADO
                    else if ( !temp_free && !slot_free ){

                        // SOMAR
                        if ( temp_slot.firstElementChild.getAttribute("item-name") == el.firstElementChild.getAttribute("item-name") ){

                            if ( slot_qty + temp_qty <= el.firstElementChild.getAttribute("item-pack") ){
                                temp_slot.innerHTML = '';
                                el.querySelector(".item-value").innerHTML = slot_qty + temp_qty;
                            }
                            else{
                                let diff = el.firstElementChild.getAttribute("item-pack") -  el.querySelector(".item-value").innerHTML;
                                el.querySelector(".item-value").innerHTML = slot_qty + diff;
                                temp_slot.querySelector(".item-value").innerHTML = temp_qty - diff;
                            }


                        }

                        // INVERTER
                        else{
                            temp_slot.appendChild( el.firstElementChild );
                            el.appendChild( temp_slot.firstElementChild );
                        }
                    }

                    
                }

            } 


        }










        // MIDDLE CLICK
        else if ( evt.button == 1 ){
            if ( temp_free && !slot_free ){
                temp_slot.innerHTML = el.innerHTML;
                temp_slot.firstElementChild.innerHTML = `<div class="item-value">${ el.firstElementChild.getAttribute("item-pack") }</div>`;
            }
        }













        // RIGHT CLICK
        else if ( evt.button == 2 ){

            // DIVIDIR | PEGAR
            if ( temp_free && !slot_free ){

                // DIVIDIR
                if ( slot_qty > 1 ){
                    temp_slot.innerHTML = el.innerHTML;
                    temp_slot.querySelector(".item-value").innerHTML = el.querySelector(".item-value").innerHTML - Math.trunc(slot_qty/2);
                    el.querySelector(".item-value").innerHTML = Math.trunc(slot_qty/2);
                }

                // PEGAR
                else{
                    if ( el.parentElement.id == "itens_slot_list" ){
                        temp_slot.innerHTML = el.innerHTML;
                        temp_slot.firstElementChild.innerHTML = `<div class="item-value">1</div>`;
                    } 
                    else{
                        temp_slot.appendChild( el.firstElementChild );
                    }
                }

            }




            // COLOCAR +1 NO SLOT VAZIO
            else if ( !temp_free && slot_free ){

                el.innerHTML = temp_slot.innerHTML;
                el.querySelector(".item-value").innerHTML = 1;

                if ( temp_qty-1 <= 0 ){
                    temp_slot.innerHTML = '';
                }
                else{
                    temp_slot.querySelector(".item-value").innerHTML = temp_qty - 1;
                } 
            }




            // COLOCAR +1 NO SLOT USADO
            else if ( !temp_free && !slot_free ){
                
                // ITEM LIST -1
                if ( el.parentElement.id == "itens_slot_list" ){
                    temp_slot.querySelector(".item-value").innerHTML = temp_qty - 1;
                    if ( temp_qty - 1 <= 0 ){ 
                        temp_slot.innerHTML = '';
                    } 
                }


                // ADD +1 | INVERTER >> ( INVENTORY | HAND )
                else{

                    // ADD +1
                    if ( temp_slot.firstElementChild.getAttribute("item-name") == el.firstElementChild.getAttribute("item-name") ){
                        if ( slot_qty < el.firstElementChild.getAttribute("item-pack") ){
                            temp_slot.querySelector(".item-value").innerHTML = temp_qty - 1;
                            el.querySelector(".item-value").innerHTML = slot_qty + 1;
                        }
                        if ( temp_qty - 1 <= 0 ){ 
                            temp_slot.innerHTML = '';
                        } 
                    }

                    // INVERTER
                    else{
                        temp_slot.appendChild( el.firstElementChild );
                        el.appendChild( temp_slot.firstElementChild );
                    }
                }

                


            }



        }
        




        updateItemSlotValue();
        toggleTooltip( !temp_slot.firstElementChild && el.firstElementChild );
        // END EVENT

    };







});











