







const PLAYER_RED_PATTERN = [
    [1,6],[2,6],[3,6],[4,6],[5,6],
    [6,5],[6,4],[6,3],[6,2],[6,1],[6,0],
    [7,0],
    [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],
    [9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
    [14,7],
    [14,8],[13,8],[12,8],[11,8],[10,8],[9,8],
    [8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
    [7,14],
    [6,14],[6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],
    [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7]
];



const PLAYER_GREEN_PATTERN = [
    [8,1],[8,2],[8,3],[8,4],[8,5],
    [9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
    [14,7],
    [14,8],[13,8],[12,8],[11,8],[10,8],[9,8],
    [8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
    [7,14],
    [6,14],[6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],
    [0,7],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
    [6,5],[6,4],[6,3],[6,2],[6,1],[6,0],
    [7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],
];



const PLAYER_YELLOW_PATTERN = [
    [13,8],[12,8],[11,8],[10,8],[9,8],
    [8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
    [7,14],
    [6,14],[6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],
    [0,7],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
    [6,5],[6,4],[6,3],[6,2],[6,1],[6,0],
    [7,0],
    [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],
    [9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
    [14,7],[13,7],[12,7],[11,7],[10,7],[9,7],[8,7],
]


const PLAYER_BLUE_PATTERN = [
    [6,13],[6,12],[6,11],[6,10],[6,9],
    [5,8],[4,8],[3,8],[2,8],[1,8],[0,8],
    [0,7],
    [0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
    [6,5],[6,4],[6,3],[6,2],[6,1],[6,0],
    [7,0],
    [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],
    [9,6],[10,6],[11,6],[12,6],[13,6],[14,6],
    [14,7],
    [14,8],[13,8],[12,8],[11,8],[10,8],[9,8],
    [8,9],[8,10],[8,11],[8,12],[8,13],[8,14],
    [7,14],[7,13],[7,12],[7,11],[7,10],[7,9],[7,8],
]




const SAFE_ZONE = [
    [2,8], [6,2], [12,6], [8,12]
];











var GAME = {

    canAction: true,
    isRunning: true,
    playerIndex: 0,
    playerDice: -1,

    canRemovePiece: false,  // PODE REMOVER A PEÇA DA CASE DE PEÇAS?


    playerList: [
        {name: '', bot:false, winner:false},
        {name: '', bot:false, winner:false},
        {name: '', bot:false, winner:false},
        {name: '', bot:false, winner:false}
    ]





};








var playerInitPos = [];








function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}





function map( x,  in_min,  in_max,  out_min,  out_max){
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}






// CLICK GRID 
document.getElementById("table-wrapper").onclick = (e)=>{
    
    let x = e.offsetX / (589 / 15)|0;
    let y = e.offsetY / (589 / 15)|0;

    console.log(`X=${x}, Y=${y}`);
};



 




















// GERAR TABULEIRO
function genTable(){



    let value = Math.min(
        document.getElementById("table").offsetWidth,
        document.getElementById("table").offsetHeight
    );
    
    
    document.querySelector("#table #tableImage").style.width = value + 'px';
    document.querySelector("#table #tableImage").style.height = value + 'px';

}


// GERAR PLAYERS
function genPlayers(){
    

    let value = document.querySelector("#table #tableImage").offsetWidth;

    let boxSize = value / 15;

    let playerSize =  parseInt(boxSize);
    if ( playerSize%2 == 0){playerSize++;}

    

    playerInitPos = [
        [(boxSize * 2 - boxSize/2), (boxSize * 3 - boxSize)],
        [(boxSize * 3 - boxSize/2), (boxSize * 4 - boxSize)],
        [(boxSize * 3 - boxSize/2), (boxSize * 2 - boxSize)],
        [(boxSize * 4 - boxSize/2), (boxSize * 3 - boxSize)],

        [(boxSize * 11 - boxSize/2), (boxSize * 3 - boxSize)],
        [(boxSize * 12 - boxSize/2), (boxSize * 4 - boxSize)],
        [(boxSize * 12 - boxSize/2), (boxSize * 2 - boxSize)],
        [(boxSize * 13 - boxSize/2), (boxSize * 3 - boxSize)],

        [(boxSize * 2 - boxSize/2), (boxSize * 12 - boxSize)],
        [(boxSize * 3 - boxSize/2), (boxSize * 13 - boxSize)],
        [(boxSize * 3 - boxSize/2), (boxSize * 11 - boxSize)],
        [(boxSize * 4 - boxSize/2), (boxSize * 12 - boxSize)],

        [(boxSize * 11 - boxSize/2), (boxSize * 12 - boxSize)],
        [(boxSize * 12 - boxSize/2), (boxSize * 13 - boxSize)],
        [(boxSize * 12 - boxSize/2), (boxSize * 11 - boxSize)],
        [(boxSize * 13 - boxSize/2), (boxSize * 12 - boxSize)],
    ];


    document.querySelectorAll(".player-wrapper").forEach((e, i)=>{

        // SET SIZE
        e.style.width = playerSize + 'px';
        e.style.height = playerSize + 'px';
        e.querySelector('svg').style.width = playerSize + 'px';
        e.querySelector('svg').style.height = playerSize + 'px';

        // SET POSITION
        e.style.left = playerInitPos[i][0] + 'px';
        e.style.top = playerInitPos[i][1] + 'px';

        
        e.setAttribute("pos-x", '-1');
        e.setAttribute("pos-y", '-1');


    });






}






window.onload = ()=>{
    

    for (let i = 0; i < 4; i++){
        document.querySelectorAll(".playerName")[i].innerText = GAME.playerList[i].name;
    }

    moveDiceTo(GAME.playerIndex);
    
    
    genTable();
    genPlayers();
};


 












// CLICK NA PEÇA
document.querySelectorAll(".player-wrapper").forEach((e,i)=>{



    e.addEventListener("click", ()=>{

        console.log("CLICK NO PLAYER", i);

    });

});































// CALCULAR POSIÇÃO EM RELAÇÃO AO QUADRADO DA CASA (NÃO USAR DIRETAMENTE)
function calcularPlayerPos(x, y, color){

    if ( x < 0 || x > 15 || y < 0 || y > 15){
        return [null,null];
    }

    let value = document.querySelector("#table img").offsetWidth;


    let boxSize = value / 15;


    

    if ( color == 'red' ){
        return [(x* boxSize - (0.25*boxSize)), (y* boxSize - (0.75*boxSize))];
    }

    else if ( color == 'green' ){
        return [(x* boxSize + (0.25*boxSize)), (y* boxSize - (0.75*boxSize))];
    }

    else if ( color == 'blue' ){
        return [(x* boxSize - (0.25*boxSize)), (y* boxSize - (0.25*boxSize))];
    }

    else if ( color == 'yellow' ){
        return [(x* boxSize + (0.25*boxSize)), (y* boxSize - (0.25*boxSize))];
    }


    return [0,0];
    
    
}




// COLOCA A PEÇA NUMA POSIÇÃO
function setPiecePosition( pos = 0, playerIdx, pieceIdx ){


    let listPlayers = document.querySelectorAll(".player-wrapper");


 
    let indexPlayer = playerIdx*4+pieceIdx;


    if ( pos == -1 ){
        listPlayers[indexPlayer].style.left = playerInitPos[indexPlayer][0] + 'px';
        listPlayers[indexPlayer].style.top = playerInitPos[indexPlayer][1] + 'px';
        return;
    }

    let position;


    // RED
    if ( playerIdx == 0 ){
        
        
        
        if ( pos >= PLAYER_RED_PATTERN.length-1 ){
            if (pieceIdx==0){
                position = calcularPlayerPos(PLAYER_RED_PATTERN[pos][0], PLAYER_RED_PATTERN[pos][1], 'red');
            }else if (pieceIdx==1){
                position = calcularPlayerPos(PLAYER_RED_PATTERN[pos][0], PLAYER_RED_PATTERN[pos][1], 'green');
            }else if (pieceIdx==2){
                position = calcularPlayerPos(PLAYER_RED_PATTERN[pos][0], PLAYER_RED_PATTERN[pos][1], 'blue');
            }else{
                position = calcularPlayerPos(PLAYER_RED_PATTERN[pos][0], PLAYER_RED_PATTERN[pos][1], 'yellow');
            }
        }
        else{
            position = calcularPlayerPos(PLAYER_RED_PATTERN[pos][0], PLAYER_RED_PATTERN[pos][1], 'red');
        }
        
        

    
    }
    
    // GREEN
    else if ( playerIdx == 1 ){

        
        if ( pos >= PLAYER_GREEN_PATTERN.length-1 ){
            if (pieceIdx==0){
                position = calcularPlayerPos(PLAYER_GREEN_PATTERN[pos][0], PLAYER_GREEN_PATTERN[pos][1], 'red');
            }else if (pieceIdx==1){
                position = calcularPlayerPos(PLAYER_GREEN_PATTERN[pos][0], PLAYER_GREEN_PATTERN[pos][1], 'green');
            }else if (pieceIdx==2){
                position = calcularPlayerPos(PLAYER_GREEN_PATTERN[pos][0], PLAYER_GREEN_PATTERN[pos][1], 'blue');
            }else{
                position = calcularPlayerPos(PLAYER_GREEN_PATTERN[pos][0], PLAYER_GREEN_PATTERN[pos][1], 'yellow');
            }
        }
        else{
            position = calcularPlayerPos(PLAYER_GREEN_PATTERN[pos][0], PLAYER_GREEN_PATTERN[pos][1], 'green');
        }
         
         

    }
    
    // BLUE
    else if ( playerIdx == 2 ){
        

         
        if ( pos >= PLAYER_BLUE_PATTERN.length-1 ){
            if (pieceIdx==0){
                position = calcularPlayerPos(PLAYER_BLUE_PATTERN[pos][0], PLAYER_BLUE_PATTERN[pos][1], 'red');
            }else if (pieceIdx==1){
                position = calcularPlayerPos(PLAYER_BLUE_PATTERN[pos][0], PLAYER_BLUE_PATTERN[pos][1], 'green');
            }else if (pieceIdx==2){
                position = calcularPlayerPos(PLAYER_BLUE_PATTERN[pos][0], PLAYER_BLUE_PATTERN[pos][1], 'blue');
            }else{
                position = calcularPlayerPos(PLAYER_BLUE_PATTERN[pos][0], PLAYER_BLUE_PATTERN[pos][1], 'yellow');
            }
        }
        else{
            position = calcularPlayerPos(PLAYER_BLUE_PATTERN[pos][0], PLAYER_BLUE_PATTERN[pos][1], 'blue');
        }
         
        



    }
    
    // YELLOW
    else if ( playerIdx == 3 ){
         
        if ( pos >= PLAYER_YELLOW_PATTERN.length-1 ){
            if (pieceIdx==0){
                position = calcularPlayerPos(PLAYER_YELLOW_PATTERN[pos][0], PLAYER_YELLOW_PATTERN[pos][1], 'red');
            }else if (pieceIdx==1){
                position = calcularPlayerPos(PLAYER_YELLOW_PATTERN[pos][0], PLAYER_YELLOW_PATTERN[pos][1], 'green');
            }else if (pieceIdx==2){
                position = calcularPlayerPos(PLAYER_YELLOW_PATTERN[pos][0], PLAYER_YELLOW_PATTERN[pos][1], 'blue');
            }else{
                position = calcularPlayerPos(PLAYER_YELLOW_PATTERN[pos][0], PLAYER_YELLOW_PATTERN[pos][1], 'yellow');
            }
        }
        else{
            position = calcularPlayerPos(PLAYER_YELLOW_PATTERN[pos][0], PLAYER_YELLOW_PATTERN[pos][1], 'yellow');
        }
         
    }




    if ( playerIdx >= 0 && playerIdx <= 3 ){
        listPlayers[indexPlayer].style.left = position[0] + 'px';
        listPlayers[indexPlayer].style.top = position[1] + 'px';
    }
     



}

// pos, player, piece
//setPiecePosition(0, 0, 0);




// COLOCAR TEXTO NO PLAYER
function setPieceNumber( value = 1, playerIdx, pieceIdx ){


    if ( Math.abs(playerIdx) >= 4 || Math.abs(pieceIdx) >= 4 ){
        return;
    }



    let listPlayers = document.querySelectorAll(".player-wrapper");
    let indexPlayer = playerIdx*4+pieceIdx;


    if ( !isNaN(value) && (value >= 2 && value <= 4 ) ){
        listPlayers[indexPlayer].children[1].innerText = value;
    }
    else{
        listPlayers[indexPlayer].children[1].innerText = '';
    }

    
}















var DICE_TIMER = null;
var DICE_TIMER_COUTER = 0;








// MOVE O DADO PARA O FRAME (-1 para colocar no centro)
function moveDiceTo( playerIdx ){


    if ( playerIdx < 0 || playerIdx > 3 ){

        // CENTER
        
        let w = document.getElementById('screen-main').offsetWidth;
        let h = document.getElementById('screen-main').offsetHeight;

        document.getElementById("diceImage").style.left = (w/2 - 32/2) + 'px';
        document.getElementById("diceImage").style.top = (h/2 - 32/2) + 'px';
        

        return;
    }




     
    let diceX = document.querySelectorAll('.playerDice')[playerIdx].offsetLeft;
    let diceY = document.querySelectorAll('.playerDice')[playerIdx].offsetTop;



 
     
    
    
    document.getElementById("diceImage").style.left = (diceX+8) + 'px';
    document.getElementById("diceImage").style.top = (diceY+8) + 'px';
    
     

}

 



 


// JOGA O DADO
function jogarDado(){

    


    GAME.canAction = false;

    moveDiceTo(-1);


    setTimeout(()=>{




        if ( DICE_TIMER == null ){
            console.warn("INIT DICE");
            document.getElementById("diceImage").style.transform = 'scale(2)';
            document.getElementById("diceImage").style.display = 'block';
            DICE_TIMER = setInterval(()=>{
                DICE_TIMER_COUTER += 1;
                let frame = 1;
                if ( DICE_TIMER_COUTER%5 == 0 ){
                    for (let i = 0; i < 5; i++){
                        frame = getRandomInt(1, 7);
                    }
                    if ( frame == 1 ){
                        document.getElementById("diceImage").src = `assets/dice/${frame}_dot.png`;
                    }
                    else{
                        document.getElementById("diceImage").src = `assets/dice/${frame}_dots.png`;
                    }
                }
                if (DICE_TIMER_COUTER >= 100){
                    clearInterval(DICE_TIMER);
                    DICE_TIMER_COUTER = 0;
                    
                    document.getElementById("diceImage").style.transform = 'scale(1)';
                    
                    setTimeout(()=>{
                        moveDiceTo(GAME.playerIndex); 
                        DICE_TIMER = null;

                        


                    },500);
                    console.warn("END DICE", frame);


                    

                    

                    

                }
            }, 10);
        }


    }, 50);


    
    





}












// COLOCA UM QUADRADO VERDE NO FRAME ONDE FICA O DADO
function selectPlayerFrame( playerIdx ){

    if ( playerIdx > 3 ){return;}

    document.querySelectorAll(".playerDiceWrapper").forEach((e,i)=>{

        if ( i == playerIdx ){
            e.classList.add("playerDice-active");
        }
        else{
            e.classList.remove("playerDice-active");
        }

    });

}













// ABRE/FECHA -- TELA DE MENU
function toggleScreenMenuMain( state ){
    document.getElementById("screen-menu").style.display = (state)? 'flex':'none';
}


// SLIDE ABRE/FECHA -- TELA DE ADICIONAR PLAYERS
function toggleScreenMenuAdd( state ){
    document.getElementById("screen-menu-addPlayer").style.left = (state)? '0':'-100%';
}























function gameInitCheck(){


    //console.log("asd");



    

    let inputName = document.querySelectorAll('.inputName');



    let helperList = document.querySelectorAll(".playerHelperInput");

     
    helperList.forEach(e=>{
        e.style.visibility = 'hidden';
    });



    
    
 

        
        







    console.log("PASS");

    for (let i = 0; i < 4; i++){

        let name = inputName[i].value.trim();
        if ( name.length == 0 ){
            GAME.playerList[i].name = "Jogador " + (i+1);
        }else{
            GAME.playerList[i].name = name;
        }
        
        document.querySelectorAll(".playerName")[i].innerText = GAME.playerList[i].name;
    }
    
    toggleScreenMenuMain(false);
    toggleScreenMenuAdd(false);
     




}

















function gameEndCheck(){
    for (let i = 0; i < 4; i++){
        if ( GAME.playerList[i].winner == false ){
            return false;
        }
    }
    return true;
}




























// HOVER MENU BUTTON EFFECT: ANGLE

// transform: perspective(400px) rotateY(20deg) rotateX(20deg);

document.querySelectorAll(".effect-angle").forEach((e)=>{



    e.addEventListener("mousemove", (evt)=>{

        let width = e.offsetWidth;
        let height = e.offsetHeight;
        
        mouseX = Math.abs( evt.offsetX );
        mouseY = Math.abs( evt.offsetY );


        

        let angleX = map(mouseX, 0, width, -20, 20);
        let angleY = map(mouseY, 0, height, 25, -25);

        e.style.transform = `perspective(400px) rotateY(${angleX}deg) rotateX(${angleY}deg)`;

 
    });


    e.addEventListener("mouseleave", ()=>{
        e.style.transform = ''; 
    });
 
    
});












