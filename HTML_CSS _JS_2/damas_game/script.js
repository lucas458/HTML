















function genTable(){


    document.getElementById("table").innerHTML = '';


    let slotSize = Math.min(document.getElementById("table").offsetHeight, document.getElementById("table").offsetWidth);

    slotSize = slotSize / 8 ;


    document.getElementById("table").style.width = (slotSize*8) + 'px';

    for (let y = 0; y < 8; y++){

        for (let x = 0; x < 8; x++){

            let item = document.createElement("div");
            item.classList.add("slot");

            item.style.width = slotSize + 'px';
            item.style.height = slotSize + 'px';


            if ( y%2 ){
                item.style.backgroundColor = (x%2==0)?"#000":"#fff";
            }
            else{
                item.style.backgroundColor = (x%2)?"#000":"#fff";
            }


            // LIGHT PIECE
            if ( ( (y == 0 || y == 2) && x%2) || (y == 1 && x%2==0) ){
                item.classList.add("piece-light");
            }

            // DARK PIECE
            if ( ( (y == 5 || y ==  7) && x%2==0) || (y == 6 && x%2) ){
                item.classList.add("piece-dark");
            }




            document.getElementById("table").appendChild(item);

        }

    }

}


window.onload = genTable;



// window.onresize = ()=>{
//     document.getElementById("table").style.width = '100%'
//     genTable();
// }










var GAME = {

    playerIndex: 0,
    isRunning: true,

    canAction: false,
    canInvert: false

}




var CLICKED_INDEX = -1;
var CLICKED_PIECE_INDEX = -1;





// CLICK NO TABULEIRO
$("#table").on("click", ".slot", function(){
    
    

    CLICKED_INDEX = $(this).index();

    
    // LIGHT PIECE
    if ( $(this).hasClass("piece-light") && GAME.playerIndex == 1  ){
        console.log("LIGHT PIECE");
        CLICKED_PIECE_INDEX = $(this).index();

        // SElECT MARKER
        selectPiece( $(this).index() );

        resetWays();
        gerarWays( $(this).index() );

        
        
    }

    // DARK PIECE
    else if ( $(this).hasClass("piece-dark") && GAME.playerIndex == 0 ){
        console.log("DARK PIECE");
        CLICKED_PIECE_INDEX = $(this).index();

        // SElECT MARKER
        selectPiece( $(this).index() );

        resetWays();
        gerarWays( $(this).index() );
    }

    // SLOT
    else{
         

        // UNSElECT MARKER
        selectPiece();


        if ( checkType(CLICKED_INDEX%8, parseInt(CLICKED_INDEX/8)) == 'marker-way' ){
            


            if ( GAME.playerIndex == 0 ){
                document.querySelectorAll(".slot")[CLICKED_PIECE_INDEX].classList.remove("piece-dark");
                document.querySelectorAll(".slot")[CLICKED_INDEX].classList.add("piece-dark");
            }
            else{
                document.querySelectorAll(".slot")[CLICKED_PIECE_INDEX].classList.remove("piece-light");
                document.querySelectorAll(".slot")[CLICKED_INDEX].classList.add("piece-light");
            }

            resetWays();
            GAME.playerIndex = !GAME.playerIndex;
            setPlayerHeader();


        }
        else{
            console.log("SLOT");
            resetWays();
        }


    }


    console.log( $(this).index() );



});











// HEADER: PLAYER TIME
function setPlayerHeader(){
    document.querySelector("#screen-main header").innerText = "Jogador " + (GAME.playerIndex+1);
}






// MARKER: WAYS
function resetWays(){
    document.querySelectorAll(".marker-way").forEach((e, i) =>{
        e.classList.remove("marker-way");
    });
}

function setWay( x, y ){
    if (x >=8 || y >= 8){return;}
    let index = x + y*8;
    document.querySelectorAll(".slot")[index].classList.add("marker-way");
}




// MARKER: PLAYER
function selectPiece( index ){
    unselectPiece();
    if ( index == null ){return;}
    document.querySelectorAll(".slot")[index].classList.add("marker-player");
}

function unselectPiece(){
    document.querySelectorAll(".marker-player").forEach((e, i) =>{
        e.classList.remove("marker-player");
    });
}







function checkType(x, y){

    if ( x < 0 || y < 0 || x >= 8 || y >= 8 ){
        return 'overflow';
    }

    let index = x + y*8;


    let item = document.querySelectorAll(".slot")[index];


    if ( item.classList.contains("piece-light") ){
        return 'piece-light';
    }
    else if ( item.classList.contains("piece-dark") ){
        return 'piece-dark';
    }
    else if ( item.classList.contains("marker-way")  ){
        return 'marker-way';
    }

    return 'slot';
}






function gerarWays( selectedIndex ){
    

    let x = selectedIndex % 8;
    let y = parseInt( selectedIndex / 8 );

    if ( 0 ){

    }

    else if ( GAME.playerIndex == 0 ){

        console.log("A");



        
        

        


    }

    else if ( GAME.playerIndex == 1 ){


        if ( checkType(x-1, y+1) == "slot" ){
            setWay(x-1, y+1);
        } 

        if ( checkType(x+1, y+1) == "slot" ){
            setWay(x+1, y+1);
        } 
        
    }


}