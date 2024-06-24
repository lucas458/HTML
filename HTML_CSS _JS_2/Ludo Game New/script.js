







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




const PLAYER_PATTERN = [
    PLAYER_BLUE_PATTERN, PLAYER_GREEN_PATTERN, PLAYER_GREEN_PATTERN, PLAYER_BLUE_PATTERN
];








const SAFE_ZONE = [
    [2,8], [6,2], [12,6], [8,12]
];














var full_size = 0;
var square_size = 0;
var piece_size = 0;



var player_current = 0;
var canMove = false;
var canGetOut = false;
var canDice = false;
var diceValue = 0;



var PLAYERS = [


    // PLAYER
    {
        'active': true,
        'name': 'jogador 1',
        'pieces': [
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false}
        ]
    },


    // PLAYER
    {
        'active': true,
        'name': 'jogador 2',
        'pieces': [
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false}
        ]
    },


    // PLAYER
    {
        'active': true,
        'name': 'jogador 3',
        'pieces': [
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false}
        ]
    },


    // PLAYER
    {
        'active': true,
        'name': 'jogador 4',
        'pieces': [
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false},
            {'index_pos': -1, 'win': false}
        ]
    },



 
];








const PLAYER_INIT_POSITION = [

    // RED
    [{'x': 1, 'y': 1}, {'x': 4, 'y': 1}, {'x': 1, 'y': 4}, {'x': 4, 'y': 4}],
    
    // GRENN
    [{'x': 10, 'y': 1}, {'x': 13, 'y': 1}, {'x': 10, 'y': 4}, {'x': 13, 'y': 4}],
    
    // YELLOW
    [{'x': 10, 'y': 10}, {'x': 13, 'y': 10}, {'x': 10, 'y': 13}, {'x': 13, 'y': 13}],
    
    // BLUE
    [{'x': 1, 'y': 10}, {'x': 4, 'y': 10}, {'x': 1, 'y': 13}, {'x': 4, 'y': 13}]
    

];










function setTableSize(){
    let size = Math.min($("#table-screen").height(), $("#table-screen").width()); 
    $("#table-wrapper").width(size);
    $("#table-wrapper").height(size);

    full_size = size;
    square_size = size / 15;
    piece_size = square_size/1.5;

    $('.piece svg').width(piece_size);
    $('.piece svg').height(piece_size);
}





var diceImgValues = [
    'assets/dice/1_dot.png',
    'assets/dice/2_dots.png',
    'assets/dice/3_dots.png',
    'assets/dice/4_dots.png',
    'assets/dice/5_dots.png',
    'assets/dice/6_dots.png'
];






// Random Int
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}






// value{0-6} | index{playerIndex}
function setDice( value, index ){

    $('.player-diceImg').css('background-image', 'none');

    if (value > 0){
        $('.player-diceImg').eq(index).css('background-image', `url(${diceImgValues[value-1]})`);
    }
    else{
        $('.player-diceImg').eq(index).css('background-image', 'none');
    }

}





// set player FRAME DICE color GREEN
function setPlayerActive( index ){

    $('.player-diceWrapper').css('border-color', '#fff');

    if ( index >= 0 ){
        $('.player-diceWrapper').eq(index).css('border-color', 'lime');
    }
    
}





// pulsing dice ON/OFF
function setDicePulse( state ){

    if ( state ){
        $('.player-diceImg').css('animation', 'dicePulse 1s infinite');
    }
    else{
        $('.player-diceImg').css('animation', 'none');
    }

}





// Dice Animate
function diceRandom( index ){


    let value = 0; 

    setDicePulse(false);

    for (let i = 0; i < 10; i++){
        setTimeout(()=>{

            value = getRandomInt(1, 7);
            setDice(value , index);
            
            if ( i >= 10-1 ){
                diceValue = value;
                console.log("valor", value);


                if ( diceValue == 6 ){

                    if ( playerGetOut(player_current) ){
                        
                    }
                    else{
                        
                    }

                }
                else{
                    if ( playerGetOut(player_current) ){

                    }
                    else{
                        playerNext();
                    }
                }

                

            }

        }, i*100);
    }


}






// Set Player To Absolute Table Position
function setPlayerAbsolutePosition(x, y, player, piece){
    $('.player-piece-list').eq(player).children('.piece').eq(piece).css('left', x+'px');
    $('.player-piece-list').eq(player).children('.piece').eq(piece).css('top', y+'px');
}


// Set Player To Square Table Position
function setPlayerSquarePosition(x, y, player, piece){

    x = Math.trunc(x);
    y = Math.trunc(y);

    let posX = x * square_size + square_size/2;
    let posY = y * square_size + square_size/2;


    let playerPos = posX + ',' + posY;

    $('.player-piece-list').eq(player).children().eq(piece).attr('playerPos', playerPos);
    $('.player-piece-list').eq(player).children().eq(piece).css('transform', '');


    setPlayerAbsolutePosition(posX, posY, player, piece);

}





// Jogador Saiu do Slot Master
function playerGetOut( index ){

    for (let i = 0; i < 4; i++){
        if ( PLAYERS[index].pieces[i].win == false && PLAYERS[index].pieces[i].index_pos >= 0 ){
            return true;
        }
    }

    return false;
}






function resetPiece( player, piece ){
    setPlayerSquarePosition(PLAYER_INIT_POSITION[player][piece].x, PLAYER_INIT_POSITION[player][piece].y, player, piece);
    $('.player-piece-list').eq(player).children().eq(piece).css('transform', 'translateX(-50%) translateY(-100%)')
}







// Init All Players Pieces Position
function initAllPlayersPosition(){

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            resetPiece(i, j);
        }
    }
}




// Player Win
function playerWin( index ){


    for (let i = 0; i < 4; i++){

        if ( PLAYERS[index].pieces[i].win == false ){
            return false;
        }

    }


    return true;

}


// Player Next
function playerNext(){

    

    player_current = (player_current + 1) % 4;

    if ( playerWin(player_current) || !PLAYERS[player_current].active ){
        playerNext();
    }


    setDice(diceValue, player_current);
    setPlayerActive(player_current);




}








$(function(){


    


    // Set Size Screen
    setTableSize();
    
    initAllPlayersPosition();

    setPlayerActive(0);
    setDice(1, 0);
    setDicePulse(true);


    canDice = true;
     



    // Dice Click
    $('.player-diceWrapper').click(function(){

         

        let correctDice = $(this).children('.player-diceImg').css('background-image');
         

        if ( correctDice != 'none' && canDice ){
            diceRandom( player_current );
        }

    });






    // Player Click
    $(".player-piece-list .piece").click(function(){


        let index_wrap  = $(this).parent().index() - 1;
        let index_piece = $(this).index();


        console.log('wrapper', index_wrap, 'index',  index_piece);


        
        
    });




    // On-Resize Screen
    $(window).resize(function(){
        setTableSize();
    });

});


