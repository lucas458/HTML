






var gamescreen = document.getElementById("gamescreen");
var gamearea = document.getElementById("gamearea");
var gamemap = document.getElementById("gamemap");
var explosions = document.getElementById("explosions");
var bombs = document.getElementById("bombs");

var player = document.getElementById("player");

var SCREEN_SIZE = Math.min(gamescreen.offsetWidth, gamescreen.offsetHeight);

var SPRITE_SIZE = SCREEN_SIZE / 16;




gamearea.style.width = SCREEN_SIZE + 'px';
gamearea.style.height = SCREEN_SIZE + 'px';



var PLAYER_MOVEMENT = {x: 0, y: 0};
var PLAYER_ANIMATION_FRAME = 0;
var PLAYER_ANIMATION_DELAY = 0;
var PLAYER_CANMOVE = true;
var PLAYER_ALIVE = true;


const PLAYER_ANIMATION = {

    "move_left": [
        [0, 0], [1, 0], [2, 0]
    ],

    "move_right": [
        [0, 1], [1, 1], [2, 1]
    ],

    "move_top": [
        [3, 1], [4, 1], [5, 1]
    ],

    "move_down": [
        [3, 0], [4, 0], [5, 0]
    ],

    "killed": [
        [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2],
    ]

};



const BOMB_ANIMATION = [ [0, 3], [1, 3], [2, 3] ];

const FIRE_ANIMATION = [ [2, 6], [6, 6], [2, 11], [6, 11] ];

var BOMB_QUEUE = [];
var BOMB_MAX = 2;
var BOMB_RANGE = 3;

var FLAG_KEY_BOMB = false;



class Bomb{


    constructor(){
        this.timer = 300;
        this.bombFrame = 0;
        this.bombAnimationDelay = 0;

        this.x = parseInt((player.offsetLeft+player.offsetWidth/2) / SPRITE_SIZE) * SPRITE_SIZE;
        this.y =  parseInt((player.offsetTop+player.offsetHeight/2) / SPRITE_SIZE) * SPRITE_SIZE;
        
        this.gridX = this.x / SPRITE_SIZE;
        this.gridY = this.y / SPRITE_SIZE;


        // BOMB ELEMENT DIV
        let bombSprite = document.createElement("div");
        bombSprite.classList.add("sprite");
        bombSprite.classList.add("bomb");
        bombSprite.setAttribute("posX", this.gridX);
        bombSprite.setAttribute("posY", this.gridY);

        // BOMB POSITION
        bombSprite.style.left = this.x + 'px';
        bombSprite.style.top = this.y + 'px';
        

        // APPEND BOMB TO 
        bombs.appendChild(bombSprite);
        
        console.log("set at:", [this.x, this.y]);

        // BOMB TIMER
        this.timerBomb = setInterval(()=>{

           
            this.timer -= 1;

            // BOMB ANIMATINO SPEED
            if ( this.bombAnimationDelay++ > 10 ){
                this.bombAnimationDelay = 0
                this.bombFrame = (this.bombFrame+1) % BOMB_ANIMATION.length;
            }
            // SET BOMB SPRITE
            setSprite(BOMB_ANIMATION[this.bombFrame][0], BOMB_ANIMATION[this.bombFrame][1], bombSprite);

            // ON TIMEOUT
            if ( this.timer <= 0 ){
                clearInterval(this.timerBomb);
                BOMB_QUEUE.shift();
                this.explodeBomb();
                console.log("booom");

                if ( bombs.firstElementChild ){
                    bombs.firstElementChild.remove();
                }
                 
            }

        }, 10);

    }



    explodeBomb(){
        console.log("explode at:", [this.x, this.y]);



        let explosion_wrapper = document.createElement("div");
        explosion_wrapper.classList.add("explosion_wrapper");


         


        


        let flag_right  = false;
        let flag_left   = false;
        let flag_top    = false;
        let flag_bottom = false;

        // FIRE GENERATOR
        for (let i = 0; i <= BOMB_RANGE; i++){
            

            if ( i > 0 ){


                let fire = document.createElement("div");
                fire.classList.add("fire");
                fire.classList.add("sprite");

                // right
                if ( !flag_right ){
                    if ( !checkPosition(this.gridX+i, this.gridY) ){
                        let subFire = fire.cloneNode(true);
                        subFire.style.left = (SPRITE_SIZE*(this.gridX+i)) + 'px';
                        subFire.style.top = (this.y) + 'px';

                        if ( !checkPosition(this.gridX+i+1, this.gridY) && i < BOMB_RANGE ){
                            setSprite( FIRE_ANIMATION[0][0]+1, FIRE_ANIMATION[0][1], subFire);
                        }
                        else{
                            flag_right = true;
                            setSprite( FIRE_ANIMATION[0][0]+2, FIRE_ANIMATION[0][1], subFire);
                        }
                        explosion_wrapper.appendChild(subFire);

                    }
                    else{
                        flag_right = true;
                    }
                }



                // left
                if ( !flag_left ){
                    if ( !checkPosition(this.gridX-i, this.gridY) ){
                        let subFire = fire.cloneNode(true);
                        subFire.style.left = (SPRITE_SIZE*(this.gridX-i)) + 'px';
                        subFire.style.top = (this.y) + 'px';

                        if ( !checkPosition(this.gridX-i-1, this.gridY) && i < BOMB_RANGE ){
                            setSprite( FIRE_ANIMATION[0][0]-1, FIRE_ANIMATION[0][1], subFire);
                        }
                        else{
                            flag_left = true;
                            setSprite( FIRE_ANIMATION[0][0]-2, FIRE_ANIMATION[0][1], subFire);
                        }
                        explosion_wrapper.appendChild(subFire);

                    }
                    else{
                        flag_left = true;
                    }
                }



                // bottom
                if ( !flag_bottom ){
                    if ( !checkPosition(this.gridX, this.gridY+i) ){
                        let subFire = fire.cloneNode(true);
                        subFire.style.left = (this.x) + 'px';
                        subFire.style.top = (SPRITE_SIZE*(this.gridY+i)) + 'px';

                        if ( !checkPosition(this.gridX, this.gridY+i+1) && i < BOMB_RANGE ){
                            setSprite( FIRE_ANIMATION[0][0], FIRE_ANIMATION[0][1]+1, subFire);
                        }
                        else{
                            flag_bottom = true;
                            setSprite( FIRE_ANIMATION[0][0], FIRE_ANIMATION[0][1]+2, subFire);
                        }
                        explosion_wrapper.appendChild(subFire);

                    }
                    else{
                        flag_bottom = true;
                    }
                }

                
 
            }
            else{
                let fire = document.createElement("div");
                fire.classList.add("fire");
                fire.classList.add("sprite");
                fire.style.left = this.x + 'px';
                fire.style.top = this.y + 'px';
                setSprite( FIRE_ANIMATION[0][0], FIRE_ANIMATION[0][1], fire);
                explosion_wrapper.appendChild(fire);
            }

            


            



        }explosions.appendChild(explosion_wrapper);



    }



}











function checkPosition(x, y){


    if ( x < 0 || y < 0 ){
        return true;
    }

    let list = document.querySelectorAll('.bomb_stop');

    let flag = false;

    list.forEach((e, i)=>{
        if ( x == parseInt(e.getAttribute("posX")) && y == parseInt(e.getAttribute("posY")) ){
            flag = true;
            return false;
        }
    });


    return flag;


}


checkPosition(0, );


 




 
function genMap(){

    gamemap.innerHTML = '';

    for (let i = 0; i < 16*16; i++){

        let tile = document.createElement("div");
        tile.classList.add("sprite");
        tile.classList.add("bomb_stop");

        let x = parseInt(i % 16);
        let y = parseInt(i / 16);
        
        
        
        if ( (x > 0 && x < 16) && (y > 0 && y < 16) ){
            
            
            if ( x%2 == 1 && y%2 == 1){
                setSprite(3, 3, tile);
                tile.classList.add("hitbox");
                tile.classList.add("unbreak");
                tile.setAttribute("posX", x);
                tile.setAttribute("posY", y);
            }
            else{

                if ( parseInt(Math.random() * 10) >= 5 ){
                    setSprite(4, 3, tile);
                    //tile.classList.add("hitbox");
                    tile.classList.add("break");
                    tile.setAttribute("posX", x);
                    tile.setAttribute("posY", y);
                }
                else{
                    setSprite(6, 0, tile);
                }

                
            }

        }
        else{ 

            if ( parseInt(Math.random() * 10) >= 5 && (x > 1 || y > 1) ){
                setSprite(4, 3, tile);
                //tile.classList.add("hitbox");
                tile.classList.add("break");
                tile.setAttribute("posX", x);
                tile.setAttribute("posY", y);
            }
            else{
                setSprite(6, 0, tile);
            }

        }
        
        gamemap.appendChild( tile );




        
    }
    


}




genMap();
setSprite(4, 0, player);














var TIMER_KEY = null;





window.onkeydown = (evt) => {
    if ( TIMER_KEY == null ){
        TIMER_KEY = setInterval(()=>{
            keyboard(evt);
        }, 1);
    }


    if ( !FLAG_KEY_BOMB && evt.keyCode == 32 && BOMB_QUEUE.length < BOMB_MAX && PLAYER_ALIVE ){
        FLAG_KEY_BOMB = true;
        console.log("bomb set");


        
        if ( BOMB_QUEUE.length < BOMB_MAX ){
            BOMB_QUEUE.push( new Bomb() );
        }

        

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


}










var delta = 0;
var timestamp_old = 0;

var animation_kill_end = false;


function update( timestamp = 0 ){
    delta = (timestamp - timestamp_old) / 1000;
    timestamp_old = timestamp; 


    
    // PLAYER ANIMATION
    if ( PLAYER_CANMOVE && PLAYER_ALIVE && (PLAYER_MOVEMENT.x != 0 || PLAYER_MOVEMENT.y != 0) ){

        if ( PLAYER_ANIMATION_DELAY++ > 5 ){
            PLAYER_ANIMATION_DELAY = 0;
            PLAYER_ANIMATION_FRAME = (PLAYER_ANIMATION_FRAME+1) % 3; 
            if ( PLAYER_MOVEMENT.x > 0 ){
                setSprite(  PLAYER_ANIMATION.move_right[PLAYER_ANIMATION_FRAME][0], PLAYER_ANIMATION.move_right[PLAYER_ANIMATION_FRAME][1], player);
            }
            else if ( PLAYER_MOVEMENT.x < 0 ){
                setSprite(  PLAYER_ANIMATION.move_left[PLAYER_ANIMATION_FRAME][0], PLAYER_ANIMATION.move_left[PLAYER_ANIMATION_FRAME][1], player);
            }
            else if ( PLAYER_MOVEMENT.y < 0 ){
                setSprite(  PLAYER_ANIMATION.move_top[PLAYER_ANIMATION_FRAME][0], PLAYER_ANIMATION.move_top[PLAYER_ANIMATION_FRAME][1], player);
            }
            else if ( PLAYER_MOVEMENT.y > 0 ){
                setSprite(  PLAYER_ANIMATION.move_down[PLAYER_ANIMATION_FRAME][0], PLAYER_ANIMATION.move_down[PLAYER_ANIMATION_FRAME][1], player);
            }
            
        }
        move(PLAYER_MOVEMENT.x*2, PLAYER_MOVEMENT.y*2, player);
    }

    



    let list_hitbox = document.querySelectorAll(".hitbox");
    let list_fire = document.querySelectorAll("#explosions .fire");

    


    
    if ( PLAYER_ALIVE ){

        // WALL COLISSION
        list_hitbox.forEach((e, i)=>{
        
            let collision = 
            player.offsetLeft < e.offsetLeft + e.offsetWidth-8 &&
            player.offsetLeft + player.offsetWidth > e.offsetLeft+8 &&
            player.offsetTop < e.offsetTop-16 + e.offsetHeight &&
            player.offsetHeight + player.offsetTop > e.offsetTop;
    
            if ( collision ){
                console.log("hit", i);
    
                PLAYER_ANIMATION_FRAME = 0;
    
                if ( PLAYER_MOVEMENT.x > 0 ){
                    player.style.left = ((e.offsetLeft+8 - player.offsetWidth )) + 'px';
                }
                else if ( PLAYER_MOVEMENT.x < 0 ){
                    player.style.left = (e.offsetLeft-8 + e.offsetWidth) + 'px';
                }
                else if ( PLAYER_MOVEMENT.y > 0 ){
                    player.style.top = (e.offsetTop - player.offsetHeight) + 'px';
                }
                else if ( PLAYER_MOVEMENT.y < 0 ){
                    player.style.top = (e.offsetTop-16 + e.offsetHeight) + 'px';
                }
    
                return true;
            }
        });



        // FIRE COLLISION
        list_fire.forEach((e, i)=>{
            let collision = 
            player.offsetLeft < e.offsetLeft + e.offsetWidth-8 &&
            player.offsetLeft + player.offsetWidth > e.offsetLeft+8 &&
            player.offsetTop < e.offsetTop-16 + e.offsetHeight &&
            player.offsetHeight + player.offsetTop > e.offsetTop;
    
            if ( collision ){
                console.log("TOUCH FIRE");
                PLAYER_ANIMATION_FRAME = 0;
                PLAYER_ANIMATION_DELAY = 0;
                PLAYER_ALIVE = false;
                return false;
            }
        });
    }


    // ANIMATION KILL
    else{

        

        if ( PLAYER_ANIMATION_DELAY++ > 5 && !animation_kill_end ){
            PLAYER_ANIMATION_DELAY = 0;
            PLAYER_ANIMATION_FRAME = (PLAYER_ANIMATION_FRAME+1) % 7;
            setSprite(PLAYER_ANIMATION.killed[PLAYER_ANIMATION_FRAME][0], PLAYER_ANIMATION.killed[PLAYER_ANIMATION_FRAME][1], player);

            if ( PLAYER_ANIMATION_FRAME == 0 ){
                animation_kill_end = true;
                console.log("killed fire")
                player.style.display = 'none';
            }
            

        }


    }

   











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


    posX = clamp(posX, 0, gamearea.offsetWidth - ref.offsetWidth);
    posY = clamp(posY, 0, gamearea.offsetHeight - ref.offsetHeight);
    
    ref.style.left = (posX) + 'px';
    ref.style.top = (posY) + 'px';

}




// SET SPRITE
function setSprite(x, y, ref){
    ref.style.backgroundSize = `${224 * (SPRITE_SIZE/16)}px ${368 * (SPRITE_SIZE/16)}px`;
    ref.style.backgroundPosition = `${-SPRITE_SIZE * x}px ${-SPRITE_SIZE * y}px`;

}

