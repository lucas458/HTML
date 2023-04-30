


 
 


var PLAYER_MOVEMENT = {x: 0, y: 0};
var PLAYER_CANMOVE = true;

var PLAYER_ANIMATION_FRAME = 0;
var PLAYER_ANIMATION_SPEED = 0;

var PLAYER_ALIVE = true;
var PLAYER_ANIMATION_IDX = 0;

var PLAYER_CANJUMP = true;
var PLAYER_JUMP_FORCE = -0.8;
var PLAYER_GROUNDED = false;


var GRAVITY_ACCEL = 1;



const PLAYER_ANIMATION = [

    // IDLE
    {  
        "count": 11,
        "speed": 3,
        "file": "assets/player/Idle.png"
    },

    // RUN
    {
        "count": 12,
        "speed": 3,
        "file": "assets/player/Run.png"
    },

    // JUMP
    {
        "count": 1,
        "speed": 1,
        "file": "assets/player/Jump.png"
    },

    // FALL
    {
        "count": 1,
        "speed": 1,
        "file": "assets/player/Fall.png"
    }

];








 
 
var player = document.getElementById("player");
var tile_map = document.getElementById("tile_map");
 


 






/*

let collision = 
    player.offsetLeft < e.offsetLeft + e.offsetWidth-8 &&
    player.offsetLeft + player.offsetWidth > e.offsetLeft+8 &&
    player.offsetTop < e.offsetTop-16 + e.offsetHeight &&
    player.offsetHeight + player.offsetTop > e.offsetTop;
    
*/






/************************************************/

var delta = 0;
var timestamp_old = 0;




function update( timestamp = 0 ){
    delta = (timestamp - timestamp_old) / 1000;
    timestamp_old = timestamp; 

    document.getElementById("fps").innerHTML = (1/delta|0);

    if ( PLAYER_MOVEMENT.x != 0 ){ 
        player.style.transform = `scaleX(${PLAYER_MOVEMENT.x*100}%)`;
    }





    
    // JUMP | FALL
    if ( !PLAYER_GROUNDED ){
        PLAYER_ANIMATION_IDX = (GRAVITY_ACCEL > 0)? 3 : 2;
    }

    // MOVE
    else if ( PLAYER_MOVEMENT.x != 0 ){
        PLAYER_ANIMATION_IDX = 1;
        
    } 
    // IDLE
    else{
        PLAYER_ANIMATION_IDX = 0;
    }
    

    
    
    
    // PLAYER ANIMATION
    if ( ++PLAYER_ANIMATION_SPEED > PLAYER_ANIMATION[PLAYER_ANIMATION_IDX].speed ){
        PLAYER_ANIMATION_FRAME = (PLAYER_ANIMATION_FRAME+1) % PLAYER_ANIMATION[PLAYER_ANIMATION_IDX].count;
        playerSetSprite(PLAYER_ANIMATION[PLAYER_ANIMATION_IDX].file, PLAYER_ANIMATION_FRAME);
        PLAYER_ANIMATION_SPEED = 0;
    } 

    move(PLAYER_MOVEMENT.x*delta*100, delta*200*GRAVITY_ACCEL, player);
    
    
    if ( GRAVITY_ACCEL < 1 ){
        GRAVITY_ACCEL += 0.02;
    }
    else{
        GRAVITY_ACCEL = 1;
    }


    document.querySelectorAll(".hitbox").forEach((e, index)=>{


        let collision = 
            player.offsetLeft < e.offsetLeft + e.offsetWidth-8 &&
            player.offsetLeft + player.offsetWidth > e.offsetLeft+8 &&
            player.offsetTop < e.offsetTop-16 + e.offsetHeight &&
            player.offsetHeight + player.offsetTop > e.offsetTop;

            
          
        if (collision){  
            PLAYER_GROUNDED = true;
            PLAYER_CANJUMP = true;
            player.style.top = (e.offsetTop - player.offsetHeight) + 'px';
            return false;
        }
        
         

        

    });






    window.requestAnimationFrame(update);

}



window.requestAnimationFrame(update);















// CLAMP
function clamp(value, min, max){
    if ( value < min ) return min;
    if ( value > max ) return max;
    return value;
}



// MOVE -- PIXEL per FRAME
function move(x = 0, y = 0, ref){
    

    let posX = ref.offsetLeft + x;
    let posY = ref.offsetTop + y;


    posX = clamp(posX, 0, tile_map.offsetWidth - ref.offsetWidth);
    posY = clamp(posY, 0, tile_map.offsetHeight - ref.offsetHeight);
    
    ref.style.left = (posX) + 'px';
    ref.style.top = (posY) + 'px';

}





var TIMER_KEY = null;


window.onkeydown = (evt) => {
    if ( TIMER_KEY == null ){
        TIMER_KEY = setInterval(()=>{
            keyboard(evt);
        }, 1);
    } 

};

 

window.onkeyup = clearTimerKeyboard;
window.onblur  = clearTimerKeyboard;


function clearTimerKeyboard(){
    PLAYER_MOVEMENT.x = 0;
    PLAYER_MOVEMENT.y = 0;
    clearInterval(TIMER_KEY);
    TIMER_KEY = null;
    FLAG_KEY_BOMB = false;
}


 

function keyboard( event ){

    // console.log( event.key );


    PLAYER_MOVEMENT.x = 0;
    PLAYER_MOVEMENT.y = 0;

    if ( event.key == "ArrowLeft" ){
        PLAYER_MOVEMENT.x = -1;
    }
    else if ( event.key == "ArrowRight" ){
        PLAYER_MOVEMENT.x = 1;
    }
    else if ( event.key == "ArrowUp" ){
        PLAYER_MOVEMENT.y = -1
    }
    else if ( event.key == "ArrowDown" ){
        PLAYER_MOVEMENT.y = 1;
    }
 
    
    if ( event.keyCode == 32 && PLAYER_GROUNDED && PLAYER_CANJUMP ){
        GRAVITY_ACCEL = PLAYER_JUMP_FORCE;
        PLAYER_CANJUMP = false;
        PLAYER_GROUNDED = false;
    }


}






function playerSetSprite( file, frame = 0 ){
    player.style.backgroundImage = `url(${file})`;
    player.style.backgroundPositionX = (-32 * frame) + 'px';
}



 









let testMap = [

    ["                  "],
    ["                  "],
    ["                  "],
    ["                  "],
    ["                  "],
    ["                  ABBBBBBBBBBBBBBBBC"],
    ["ABBBBBBBBBBBBBBBBC"],
    

];





const HITBOX_KEYS = "ABCDEFGHI";



function isHitBoxKey( key = " " ){
    return (HITBOX_KEYS.indexOf(key) >= 0);
}






function genMap( list ){


    
    tile_map.innerHTML = '';



    for (let i = 0; i < list.length; i++){


        for (let j = 0; j < list[i].length; j++){
            

            let strip = list[i][j];


            if ( j == 0 ){
                tile_map.style.gridTemplateColumns = `repeat(${strip.length}, 16px)`;
                tile_map.style.gridTemplateRows = `repeat(${list.length}, 16px)`;
            }

            for (let h = 0; h < strip.length; h++){
                console.log( strip[h] );

                let tile = document.createElement('div');
                tile.classList.add("tile");


                if ( isHitBoxKey(strip[h]) ){
                    tile.classList.add("hitbox");
                }







                if ( strip[h] == "A" ){
                    tile.classList.add("grass_top_left");
                }


                else if ( strip[h] == "B" ){
                    tile.classList.add("grass_top_center");
                }

                else if ( strip[h] == "C" ){
                    tile.classList.add("grass_top_right");
                }
                
                else if ( strip[h] == " " ){
                    // tile.classList.add("grass_top_right");
                    tile.classList.remove("tile");
                }



                tile_map.appendChild(tile);


            }


        }

    }




}




genMap( testMap );










