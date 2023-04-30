


const CARD_PACKAGE = [



    // RED
    "R:0","R:1","R:2","R:3","R:4","R:5","R:6","R:7","R:8","R:9",
    "R:1","R:2","R:3","R:4","R:5","R:6","R:7","R:8","R:9",
    "R:BLOCK", "R:REVERSE", "R:DRAW2",
    "R:BLOCK", "R:REVERSE", "R:DRAW2",

    // GREEN
    "G:0","G:1","G:2","G:3","G:4","G:5","G:6","G:7","G:8","G:9",
    "G:1","G:2","G:3","G:4","G:5","G:6","G:7","G:8","G:9",
    "G:BLOCK", "G:REVERSE", "G:DRAW2",
    "G:BLOCK", "G:REVERSE", "G:DRAW2",

    // BLUE
    "B:0","B:1","B:2","B:3","B:4","B:5","B:6","B:7","B:8","B:9",
    "B:1","B:2","B:3","B:4","B:5","B:6","B:7","B:8","B:9",
    "B:BLOCK", "B:REVERSE", "B:DRAW2",
    "B:BLOCK", "B:REVERSE", "B:DRAW2",

    // YELLOW
    "Y:0","Y:1","Y:2","Y:3","Y:4","Y:5","Y:6","Y:7","Y:8","Y:9",
    "Y:1","Y:2","Y:3","Y:4","Y:5","Y:6","Y:7","Y:8","Y:9",
    "Y:BLOCK", "Y:REVERSE", "Y:DRAW2",
    "Y:BLOCK", "Y:REVERSE", "Y:DRAW2",


    // SPECIAL
    "JOKER","JOKER","JOKER","JOKER",    // TROCAR COR
    "DRAW4","DRAW4","DRAW4","DRAW4"     // ADD +4

];

















var GAME = {


    cardStackBuy: [],  // pilha de compras
    cardStackDump: [], // pilha de descarte

    isRunning: true,    // rodada
    isEnded: false,     // algum jogador tem 500 pontos?

    canAction: false,    // pode fazer algum ação (pegar, jogar)?


    playerIndex: 0,

    


    players: [
        {'score': 0,'hand_cards': []},
        {'score': 0,'hand_cards': []},
        {'score': 0,'hand_cards': []},
        {'score': 0,'hand_cards': []}
    ]

}


GAME.cardStackBuy = CARD_PACKAGE.slice();







 
 




 















 



 