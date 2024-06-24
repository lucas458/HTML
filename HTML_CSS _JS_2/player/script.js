




var MUSIC_QUEUE_INDEX = -1;
var MUSIC_QUEUE_LIST = [];



var REPEAT_COUNT = 0;
var REPEAT_MODE = 0;
// 0 -- NO REPEAT
// 1 -- REPEAT
// 2 -- REPEAT ONE

var IS_SUFFLE = false;



var RESPONSE_JSON = {};




// AJAX
var JSON_ALL     = {};  // 
var JSON_ALBUNS  = {};  // NOMES DOS ALBUNS



var JSON_ARTISTS = [];
var JSON_FOLDER  = [];



// LISTA
var LIST_ALBUNS_NAME  = [];  // NOMES DOS ALBUNS
var LIST_ARTISTS_NAME = [];  // NOMES DOS ARTISTAS
var LIST_FOLDER_NAME = [];   // NOMES DAS PASTAS


var LIST_FAVORITES = [];    // SALVA OS PATHs






// FLAG -- VERIFICA SE DADOS SAO OK
var AJAX_FLAG = false;

 



// AUDIO
var AUDIO_ELEMENT = document.createElement("audio");



// VERIFICA SE O 'PROGRESSBAR' ESTÁ SENDO PRECIONADO
var PROGRESSBAR_PRESSED = false;


// SABER QUAL A TELA ATUAL (ex. todos, albuns)
var screen_active_index = 0;


// SABER O ITEM CLICADO
var item_clicked_index = -1;

// SABER O ITEM OPTION CLICADO
var item_option_clicked_index = -1;






// SABER O ITEM OPTION CLICADO
var queue_item_clicked_index = -1;

// SABER O ITEM DA FILA CLICADO
var queue_item_option_clicked_index = -1;






// TIPO DE "TIMETRACK"
var time_mode_remain = false;



// SABER O INDEX DE ALBUM QUE FOI ABERTO
var album_open_index = -1;


// SABER O INDEX DE ARTISTA QUE FOI ABERTO
var artist_open_index = -1;


// SABER O INDEX DA PASTA QUE FOI ABERTA
var folder_open_index = -1;







// SERVE PRA FUNCIONAMENTAO DO (DESLIZE PARA DELETAR ITEM FAVORITO)
var ITEM_FAVORITE_PRESS = false;
var ITEM_FAVORITE_POS_INIT = 0;
var ITEM_MOVE_INDEX = -1;
var ITEM_MOVE_DIFF = 0;





// DEBUG -- OLD
//requestAJAX('all');
//requestAJAX('album');







































// TIMETRACK
function timetrack( value ){


    if ( isNaN(value) ){
        return '--:--';
    }


    let sec = parseInt(value % 60);
    let min = parseInt(value / 60 % 60);
    let hor = parseInt(value / 3600 % 100);


    let temp = '';


    if ( value >= 3600 ){
        temp += `${hor}:`;
        if ( min < 10 ){ min = '0' + min; }
    }

    if ( sec < 10 ){ sec = '0' + sec; }

    temp += `${min}:${sec}`;




    return temp;



}






// RANDOM NUMBER
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}













// FORMARTAR STRING: QTY TRACKS & QTY ALBUNS
function textCoutArtistParam( n_tracks, n_albuns ){

    let tempTracks = n_tracks;
    tempTracks += (n_tracks != 1)? " faixas" : " faixa";

    let tempAlbuns = n_albuns;
    tempAlbuns += (n_albuns != 1)? " álbuns" : " álbum";

    return (tempTracks + ' ' + tempAlbuns);
}















// PLAY RANDOM MUSIC
function playRandom(){

    let temp = 0;

    do{
        temp = getRandomInt(0, MUSIC_QUEUE_LIST.length);
    }while (temp == MUSIC_QUEUE_INDEX);

    playByIndex(temp);

}













// TOGGLE: SUFFLE
function toggleIconShuffle(){
    IS_SUFFLE = !IS_SUFFLE;
    $(".controls-shuffle").css("opacity", ((IS_SUFFLE)? 1: 0.5));
}



// TOGGLE REPEAT
function toggleIconRepeat(){
    REPEAT_COUNT = 0;
    REPEAT_MODE = (REPEAT_MODE < 2)? (REPEAT_MODE+1) : 0;


    if ( REPEAT_MODE == 2 ){
        $(".controls-repeat").html(`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor"><path d="M11.5 15V10.5H10V9H13V15ZM7 22 3 18 7 14 8.4 15.45 6.85 17H17V13H19V19H6.85L8.4 20.55ZM5 11V5H17.15L15.6 3.45L17 2L21 6L17 10L15.6 8.55L17.15 7H7V11Z"/></svg>`);
    }
    else{
        $(".controls-repeat").html(`<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor"><path d="M7 22 3 18 7 14 8.4 15.45 6.85 17H17V13H19V19H6.85L8.4 20.55ZM5 11V5H17.15L15.6 3.45L17 2L21 6L17 10L15.6 8.55L17.15 7H7V11Z"/></svg>`);
    }


    $(".controls-repeat").css("opacity", ((REPEAT_MODE>0)? 1: 0.5));



}



























// QUEUE MOVE TO UP
function queuemove_up( index ){


    if ( index > 0 && index < MUSIC_QUEUE_LIST.length ){
        console.log("MOVER PARA CIMA");

        let temp                   = Object.assign({}, MUSIC_QUEUE_LIST[index]);
        MUSIC_QUEUE_LIST[index]    = Object.assign({}, MUSIC_QUEUE_LIST[index-1]);
        MUSIC_QUEUE_LIST[index-1]  = Object.assign({}, temp);

        
        //console.table(MUSIC_QUEUE_LIST);

        if ( index == MUSIC_QUEUE_INDEX ){   
            MUSIC_QUEUE_INDEX = index - 1;
        }
        else if ( index-1 == MUSIC_QUEUE_INDEX ){
            MUSIC_QUEUE_INDEX++;
        }

        if ( MUSIC_QUEUE_INDEX >= 0 ){
            gerarQueue(MUSIC_QUEUE_INDEX);
        }
        
        
        
        toggleActionsheet(false, $("#actionsheet-queueItemOpt"));

    }
    else{
        console.warn("NAO PODE MOVER PARA CIMA");
    }

}









// QUEUE MOVE TO DOWN
function queuemove_down( index ){


    if ( index >= 0 && index < MUSIC_QUEUE_LIST.length-1 ){
        console.log("MOVER PARA BAIXO");

        let temp                   = Object.assign({}, MUSIC_QUEUE_LIST[index]);
        MUSIC_QUEUE_LIST[index]    = Object.assign({}, MUSIC_QUEUE_LIST[index+1]);
        MUSIC_QUEUE_LIST[index+1]  = Object.assign({}, temp);

        
        //console.table(MUSIC_QUEUE_LIST);

        if ( index == MUSIC_QUEUE_INDEX ){   
            MUSIC_QUEUE_INDEX = index + 1;
        }
        else if ( index+1 == MUSIC_QUEUE_INDEX ){
            MUSIC_QUEUE_INDEX--;
        }

        if ( MUSIC_QUEUE_INDEX >= 0 ){
            gerarQueue(MUSIC_QUEUE_INDEX);
        }

        
        
        
        
        toggleActionsheet(false, $("#actionsheet-queueItemOpt"));

    }
    else{
        console.warn("NAO PODE MOVER PARA BAIXO");
    }

}



























// NAV MENU
$("#main-nav .nav-item").click(function(){

    $("#main-nav > .nav-item").removeClass("nav-item-active");
    $("#main-content > .screen-content").removeClass("screen-content-active");

    $(this).addClass("nav-item-active");

    $("#main-content > .screen-content").eq( $(this).index() ).addClass("screen-content-active");

    screen_active_index = $(this).index();

    console.log("TAB CHANGE", screen_active_index);




    if ( screen_active_index == 0 ){
        gerarListaAll();
    }

    else if ( screen_active_index == 1 ){
        gerarListaAlbuns();
    }

    else if ( screen_active_index == 2 ){
        gerarListaAlbuns();
        gerarListaArtista();
    }


    else if( screen_active_index == 3 ){
        gerarListaPastas();
    }



    else if ( screen_active_index == 4 ){
        gerarListaFavoritos();
        $(".favorite-icon").removeClass("favorite-news");
    }




});







// ACTIONSHEET -- CLOSE
$(".actionsheet-wrapper").on("click", ".actionsheet-close", function(){
    toggleActionsheet(false, $(this).parent().parent().parent());
    $(".actionsheet-favorite").hide();
});

// ACTIONSHEET -- CLOSE OUTFOCUS
$(".actionsheet-wrapper").on("click", ".actionsheet-dummy", function(){
    toggleActionsheet(false, $(this).parent());
    $(".actionsheet-favorite").hide();
});






function toggleActionsheet( state, el ){


    
    if ( state ){
        
        el.css("display", "flex");
        setTimeout(function(){
            el.children(".actionsheet-window").addClass("actionsheet-window-open");
        }, 1);
        
    }


    else{

        

        el.children(".actionsheet-window").removeClass("actionsheet-window-open");

        setTimeout(function(){
            el.css("display", "none");
        }, 250);

    }

}


















// MAIN WIDGET OPTION CLICK
$(".screen-content").on("click", ".elementWidget-opt", function(e){
    e.stopImmediatePropagation();

    
    item_option_clicked_index = $(this).parent().index();
    console.warn("CLICK OPT", item_option_clicked_index);



    
    



    // OPEN ACTION SHEET
    if ( screen_active_index == 0 || screen_active_index == 1 || screen_active_index == 2 ){
        toggleActionsheet(true, $("#actionsheet-itemOpt"));
    }



    // FAVORITE GET STATE : CLICK OPTION 
    if ( screen_active_index == 0 ){
        
        let itemPath = $("#screen-all > div").eq(item_option_clicked_index).attr('path');
        let indexFav = getFavIndex(itemPath);
        if ( indexFav >= 0 ){
            favButtonStateMode(true);
        }
        else{
            favButtonStateMode(false);
        }

        $(".actionsheet-favorite").show();

    }




    

    
    


});




// MAIN WIDGET ITEM CLICK
$(".screen-content").on("click", ".elementWidget-wrapper", function(){
    


    console.warn("CLICK ITEM", $(this).index() );

    item_clicked_index = $(this).index();
    
    switch (screen_active_index) {
        // ALL
        case 0:case 4:
            gerarQueueByAll( item_clicked_index );
            break;

        case 3:
            folder_open_index = $(this).index();
            console.log("click pasta", folder_open_index);
            gerarListaPastaSide(folder_open_index);
            toggleScreenFolders(true);
            break;
         
    }




});














// MUSIC ALBUM [ITEM] CLICK
$("#albumContent-screen").on("click", ".elementWidget-wrapper", function(){
    console.warn("ALBUM ITEM CLICK: ", $(this).index() );
    item_clicked_index = album_open_index;
    item_option_clicked_index = $(this).index();

    actionsheetPlay();


    if ( screen_active_index == 2 ){
        gerarQueueByAll( $(this).index() );
    }



});





// MUSIC ALBUM OPTION [ITEM] CLICK
$("#albumContent-screen").on("click", ".elementWidget-opt", function(e){
    e.stopImmediatePropagation();
    
    
    item_option_clicked_index = $(this).parent().index();
    console.warn("ALBUM ITEM OPT: ", item_option_clicked_index);



    let itemPath = $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).attr('path');
    let indexFav = getFavIndex(itemPath);
    if ( indexFav >= 0 ){
        favButtonStateMode(true);
    }
    else{
        favButtonStateMode(false);
    }


    $(".actionsheet-favorite").show();
    
    toggleActionsheet(true, $("#actionsheet-itemOpt"));

});








































// PLAY/PAUSE -- FOOTER
$("#main-footer").on("click", ".elementWidget-opt", function(e){
    e.stopImmediatePropagation();
    console.log("PLAY/PLAUSE -- FOOTER");

    if ( AUDIO_ELEMENT.paused && MUSIC_QUEUE_INDEX >= 0 ){
        musicPlay();
    }
    else{
        musicPause();
    }

});





// ABIRR PLAYER CONTROLS
$("#main-footer").on("click", ".elementWidget-wrapper", function(){
    console.log("OPEN CONTROLS");
    toggleScreenControls(true);
});








// CONTROLS: REPEAT
$("#controls-screen").on("click", ".controls-repeat", function(){
    console.log("CLICK: REPEAT");
    toggleIconRepeat();
});

// CONTROLS: BACK
$("#controls-screen").on("click", ".controls-back", function(){
    console.log("CLICK: BACK");
    musicBack();
});

// CONTROLS: PLAY & PAUSE
$("#controls-screen").on("click", ".controls-playPause", function(){
    console.log("CLICK: PLAY & PAUSE");

    if ( AUDIO_ELEMENT.paused && MUSIC_QUEUE_INDEX >= 0 ){
        musicPlay();
    }
    else{
        musicPause();
    }

});

// CONTROLS: NEXT
$("#controls-screen").on("click", ".controls-next", function(){
    console.log("CLICK: NEXT");
    musicNext();
});

// CONTROLS: SHUFFLE
$("#controls-screen").on("click", ".controls-shuffle", function(){
    console.log("CLICK: SHUFFLE");
    toggleIconShuffle();
});













// MUSIC PLAY & ERROR HANDLER
function musicPlay(){


    AUDIO_ELEMENT.play().then(function(){
        console.log("PLAY NORMAL");


        // MAIN FOOTER
        $("#main-footer .elementWidget-opt .icon32").html(`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>
        `);



        // COTROLS
        $(".controls-playPause").html(`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>
        `);




        // QUEUE: SELECTED
        $("#queue-list .elementWidget-wrapper").removeClass("elementWidget-active");    // CLEAR SELECTION
        $("#queue-list .elementWidget-wrapper").eq(MUSIC_QUEUE_INDEX).addClass("elementWidget-active");


        // ALL MUSIC: SELECTED
        $("#screen-all .elementWidget-wrapper").removeClass("elementWidget-active");    // CLEAR SELECTION

        for (let i = 0; i < $("#screen-all .elementWidget-wrapper").length; i++) {
            if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == $("#screen-all .elementWidget-wrapper").eq(i).attr('path') ){
                $("#screen-all .elementWidget-wrapper").eq(i).addClass("elementWidget-active");
                console.log("MATCH IN ALL", i);
                break;
            }
        }



        // ALBUM LIST ITEM SELECTED
        $("#albumContent-screen .elementWidget-wrapper").removeClass('elementWidget-active');

        for (let i = 0; i < $("#albumContent-screen .elementWidget-wrapper").length; i++){
            if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == $("#albumContent-screen .elementWidget-wrapper").eq(i).attr('path') ){
                $("#albumContent-screen .elementWidget-wrapper").eq(i).addClass('elementWidget-active');
                break;
            }
        }



        // ALBUM LIST ITEM [ARTIST] SELECTED --- NEED
        $("#track-list .elementWidget-wrapper").removeClass('elementWidget-active');

        for (let i = 0; i < $("#track-list .elementWidget-wrapper").length; i++){
            if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == $("#track-list .elementWidget-wrapper").eq(i).attr('path') ){
                $("#track-list .elementWidget-wrapper").eq(i).addClass('elementWidget-active');
                break;
            }
        }



        // FOLDER ITEM MUSIC -- SELECTED
        $("#folderContent-screen .elementWidget-wrapper").removeClass("elementWidget-active");

        for (let i = 0; i < $("#folderContent-screen .elementWidget-wrapper").length; i++){
            if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == $("#folderContent-screen .elementWidget-wrapper").eq(i).attr('path') ){
                $("#folderContent-screen .elementWidget-wrapper").eq(i).addClass("elementWidget-active");
                break;
            }
        }




        // FAVORITE: SELECTED
        $("#screen-favorite > div").removeClass('elementWidget-active');
        for (let i = 0; i < LIST_FAVORITES.length; i++){
            if ( LIST_FAVORITES[i].path == MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path ){
                $("#screen-favorite > div").eq(i).addClass('elementWidget-active');
                console.log("MATCH IN FAVORITE", i);
                break;
            }
        }



        

    }).catch(function(){
        console.warn("PLAY ERROR");
    });

}


// MUSIC PAUSE
function musicPause(){


    AUDIO_ELEMENT.pause();



    // MAIN FOOTER
    $("#main-footer .elementWidget-opt .icon32").html(`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
    </svg>
    `);



    // COTROLS
    $(".controls-playPause").html(`
    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="currentColor"><path d="M8 19V5L19 12Z"/></svg>
    `);



}









// TOCAR MUSICA PELO INDEX EM (MUSIC_QUEUE_LIST)
function playByIndex( index ){


    if (  (index >= 0 && index < MUSIC_QUEUE_LIST.length) && MUSIC_QUEUE_LIST.length > 0 ){

        MUSIC_QUEUE_INDEX = index;

        AUDIO_ELEMENT.src = document.URL + MUSIC_QUEUE_LIST[index].path;
        setActualInfo(MUSIC_QUEUE_LIST[index].title, MUSIC_QUEUE_LIST[index].artist, MUSIC_QUEUE_LIST[index].album);

        setProgreessBar(0);
        AUDIO_ELEMENT.load();



        REPEAT_COUNT = 0;
        musicPlay();
        


    }

    

    toggleActionsheet(false, $("#actionsheet-itemOpt"));


}






function updateTimer(){

    $(".timeActual").text( timetrack(AUDIO_ELEMENT.currentTime) );

    if ( time_mode_remain && !isNaN(AUDIO_ELEMENT.duration) ){
        $(".timeTotal").text( '-' + timetrack(AUDIO_ELEMENT.duration - AUDIO_ELEMENT.currentTime) );
    }

    else{
        $(".timeTotal").text( timetrack(AUDIO_ELEMENT.duration) );
    }

}





// TIME TYPE: CLICK
$(".timeTotal").click(function(){

    time_mode_remain = !time_mode_remain;
    updateTimer();

});







// ATUALIZAR BARRA DE PROGRESSO E TIME
AUDIO_ELEMENT.addEventListener("timeupdate", function(){

     
    if ( !PROGRESSBAR_PRESSED ){
        setProgreessBar( AUDIO_ELEMENT.currentTime/AUDIO_ELEMENT.duration*100 );
    }


    updateTimer();
    



});









// DETECTAR QUE ACABOU A MUSICA
AUDIO_ELEMENT.addEventListener("ended", function(){

    console.warn("FIM DA MUSICA");



    // NAO REPETIR
    if ( REPEAT_MODE == 0 ){

        if( MUSIC_QUEUE_INDEX+1 < MUSIC_QUEUE_LIST.length ){
            

            // ACABOU: MODO RANDOM
            if ( IS_SUFFLE ){
                playRandom();
            }else{ musicNext(); }

        }
        else{
            console.warn("FIM DA LISTA");
            setProgreessBar(0);
            setActualInfo('', '', '');
            MUSIC_QUEUE_INDEX = -1;
            $(".timeActual").text('0:00');
            $(".timeTotal").text('--:--');
        }

    }

    // REPETIR: SEMPRE
    else if ( REPEAT_MODE == 1 ){
        AUDIO_ELEMENT.currentTime = 0;
        musicPlay();
    }

    // REPETIR: 1x
    else{

        // REPETIR
        if ( REPEAT_COUNT < 1 ){
            AUDIO_ELEMENT.currentTime = 0;
            musicPlay();
            REPEAT_COUNT++;
        }

        // PROXIMA
        else{
            
            if( MUSIC_QUEUE_INDEX+1 < MUSIC_QUEUE_LIST.length ){
                // ACABOU: MODO RANDOM
                if ( IS_SUFFLE ){
                    playRandom();
                }else{ musicNext(); }
            }
            else{
                console.warn("FIM DA LISTA");
                setProgreessBar(0);
                setActualInfo('', '', '');
                MUSIC_QUEUE_INDEX = -1;
                $(".timeActual").text('0:00');
                $(".timeTotal").text('--:--');
            }
            
        }


    }



    



});











// PROXIMA MUSICA
function musicNext(){

    REPEAT_COUNT = 0;

    // ALEATORIO
    if ( IS_SUFFLE ){
        playRandom();
    }

    // PROXIMA DA LISTA
    else{

        if (MUSIC_QUEUE_INDEX < MUSIC_QUEUE_LIST.length-1){
            MUSIC_QUEUE_INDEX++;
            console.log("PROXIMO");
        }
        else{
            MUSIC_QUEUE_INDEX = 0;
            console.log("TOPO DA LISTA");
        }

        playByIndex( MUSIC_QUEUE_INDEX );
     

    }


}


// VOLTAR MUSICA
function musicBack(){

    REPEAT_COUNT = 0;


    // ALEATORIO
    if ( IS_SUFFLE ){
        playRandom();
    }

    // ANTERIOR DA LISTA
    else{

        if (MUSIC_QUEUE_INDEX > 0){
            MUSIC_QUEUE_INDEX--;
            console.log("ENTERIOR");
        }

        playByIndex( MUSIC_QUEUE_INDEX );
     

    }


}













// GERAR QUEUE BY QUEUE ARRAY
function gerarQueue(idx){

    document.getElementById("queue-list").innerHTML = '';

    

    for(let i = 0; i < MUSIC_QUEUE_LIST.length; i++){

        let item = document.createElement("div");
        item.classList.add("elementWidget-wrapper");

        if ( idx == i ){
            item.classList.add("elementWidget-active");
        }


        item.innerHTML = `
        <div class="elementWidget-image">${i+1}</div>
        
        <div class="elementWidget-content">
            <div class="elementWidget-title">${MUSIC_QUEUE_LIST[i].title}</div>
            <div class="elementWidget-subTitle">${MUSIC_QUEUE_LIST[i].artist}</div>
        </div>
        
        <div class="elementWidget-opt">
            <div class="icon24">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </div>
        </div>
        `;




        document.getElementById("queue-list").appendChild(item);

    }

    if ( MUSIC_QUEUE_INDEX == -1 ){
        MUSIC_QUEUE_INDEX = 0;
    }

    $(".musicCounter").text( (MUSIC_QUEUE_INDEX+1) + '/' + MUSIC_QUEUE_LIST.length );
}








// ADD NEW ITEM TO QUEUE
function addQueueItem( title, artist ){


    let item = document.createElement("div");
    item.classList.add("elementWidget-wrapper");


    item.innerHTML = `
    <div class="elementWidget-image">${MUSIC_QUEUE_LIST.length}</div>
    
    <div class="elementWidget-content">
        <div class="elementWidget-title">${title}</div>
        <div class="elementWidget-subTitle">${artist}</div>
    </div>
    
    <div class="elementWidget-opt">
        <div class="icon24">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            </svg>
        </div>
    </div>
    `;




    $(".musicCounter").text( (MUSIC_QUEUE_INDEX+1) + '/' + MUSIC_QUEUE_LIST.length );
    document.getElementById("queue-list").appendChild(item);



    if ( MUSIC_QUEUE_INDEX == -1 ){
        MUSIC_QUEUE_INDEX = 0;
        AUDIO_ELEMENT.src = MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path;
        setActualInfo(MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].title, MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].artist, MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].album);
    }


    $(".musicCounter").text( (MUSIC_QUEUE_INDEX+1) + '/' + MUSIC_QUEUE_LIST.length );
}






// ADICONAR MUSICA A FILA
function addToQueue( title, artist, album, path ){

    MUSIC_QUEUE_LIST.push({
        'title': title,
        'artist': artist,
        'album': album,
        'path': path
    });

    addQueueItem( title, artist );




}









// DELETAR MUSICA DA FILA PELO INDEX
function deleteItemQueue(index){
    if (index >= 0){
        MUSIC_QUEUE_LIST.splice(index, 1);
        $("#queue-list .elementWidget-wrapper").eq(index).remove();
        $(".musicCounter").text( (MUSIC_QUEUE_INDEX+1) + '/' + MUSIC_QUEUE_LIST.length );
        
        
        if( queue_item_option_clicked_index < MUSIC_QUEUE_INDEX ){
            MUSIC_QUEUE_INDEX--;
        }

        else if ( queue_item_option_clicked_index == MUSIC_QUEUE_INDEX ){
            console.warn("voce deletou o item ja em PLAY [need code]");
            if ( MUSIC_QUEUE_LIST.length > 0 ){
                

                if ( queue_item_option_clicked_index == MUSIC_QUEUE_LIST.length ){
                    console.warn("deletou item -- ultimo");
                    if ( !AUDIO_ELEMENT.paused ){
                        playByIndex(MUSIC_QUEUE_LIST.length-1);
                    }
                }

                
                else{
                    console.warn("deletou item acima do ultimo")
                    if ( !AUDIO_ELEMENT.paused ){
                        playByIndex(MUSIC_QUEUE_INDEX);
                    }
                }
            }
            else{
                console.warn("voce deletou o ultimo [need code]");
                eraseQueue();
            }
        }

        
        gerarQueue(MUSIC_QUEUE_INDEX);



    }
}


// ZERAR FILA
function eraseQueue(){

    console.warn("LISTA FOI ZERADA");

    AUDIO_ELEMENT.src = ''

    document.getElementById("queue-list").innerHTML = '';
    MUSIC_QUEUE_LIST = [];
    MUSIC_QUEUE_INDEX = -1;
    $(".musicCounter").text( (MUSIC_QUEUE_INDEX+1) + '/' + MUSIC_QUEUE_LIST.length );

    
    setProgreessBar(0);
    //setActualInfo('', '', '');
    $(".timeActual").text('0:00');
    $(".timeTotal").text('--:--');

    setActualInfo('', '', '');

}



// QUEUE ITEM DELETE BUTTON: ACTION SHEET
function actionsheet_deleteItemQueue(){
    deleteItemQueue( queue_item_option_clicked_index );
    queue_item_option_clicked_index = -1;
    toggleActionsheet(false, $("#actionsheet-queueItemOpt"));
}






// REPRODUZIR MUSICA DA FILA PELO ACTIONSHEET
function actionsheetQueuePlay(idx){
    playByIndex(idx);
    toggleActionsheet(false, $("#actionsheet-queueItemOpt"));
}







// PLAY PELO ACTIONSHEET
function actionsheetPlay(){

    toggleActionsheet(false, $("#actionsheet-itemOpt"));


    // TELA ALL
    if ( screen_active_index == 0 ){
        gerarQueueByAll(item_option_clicked_index);
    }





    // TELA ALBUNS
    if ( screen_active_index == 1 ){

        
        // SIDE SCREEN: OPEN
        if( $("#albumContent-screen").css('left') == '0px' ){
            console.log("GERAR QUEUE E REPRODUZIR [ITEM] ALBUM", item_clicked_index);
            gerarQueueByAll();
            playByIndex(item_option_clicked_index);


            // SELECT ITEM ALBUM
            $("#albumContent-screen .elementWidget-wrapper").removeClass('elementWidget-active');
            $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).addClass('elementWidget-active');

        }

        else{
            console.log("GERAR QUEUE E REPRODUZIR ALBUM", item_option_clicked_index);
            gerarQueueByAll(0);
        }
        
    }



    // TELA ARTISTAS & PASTAS
    if ( screen_active_index == 2 || screen_active_index == 3 ){
        gerarQueueByAll( item_option_clicked_index );
    }



}














function addToQueueNext(title, artist, album, path, next_index = null){

    if ( next_index >= 0 ){

        MUSIC_QUEUE_LIST.splice(next_index, 0, {
            'title': title,
            'artist': artist,
            'album': album,
            'path': path
        });


        gerarQueue();
        //addQueueItem( title, artist );
    }

}











// ADICIONAR MUSICA(S) NO FINAL OU APOS O INDEX DO ITEM CLICADO
function actionsheetAddQueue( mode ){

    

    toggleActionsheet(false, $("#actionsheet-itemOpt"));

   

    
    // TELA TODOS
    if ( screen_active_index == 0 ){

        if ( mode == false || MUSIC_QUEUE_LIST.length == 0 ){
            console.warn("TELA TODOS -- ADD TO END");

            addToQueue(
                JSON_ALL[item_option_clicked_index].title,
                JSON_ALL[item_option_clicked_index].artist,
                JSON_ALL[item_option_clicked_index].album,
                JSON_ALL[item_option_clicked_index].path,
            );
        }


        else{
            console.warn("TELA TODOS -- ADD TO NEXT");

            addToQueueNext(
                JSON_ALL[item_option_clicked_index].title,
                JSON_ALL[item_option_clicked_index].artist,
                JSON_ALL[item_option_clicked_index].album,
                JSON_ALL[item_option_clicked_index].path,
                MUSIC_QUEUE_INDEX+1
            );

        }

        
    }
    
    
    // TELA ALBUNS
    else if ( screen_active_index == 1 ){

        

        // SIDE SCREEN: OPEN
        if ( $("#albumContent-screen").css('left') == '0px' ){


            if ( mode == false || MUSIC_QUEUE_LIST.length == 0 ){
                console.warn("TELA ALBUM [SIDE] -- ADD TO END");
                addToQueue(
                    JSON_ALBUNS[item_clicked_index].list[item_option_clicked_index].title,
                    JSON_ALBUNS[item_clicked_index].artist,
                    JSON_ALBUNS[item_clicked_index].album,
                    JSON_ALBUNS[item_clicked_index].list[item_option_clicked_index].path,
                );
            }


            else{
                console.warn("TELA ALBUM [SIDE] -- ADD TO NEXT");
                addToQueueNext(
                    JSON_ALBUNS[item_clicked_index].list[item_option_clicked_index].title,
                    JSON_ALBUNS[item_clicked_index].artist,
                    JSON_ALBUNS[item_clicked_index].album,
                    JSON_ALBUNS[item_clicked_index].list[item_option_clicked_index].path,
                    MUSIC_QUEUE_INDEX+1
                );
            }


            

        }

        // SCREEN SIDE CLOSE
        else{
            console.warn("GERAR QUEUE DE TODO O ALBUM: ", item_option_clicked_index);

            if ( mode == false || MUSIC_QUEUE_LIST.length == 0 ){
                console.warn("TELA ALBUM [ALL] -- ADD TO END");
                


                for (let i = 0; i < JSON_ALBUNS[item_option_clicked_index].list.length; i++){
                    addToQueue(
                        JSON_ALBUNS[item_option_clicked_index].list[i].title,
                        JSON_ALBUNS[item_option_clicked_index].artist,
                        JSON_ALBUNS[item_option_clicked_index].album,
                        JSON_ALBUNS[item_option_clicked_index].list[i].path
                    );
                }

            }


            else{
                console.warn("TELA ALBUM [ALL] -- ADD TO NEXT");

                for (let i = 0; i < JSON_ALBUNS[item_option_clicked_index].list.length; i++){
                    addToQueueNext(
                        JSON_ALBUNS[item_option_clicked_index].list[i].title,
                        JSON_ALBUNS[item_option_clicked_index].artist,
                        JSON_ALBUNS[item_option_clicked_index].album,
                        JSON_ALBUNS[item_option_clicked_index].list[i].path,
                        MUSIC_QUEUE_INDEX+1+i
                    );
                }
                

            }

        }


    }

    








    // TELA ARTISTAS
    else if ( screen_active_index == 2 ){


        


        // TELA ALBUM [artist] ABERTA
        if ( $("#albumContent-screen").css('left') == '0px' ){

            if ( mode == false || MUSIC_QUEUE_LIST.length == 0 ){
                console.warn("TELA ARTIST[album] -- ADD TO END");
    
                addToQueue(
                    $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).find('.elementWidget-title').text(),
                    $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).find('.elementWidget-subTitle').text(),
                    $(".screen-title-album").eq(0).text(),
                    $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).attr('path')
                );
            }
    
    
            else{
                console.warn("TELA ARTIST[album] -- ADD TO NEXT");
    
                addToQueueNext(
                    $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).find('.elementWidget-title').text(),
                    $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).find('.elementWidget-subTitle').text(),
                    $(".screen-title-album").eq(0).text(),
                    $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).attr('path'),
                    MUSIC_QUEUE_INDEX+1
                );
    
            }

        }


        // LIST TRACKS
        else{


            if ( mode == false || MUSIC_QUEUE_LIST.length == 0 ){
                console.warn("TELA ARTIST[tracks] -- ADD TO END");
    
                addToQueue(
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).find(".elementWidget-title").text(),
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).find(".elementWidget-subTitle").text(),
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).attr('album'),
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).attr('path')
                );
            }
    
    
            else{
                console.warn("TELA ARTIST[tracks] -- ADD TO NEXT");
    
                addToQueueNext(
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).find(".elementWidget-title").text(),
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).find(".elementWidget-subTitle").text(),
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).attr('album'),
                    $("#track-list .elementWidget-wrapper").eq(item_option_clicked_index).attr('path'),
                    MUSIC_QUEUE_INDEX+1
                );
    
            }


        }



    }













    

    // TELA PASTAS
    else if ( screen_active_index == 3 ){

        if ( mode == false || MUSIC_QUEUE_LIST.length == 0 ){
            console.warn("TELA PASTAS -- ADD TO END");

            addToQueue(
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].title,
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].artist,
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].album,
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].path
            );
        }


        else{
            console.warn("TELA PASTAS -- ADD TO NEXT");

            addToQueueNext(
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].title,
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].artist,
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].album,
                JSON_FOLDER[folder_open_index].list[item_option_clicked_index].path,
                MUSIC_QUEUE_INDEX+1
            );

        }

    }






}


















// CLICK ITEM QUEUE
$("#queue-list").on("click", ".elementWidget-wrapper", function(){
    console.log("ITEM QUEUE CLICK", $(this).index());
    queue_item_clicked_index = $(this).index();
    playByIndex(queue_item_clicked_index);
});


// CLICK OPTION ITEM QUEUE
$("#queue-list").on("click", ".elementWidget-opt", function(e){
    e.stopImmediatePropagation();
    console.log("ITEM OPTION QUEUE CLICK", $(this).parent().index());

    queue_item_option_clicked_index = $(this).parent().index();

    $(".queue-sort").removeClass("actionsheet-disabled");

    if ( queue_item_option_clicked_index == 0 ){
        
        if ( MUSIC_QUEUE_LIST.length == 1 ){
            $(".queue-sort").addClass("actionsheet-disabled");
        }
        else{
            $(".queue-sort").eq(0).addClass("actionsheet-disabled");
        }

    }
    else if ( queue_item_option_clicked_index == MUSIC_QUEUE_LIST.length-1 ) {
        $(".queue-sort").eq(1).addClass("actionsheet-disabled");
    }
  

    toggleActionsheet(true, $("#actionsheet-queueItemOpt"));

});












// GERAR QUEUE QUANDO CLICAR EM UM ITEM DO "TODOS" ou REPRODUZIR
function gerarQueueByAll( indexClicked ){


    eraseQueue();


    // TODOS
    if ( screen_active_index == 0 ){

        for(let i = 0; i < $("#screen-all > div").length; i++){
            addToQueue(
                JSON_ALL[i].title,
                JSON_ALL[i].artist,
                JSON_ALL[i].album,
                JSON_ALL[i].path
            );
        }
        playByIndex(indexClicked);

    }


    // ALBUNS
    else if ( screen_active_index == 1 ){


        console.log("gerar queue album")


        // TELA LATERAL
        if( $("#albumContent-screen").css('left') == '0px' ){
            console.log("CRIAR QUEUE DA LISTA DO ALBUM");



            for (let i = 0; i < JSON_ALBUNS[item_clicked_index].list.length; i++){

                addToQueue(
                    JSON_ALBUNS[item_clicked_index].list[i].title,
                    JSON_ALBUNS[item_clicked_index].artist,
                    JSON_ALBUNS[item_clicked_index].album,
                    JSON_ALBUNS[item_clicked_index].list[i].path
                );
                
            }



        }

        // PELO ITEM GRID
        else{
            for(let i = 0; i < JSON_ALBUNS[item_option_clicked_index].list.length; i++){
                addToQueue(
                    JSON_ALBUNS[item_option_clicked_index].list[i].title,
                    JSON_ALBUNS[item_option_clicked_index].artist,
                    JSON_ALBUNS[item_option_clicked_index].album,
                    JSON_ALBUNS[item_option_clicked_index].list[i].path
                );
            }
        }

        


        if ( indexClicked >= 0 ){
            playByIndex(indexClicked);
        }
        
        
    }







    // ARTISTA
    else if ( screen_active_index == 2 ){

        // PELA TELA LATERAL
        if ( $("#albumContent-screen").css('left') == '0px' ){

            console.warn("[artist] -- album play");
            
            for (let i = 0; i < $("#albumContent-screen .elementWidget-wrapper").length; i++){
                addToQueue(
                    $("#albumContent-screen .elementWidget-wrapper").eq(i).children('.elementWidget-content').children('.elementWidget-title').text(),
                    $("#albumContent-screen .elementWidget-wrapper").eq(i).children('.elementWidget-content').children('.elementWidget-subTitle').text(),
                    $(".screen-title-album").eq(0).text(),
                    $("#albumContent-screen .elementWidget-wrapper").eq(i).attr('path')
                );

            }

        }



        // PELA -- LIST TRACK
        else{

            console.warn("[artist] -- track list play");

            for (let i = 0; i < $("#track-list > div").length; i++){

                //addToQueue('t', 'ar', 'A', 'p');

                addToQueue(
                    $("#track-list > div").eq(i).children('.elementWidget-content').children('.elementWidget-title').text(),
                    $("#track-list > div").eq(i).children('.elementWidget-content').children('.elementWidget-subTitle').text(),
                    $('.screen-title-artist').eq(0).text(),
                    $("#track-list > div").eq(i).attr('path')
                );

            }

        }

        if ( indexClicked >= 0 ){
            playByIndex(indexClicked);
        }

    }










    // PASTAS
    else if ( screen_active_index == 3 ){



        for (let i = 0; i < JSON_FOLDER[folder_open_index].list.length; i++){

            addToQueue(
                JSON_FOLDER[folder_open_index].list[i].title,
                JSON_FOLDER[folder_open_index].list[i].artist,
                JSON_FOLDER[folder_open_index].list[i].album,
                JSON_FOLDER[folder_open_index].list[i].path
            );

        }
        playByIndex( indexClicked );

    }












    // FAVORITE QUEUE
    else if ( screen_active_index == 4 ){

        for(let i = 0; i < LIST_FAVORITES.length; i++){
            addToQueue(
                LIST_FAVORITES[i].title,
                LIST_FAVORITES[i].artist,
                '',
                LIST_FAVORITES[i].path
            );
        }

        if ( indexClicked >= 0 ){
            playByIndex(indexClicked);
            $("#screen-favorite > div").removeClass("elementWidget-active");
            $("#screen-favorite > div").eq(indexClicked).addClass("elementWidget-active");
        }

    }
    

    



}




















// GERAR LISTA ALL
function gerarListaAll(){


    document.getElementById("screen-all").innerHTML = "";

    

    for (let i = 0; i < JSON_ALL.length; i++){

        

        let item = document.createElement("div");
        item.classList.add("elementWidget-wrapper");
        item.setAttribute("path", JSON_ALL[i].path);

        // SELECT ITEM (ACTUAL MUSIC PLAYING)
        if ( MUSIC_QUEUE_LIST.length > 0 ){
            if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == JSON_ALL[i].path ){
                item.classList.add("elementWidget-active");
            }
        }

        

        item.innerHTML = `
        <!-- IMG -->
        <div class="elementWidget-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
            </svg>
        </div>
        <!-- CONTENT -->
        <div class="elementWidget-content">
            <div class="elementWidget-title">${JSON_ALL[i].title}</div>
            <div class="elementWidget-subTitle">${JSON_ALL[i].artist}</div>
        </div>
        <!-- OPTIONS -->
        <div class="elementWidget-opt">
            <div class="icon24">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </div>
        </div>
        `;



        document.getElementById("screen-all").appendChild(item);

    }


    
    



}








// GERAR LISTA JSON_ALBUNS
function gerarListaAlbuns(){



    $("#screen-album .grid-view").html('');
    let TEMP_ALBUM = [];



    // CRAIR OBJETO
    for(let i = 0; i < JSON_ALL.length; i++){
        TEMP_ALBUM.push({
            'artist': JSON_ALL[i].artist,
            'album': JSON_ALL[i].album,
            'list': []
        });
    }


    // REMOVER OBJETO DUPLICADO
    TEMP_ALBUM = TEMP_ALBUM.filter((value, index, self) =>
        index === self.findIndex((t) => (
            t.artist === value.artist && t.album === value.album
        ))
    )





    TEMP_ALBUM.sort(function(a,b){
        let fa = a.album.toLocaleLowerCase();
        let fb = b.album.toLocaleLowerCase();
        if (fa > fb)return 1;
        if (fa < fb)return -1;
        return 0;
    });




    // GERAR GRID
    TEMP_ALBUM.forEach((e)=>{
        gerarGridAlbumItem(e.album, e.artist);
    });


    //console.log(TEMP_ALBUM);




     
    JSON_ALBUNS = Object.assign(TEMP_ALBUM);




    





    for(let i = 0; i < JSON_ALBUNS.length; i++){

        for (let j = 0; j < JSON_ALL.length; j++){

            if ( JSON_ALL[j].artist == JSON_ALBUNS[i].artist && JSON_ALL[j].album == JSON_ALBUNS[i].album ){

                JSON_ALBUNS[i].list.push({
                    'title': JSON_ALL[j].title,
                    'path': JSON_ALL[j].path
                });

            }

        }

    }



    



    //console.log(JSON_ALBUNS);

    

    


}

































// SET PROGRESSBAR -- CLICK
$(".progressBar").click(function(e){

    if ( e.offsetX >= 0 && e.offsetX != -0 && MUSIC_QUEUE_INDEX >= 0 ){
        console.log("PROGRESS CLICK", e.offsetX);


        let value = e.offsetX / $(this).width() * 100;

        setProgreessBar(value);
        AUDIO_ELEMENT.currentTime = value * AUDIO_ELEMENT.duration / 100;

        updateTimer();

    }    

});





// SET PROGRESS BAR PERCENT
function setProgreessBar( value ){

    if ( value >= 0 && value <= 100 ){
        $(".progressFill").css("width", value+'%');
    }

}







// SLIDE PROGRESSBAR

// DOWN MOUSE & TOUCH
$(".progressBar").on("mousedown touchstart", function(){
    PROGRESSBAR_PRESSED = true;
});




// MOVER ITEM DOS FAVORIOTOS [SWIPE]
$("#screen-favorite").on("touchstart", '.elementWidget-wrapper', function(e){
    ITEM_FAVORITE_PRESS = true;
    console.log('press');

    ITEM_MOVE_DIFF = 0;


    ITEM_FAVORITE_POS_INIT = e.originalEvent.touches[0].pageX;

    console.log('init ', ITEM_FAVORITE_POS_INIT)

    console.log($(this).index());

    ITEM_MOVE_INDEX = $(this).index();


    

});





// MOVE MOUSE -- PROGRESS
$("html").on("mousemove", function(e){

    if ( PROGRESSBAR_PRESSED && MUSIC_QUEUE_INDEX >= 0 ){
        let pos = e.pageX;

        if ( pos >= 8 && pos < $(".progressBar").width()+8 ){
            $(".seekValue").css("opacity", 1);
            let percent = (pos-8) / $(".progressBar").width() * 100;
            setProgreessBar(percent);
            $(".seekValue").text( timetrack(percent*AUDIO_ELEMENT.duration/100) );

        }
    }






});



// MOVE TOUCH -- PROGRESS & ITEM SWIPE
$("html").on("touchmove", function(e){


    let pos = e.originalEvent.touches[0].pageX;


    // PROGRESS BAR
    if ( PROGRESSBAR_PRESSED && MUSIC_QUEUE_INDEX >= 0 ){
        
        if ( pos >= 8 && pos < $(".progressBar").width()+8 ){
            $(".seekValue").css("opacity", 1);
            let percent = (pos-8) / $(".progressBar").width() * 100;
            setProgreessBar(percent);
            $(".seekValue").text( timetrack(percent*AUDIO_ELEMENT.duration/100) );
        }
    }




    // ITEM SWIPE
    $("#screen-favorite > div").css("transition", 'none');
    

    

    let diff = ITEM_FAVORITE_POS_INIT - pos;

    if ( ITEM_FAVORITE_PRESS ){
        ITEM_MOVE_DIFF = diff;
    }
    else{
        ITEM_MOVE_DIFF = 0;
        ITEM_FAVORITE_POS_INIT = 0;
        ITEM_MOVE_INDEX = -1
    }


    // DELETAR SWIPE
    if ( ITEM_FAVORITE_PRESS && ITEM_MOVE_DIFF >= 0 && ITEM_MOVE_DIFF <= $('html').width()*0.8 ){
        console.log('moving', ITEM_MOVE_DIFF);
        $("#screen-favorite > div").eq(ITEM_MOVE_INDEX).css('transform', `translate(-${ITEM_MOVE_DIFF|0}px)`);
        $("#screen-favorite > div").eq(ITEM_MOVE_INDEX).css('opacity', (100 - (ITEM_MOVE_DIFF*3 / $('html').width() * 100))/100 );
    }


    


});







// UP MOUSE & TOUCH -- PROGRESS & ITEM SWIPE
$("html").on("mouseup touchend touchcancel", function(){

    if ( PROGRESSBAR_PRESSED && MUSIC_QUEUE_INDEX >= 0 ){
        PROGRESSBAR_PRESSED = false;
        let value = $(".progressFill").width() / $(".progressBar").width() * 100;
        setProgreessBar(value);
        AUDIO_ELEMENT.currentTime = value * AUDIO_ELEMENT.duration / 100;
        updateTimer();
        
    }

    $(".seekValue").css("opacity", 0);


    console.log('release');


    $("#screen-favorite > div").css("transition", '200ms');
    
   

    if ( ITEM_FAVORITE_PRESS && ITEM_MOVE_DIFF >= $('html').width()*0.5 ){
        console.warn('delete', ITEM_MOVE_INDEX);
        
        ITEM_FAVORITE_PRESS = false;
        setTimeout(()=>{
            //gerarListaFavoritos();
            $("#screen-favorite > div").eq(ITEM_MOVE_INDEX).remove();
            ITEM_MOVE_INDEX = -1;
            
        }, 1);
        LIST_FAVORITES.splice(ITEM_MOVE_INDEX, 1);

        $("#screen-favorite > div").eq(ITEM_MOVE_INDEX).css('transform', `translate(-100%)`);

    }
    else{
        console.log("back item");
    }
    
    $("#screen-favorite > div").css('transform', `translate(0px)`);
    $("#screen-favorite > div").css('opacity', 1);
    ITEM_FAVORITE_PRESS = false;
    ITEM_MOVE_DIFF = 0;
    ITEM_FAVORITE_POS_INIT = 0;
    //ITEM_MOVE_INDEX = -1


});
















// SET MUSIC PARAMETERS
function setActualInfo( title, artist, album ){


    // MAIN FOOTER
    $("#main-footer .elementWidget-title").text(title);
    $("#main-footer .elementWidget-subTitle").text(artist);

    // SCREEN CONTOLS
    $(".musicTitle").text(title);
    $(".musicSubTitle").text(artist);
    $(".musicInfoAlbum").text(album);
    $(".musicCounter").text( (MUSIC_QUEUE_INDEX+1) + '/' + MUSIC_QUEUE_LIST.length );

}














// TOGGLE: SCREEN CONTROLS
function toggleScreenControls( state ){

    if ( state ){
        document.getElementById("controls-screen").style.top = 0;
    }
    else{
        document.getElementById("controls-screen").style.top = '100%';
    }

}





// TOGGLE: SCREEN QUEUE
function toggleScreenQueue( state ){

    if ( state ){
        document.getElementById("queue-screen").style.top = 0;

        // QUEUE: SELECTED
        $("#queue-list .elementWidget-wrapper").removeClass("elementWidget-active");    // CLEAR SELECTION
        $("#queue-list .elementWidget-wrapper").eq(MUSIC_QUEUE_INDEX).addClass("elementWidget-active");

    }
    else{
        document.getElementById("queue-screen").style.top = '100%';
    }

}























// GERAR ITEM ALBUM WRAPPER GRID
function gerarGridAlbumItem(title, subTitle){


    $("#screen-album .grid-view").append(`
    <div class="grid-wrapper">
						
        <div class="grid-img"><img src="dummy.jpeg"></div>
        
        <div class="grid-content">
            
            <div class="grid-params">
                <div class="grid-title">${title}</div>
                <div class="grid-subTitle">${subTitle}</div>
            </div>
            
            <div class="grid-opt">
                <div class="grid-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    `);

}















// GERAR LISTA DE MUSICA DO ALBUM SELECIONADO
function gerarListaMusicFromAlbum(index){


    $("#albumContent-screen .screen-section").html('');


    

    for (let i = 0; i < JSON_ALBUNS[index].list.length; i++){

        let item = document.createElement("div");
        item.classList.add("elementWidget-wrapper");
        item.setAttribute("path", JSON_ALBUNS[index].list[i].path);


        // SELECT ITEM (ACTUAL MUSIC PLAYING)
        if ( MUSIC_QUEUE_LIST.length > 0 && MUSIC_QUEUE_INDEX != -1 ){
            if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == JSON_ALBUNS[index].list[i].path ){
                item.classList.add("elementWidget-active");
            }
        }

        $(".screen-title-album").text( JSON_ALBUNS[index].album )


        item.innerHTML = `
        <!-- IMG -->
        <div class="elementWidget-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
            </svg>
        </div>
        <!-- CONTENT -->
        <div class="elementWidget-content">
            <div class="elementWidget-title">${JSON_ALBUNS[index].list[i].title}</div>
            <div class="elementWidget-subTitle">${JSON_ALBUNS[index].artist}</div>
        </div>
        <!-- OPTIONS -->
        <div class="elementWidget-opt">
            <div class="icon24">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </div>
        </div>
        `;

        $("#albumContent-screen .screen-section").append(item);

    }






    console.warn("GERAR LISTA FROM ALBUM");



    toggleScreenAlbuns(true);

}










// GERAR LISTA DE MUSICA DO ALBUM SELECIONADO [ARTIST]
function gerarListaMusicFromAlbumArtist( idx_artist, idx_album ){


    $("#albumContent-screen .screen-section").html('');


    

    for (let i = 0; i < JSON_ARTISTS[idx_artist].list[idx_album].list_track.length; i++){


        let item = document.createElement("div");
        item.classList.add("elementWidget-wrapper");
        item.setAttribute("path", JSON_ARTISTS[idx_artist].list[idx_album].list_track[i].path);


        // SELECT ITEM (ACTUAL MUSIC PLAYING)
        if ( MUSIC_QUEUE_LIST.length > 0 && MUSIC_QUEUE_INDEX != -1 ){
            if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == JSON_ARTISTS[idx_artist].list[idx_album].list_track[i].path ){
                item.classList.add("elementWidget-active");
            }
        }

        $(".screen-title-album").text( JSON_ARTISTS[idx_artist].list[idx_album].album )


        item.innerHTML = `
        <!-- IMG -->
        <div class="elementWidget-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
            </svg>
        </div>
        <!-- CONTENT -->
        <div class="elementWidget-content">
            <div class="elementWidget-title">${JSON_ARTISTS[idx_artist].list[idx_album].list_track[i].title}</div>
            <div class="elementWidget-subTitle">${JSON_ARTISTS[idx_artist].artist}</div>
        </div>
        <!-- OPTIONS -->
        <div class="elementWidget-opt">
            <div class="icon24">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </div>
        </div>
        `;

        $("#albumContent-screen .screen-section").append(item);
    }



    console.warn("GERAR LISTA FROM ALBUM [ARTIST]");

    toggleScreenAlbuns(true);

}




















// GERAR ITEM ARTISTA

function itemGridArtistItem( title, subTitle ){

    $("#screen-artist .grid-view").append(`
    <div class="grid-wrapper">
        <div class="grid-img"><img src="dummy.jpeg"></div>
        <div class="grid-content">
            <div class="grid-params">
                <div class="grid-title">${title}</div>
                <div class="grid-subTitle">${subTitle}</div>
            </div>
        </div>
    </div>
    `);
    
}








// GERAR TODOS OS ARTISTA NA TELA -- ARTISTAS
function gerarListaArtista(){



    $("#screen-artist .grid-view").html('');

    JSON_ARTISTS = [];
    let tempArtist = [];
    let tempArtistTracks = 0;
 
    
    // GET ARTIST ALBUNS PARAMS
    for (let i = 0; i < LIST_ARTISTS_NAME.length; i++){

        tempArtist = [];
        tempArtistTracks = 0;
        
        console.log("--------------");

        for (let j = 0; j < JSON_ALBUNS.length; j++){
            if ( JSON_ALBUNS[j].artist == LIST_ARTISTS_NAME[i] ){

                console.log("artista " + LIST_ARTISTS_NAME[i] + " album ", JSON_ALBUNS[j]);
                
                tempArtist.push({
                    'album': JSON_ALBUNS[j].album,
                    'list_track':JSON_ALBUNS[j].list
                });
                tempArtistTracks += JSON_ALBUNS[j].list.length;
            }
        }



        JSON_ARTISTS.push({
            'artist': LIST_ARTISTS_NAME[i],
            'list': tempArtist,
            'tracks': tempArtistTracks
        });





        // GERAR [ITEM] ARTISTA
        itemGridArtistItem(
            LIST_ARTISTS_NAME[i],
            textCoutArtistParam(tempArtistTracks, tempArtist.length)
        );

        



        console.log("--------------");
        console.log(" ");

    }
 





    




    
    
        


    


}












// CLICK NO ARTISTA PARA ABRIR
$("#screen-artist .grid-view").on("click", ".grid-wrapper", function(){

    console.log("ARTIST CLICK INDEX: ", $(this).index() );

    let index_click_artist = $(this).index();

    artist_open_index = $(this).index();

    toggleScreenArtists(true);


    $(".screen-title-artist").text( JSON_ARTISTS[index_click_artist].artist );

    // GERAR ALBUM DE DENTRO DA TELA LATERAL -- ARTISTA
    $("#album-list").html('');

    for (let i = 0; i < JSON_ARTISTS[index_click_artist].list.length; i++){
        $("#album-list").append(`
        <div class="grid-wrapper">
            <div class="grid-img"><img src="dummy.jpeg"></div>
            <div class="grid-content">
                <div class="grid-params">
                    <div class="grid-title">${JSON_ARTISTS[index_click_artist].list[i].album}</div>
                    <div class="grid-subTitle">${JSON_ARTISTS[index_click_artist].artist}</div>
                </div>
            </div>
        </div> 
        `);
    }



    // GERAR MUSICA DENTRO DA TELA LATERAL -- ARTISTA
    $("#track-list").html('');

    for (let i = 0; i < JSON_ARTISTS[index_click_artist].list.length; i++){


        for (let j = 0; j < JSON_ARTISTS[index_click_artist].list[i].list_track.length; j++){

            $("#track-list").append(`
            <div class="elementWidget-wrapper">
					
                <div class="elementWidget-image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
                    </svg>
                </div>
                
                <div class="elementWidget-content">
                    <div class="elementWidget-title">${JSON_ARTISTS[index_click_artist].list[i].list_track[j].title}</div>
                    <div class="elementWidget-subTitle">${JSON_ARTISTS[index_click_artist].artist}</div>
                </div>
                
                <div class="elementWidget-opt">
                    <div class="icon24">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
            `);

            $("#track-list .elementWidget-wrapper").last().attr('path', JSON_ARTISTS[index_click_artist].list[i].list_track[j].path);
            $("#track-list .elementWidget-wrapper").last().attr('album', JSON_ARTISTS[index_click_artist].list[i].album);


            if ( MUSIC_QUEUE_LIST.length > 0 && MUSIC_QUEUE_INDEX >= 0 ){

                if ( JSON_ARTISTS[index_click_artist].list[i].list_track[j].path == MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path ){
                    $("#track-list .elementWidget-wrapper").last().addClass('elementWidget-active')
                }

            }



        }

    }



    



});











// CLICK NO ALBUM [ARTIST]
$("#album-list").on("click", ".grid-wrapper", function(){


    let index_click_album = $(this).index();

    console.warn(`ARTISTA [${artist_open_index}] - ALBUM [${index_click_album}]`);


    gerarListaMusicFromAlbumArtist( artist_open_index, index_click_album );



});








// CLICK NA MUSICA [ARTIST]
$("#track-list").on("click", ".elementWidget-wrapper", function(){

    let index_click_music = $(this).index();

    console.warn(`CLICK MUSICA [${index_click_music}] -- ARTIST`);

    gerarQueueByAll( index_click_music );


});



// CLICK NO OPTION MUSICA [ARTIST]
$("#track-list").on("click", ".elementWidget-opt", function(e){
    e.stopImmediatePropagation();


    
    item_option_clicked_index = $(this).parent().index();

    console.warn(`CLICK MUSICA OPTION [${item_option_clicked_index}] -- ARTIST`);



    itemPath = $("#track-list > div").eq(item_option_clicked_index).attr('path');
    let indexFav = getFavIndex(itemPath);

    if ( indexFav >= 0 ){
        favButtonStateMode(true);
    }
    else{
        favButtonStateMode(false);
    }



    $(".actionsheet-favorite").show();

    toggleActionsheet(true, $("#actionsheet-itemOpt"));


});



















// ABRIR/FECHAR: TELA LATERAL ALBUM CONTENT
function toggleScreenAlbuns( state ){

    if ( state ){
        document.getElementById("albumContent-screen").style.left = 0;
        $(".actionsheet-favorite").show();
    }

    else{
        document.getElementById("albumContent-screen").style.left = '-101%';
        $(".actionsheet-favorite").hide();
    }

}










// ABRIR/FECHAR: TELA LATERAL ARTISTA CONTENT
function toggleScreenArtists( state ){

    if ( state ){
        document.getElementById("artistContent-screen").style.left = 0;
    }

    else{
        document.getElementById("artistContent-screen").style.left = '-101%';
    }

}


// DEBUG
// toggleScreenArtists(1);






// ABRIR/FECHAR: TELA LATERAL PASTAA CONTENT
function toggleScreenFolders( state ){

    if ( state ){
        document.getElementById("folderContent-screen").style.left = 0;
    }

    else{
        document.getElementById("folderContent-screen").style.left = '-101%';
    }

}


// DEBUG
//toggleScreenFolders(1);













// GRID ITEM CLICK
$(".screen-content").on("click", ".grid-wrapper", function(){


    let index = $(this).index();

    // CLICK DENTRO DE ALBUNS
    if ( screen_active_index == 1 ){

        console.log("ALBUM INDEX: ", $(this).index());

        album_open_index = $(this).index();

        let title   = $("#screen-album .grid-title").eq(index).text();
        let subTitle = $("#screen-album .grid-subTitle").eq(index).text();
       
        gerarListaMusicFromAlbum( index );

        item_clicked_index = $(this).index();
        

    }
    

});


// GRID ITEM OPTION CLICK
$(".screen-content").on("click", ".grid-opt", function(e){

    e.stopImmediatePropagation();

    // CLICK DENTRO DE SCREEM: ALBUNS
    if ( screen_active_index == 1 ){
        console.log("ALBUM OPTION INDEX: ", $(this).parent().parent().index());
        item_option_clicked_index = $(this).parent().parent().index();
        $(".actionsheet-favorite").hide();
    }


    


    toggleActionsheet(true, $("#actionsheet-itemOpt"));
    

});














function getFavIndex( path ){
    for (let i = 0; i < LIST_FAVORITES.length; i++){
        if ( path == LIST_FAVORITES[i].path ){
            return i;
        }
    }
    return -1;
}



function favButtonStateMode( deleteMode ){

    // MODO DELETAR
    if ( deleteMode ){
        $(".actionsheet-favorite").text("Remover dos Favoritos");
        $(".actionsheet-favorite").css("color", "#dc3545");
    }

    // MODO ADD
    else{
        $(".actionsheet-favorite").text("Adicionar aos Favoritos");
        $(".actionsheet-favorite").css("color", "#007bff");
    }

}




function addItemFavorite(title, artist, path){

    $(".favorite-icon").addClass("favorite-news");

    LIST_FAVORITES.push({
        'title': title,
        'artist': artist,
        'path': path
    });


}






function gerarListaFavoritos(){


    $("#screen-favorite").html('');

    LIST_FAVORITES.forEach((item)=>{

        $("#screen-favorite").append(`
        <div class="elementWidget-wrapper" path="${item.path}">
            <div class="elementWidget-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
                </svg>
            </div>
            
            <div class="elementWidget-content">
                <div class="elementWidget-title">${item.title}</div>
                <div class="elementWidget-subTitle">${item.artist}</div>
            </div>
        </div>
        `);


        if ( MUSIC_QUEUE_LIST.length > 0 ){
            if ( item.path == MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path ){
                $("#screen-favorite > div").last().addClass('elementWidget-active');
            }
        }


    })

}











function actionsheetStateFavorite(){



    let itemPath = '';


    // TELA TODOS
    if ( screen_active_index == 0 ){
        console.log("toggle-fav", item_option_clicked_index );

        itemPath = $("#screen-all > div").eq(item_option_clicked_index).attr('path');
        let indexFav = getFavIndex(itemPath);
        if ( indexFav >= 0 ){
            console.log("item existe [remove code need]", indexFav);
            LIST_FAVORITES.splice(indexFav, 1);
        }

        else{
            let title  = $("#screen-all > div").eq(item_option_clicked_index).children(".elementWidget-content").children('.elementWidget-title').text();;
            let artist = $("#screen-all > div").eq(item_option_clicked_index).children(".elementWidget-content").children('.elementWidget-subTitle').text();
            addItemFavorite(title, artist, itemPath);
        }
    }



    // TELA ALBUNS -- TELA LATERAL
    else if ( screen_active_index == 1 && $("#albumContent-screen").css('left') == '0px' ){

        console.warn("ITEM ALBUM -- FAVORITE");

        itemPath = JSON_ALBUNS[album_open_index].list[item_option_clicked_index].path;
        let indexFav = getFavIndex(itemPath);

        if ( indexFav >= 0 ){
            console.log("item [album item] existe [remove code need]", indexFav);
            LIST_FAVORITES.splice(indexFav, 1);
        }
        else{
            let title  = JSON_ALBUNS[album_open_index].list[item_option_clicked_index].title;
            let artist = JSON_ALBUNS[album_open_index].artist;
            addItemFavorite(title, artist, itemPath);
        }

    }



    // TELA ARTISTA
    else if ( screen_active_index == 2 ){


        // TELA LATERAL ALBUM [artist]
        if ( $("#albumContent-screen").css('left') == '0px' ){
            console.warn("ADD FAV [ARTIST ALBUM SIDE]");

            itemPath = $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).attr('path');
            let indexFav = getFavIndex(itemPath);

            if ( indexFav >= 0 ){
                LIST_FAVORITES.splice(indexFav, 1);
            }
            else{
                let title  = $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).children(".elementWidget-content").children(".elementWidget-title").text();
                let artist = $("#albumContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).children(".elementWidget-content").children(".elementWidget-subTitle").text();
                addItemFavorite(title, artist, itemPath);
            }

        }


        // TRACK LIST
        else{

            console.warn("ADD FAV TRACK LIST");

            itemPath = $("#track-list > div").eq(item_option_clicked_index).attr('path');
            let indexFav = getFavIndex(itemPath);

            if ( indexFav >= 0 ){
                LIST_FAVORITES.splice(indexFav, 1);
            }
            else{
                let title  = $("#track-list > div").eq(item_option_clicked_index).children(".elementWidget-content").children(".elementWidget-title").text();
                let artist = $("#track-list > div").eq(item_option_clicked_index).children(".elementWidget-content").children(".elementWidget-subTitle").text();
                addItemFavorite(title, artist, itemPath);
            }

        }


    }












    // TELA PASTAS
    else if ( screen_active_index == 3 ){

        itemPath = $("#folderContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).attr('path');
        let indexFav = getFavIndex(itemPath);

        if ( indexFav >= 0 ){
            LIST_FAVORITES.splice(indexFav, 1);
        }
        else{
            let title  = $("#folderContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).children(".elementWidget-content").children(".elementWidget-title").text();
            let artist = $("#folderContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).children(".elementWidget-content").children(".elementWidget-subTitle").text();
            addItemFavorite(title, artist, itemPath);
        }        

    }









    if ( LIST_FAVORITES.length == 0 ){
        $(".favorite-icon").removeClass("favorite-news");
    }






    toggleActionsheet(false, $("#actionsheet-itemOpt"));


}

























// FOLDER BREADCRUMB
$("#breadcrumb").click(function(){

    console.warn("breadcrumb click");

});






// GERAR LISTA DE PASTAS
function gerarListaPastas(){

    


    for (let i = 0; i < JSON_ALL.length; i++){
        let tempSplit = JSON_ALL[i].path.split('/');
        LIST_FOLDER_NAME.push(tempSplit[ tempSplit.length-2 ]);
    }

    // REMOVER DUPLICADOS
    LIST_FOLDER_NAME  = [...new Set(LIST_FOLDER_NAME)];

    LIST_FOLDER_NAME.sort(function(a, b){


        let fa = a.toLowerCase();
        let fb = b.toLowerCase();

        if (fa > fb)return 1;
        if (fa < fb)return -1;

        return 0;

    });



    JSON_FOLDER = [];
    $("#list-folder").empty();

    //console.log('----------------------');
    
    for (let i = 0; i < LIST_FOLDER_NAME.length; i++){

        console.warn("PASTA: " + LIST_FOLDER_NAME[i]);



        let tempList = [];
        let musicCount = 0;

        for (let j = 0; j < JSON_ALL.length; j++){

            let tempSplit = JSON_ALL[j].path.split('/');
            tempSplit = tempSplit[ tempSplit.length-2 ];

            if (LIST_FOLDER_NAME[i] == tempSplit ){
                console.warn("ITEM: " + JSON_ALL[j].title);

                tempList.push({
                    'title': JSON_ALL[j].title,
                    'artist': JSON_ALL[j].artist,
                    'album': JSON_ALL[j].album,
                    'path': JSON_ALL[j].path
                });

                musicCount++;


                

            }
            
            

        }
        
        gerarItemFolder(LIST_FOLDER_NAME[i], musicCount);


        JSON_FOLDER.push({
            'folder': LIST_FOLDER_NAME[i],
            'list': tempList
        });


    }

    //console.log('----------------------');


    //console.table(JSON_FOLDER);












}







function gerarItemFolder(title, tracksCounter){

    let tempText = '';
    if ( tracksCounter == 1 ){
        tempText = '1 Faixa';
    }
    else{
        tempText = tracksCounter +' Faixas';
    }


    $("#list-folder").append(`
    
    <div class="elementWidget-wrapper">
					
        <div class="elementWidget-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
            </svg>
        </div>
        
        <div class="elementWidget-content">
            <div class="elementWidget-title">${title}</div>
            <div class="elementWidget-subTitle">${tempText}</div>
        </div>
    </div>
    
    `);


}








function gerarItemFolderMusic(title, artist, path){

    $("#list-folder").append(`
    
    <div class="elementWidget-wrapper">
					
        <div class="elementWidget-image">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
            </svg>
        </div>
        
        <div class="elementWidget-content">
            <div class="elementWidget-title">${title}</div>
            <div class="elementWidget-subTitle">${artist}</div>
        </div>
    </div>
    
    `);


    $('#list-folder .elementWidget-wrapper').last().attr('path', path);

}
















function gerarListaPastaSide( folderIndex ){

    $("#folderContent-screen .screen-section").empty();



    for (let i = 0; i < JSON_FOLDER[folderIndex].list.length; i++){


        $("#folderContent-screen .screen-section").append(`
        <div class="elementWidget-wrapper">
				
            <div class="elementWidget-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z"/>
                </svg>
            </div>
            
            <div class="elementWidget-content">
                <div class="elementWidget-title">${JSON_FOLDER[folderIndex].list[i].title}</div>
                <div class="elementWidget-subTitle">${JSON_FOLDER[folderIndex].list[i].artist}</div>
            </div>
            
            <div class="elementWidget-opt">
                <div class="icon24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                </div>
            </div>
        </div>
        `);

        $('#folderContent-screen .elementWidget-wrapper').last().attr('path', JSON_FOLDER[folderIndex].list[i].path);



        $("#folderContent-screen .elementWidget-wrapper").removeClass("elementWidget-active");

        if ( MUSIC_QUEUE_INDEX >= 0 ){
            for (let i = 0; i < $("#folderContent-screen .elementWidget-wrapper").length; i++){
                if ( MUSIC_QUEUE_LIST[MUSIC_QUEUE_INDEX].path == $("#folderContent-screen .elementWidget-wrapper").eq(i).attr('path') ){
                    $("#folderContent-screen .elementWidget-wrapper").eq(i).addClass("elementWidget-active");
                    break;
                }
            }
        }

        


    }


}



















// CLICK NA MUSICA DE DENTRO DA PASTA
$("#folderContent-screen").on("click", ".elementWidget-wrapper", function(){


    console.log("item [folder inside] " , $(this).index() );

    gerarQueueByAll( $(this).index() );

});












// CLICK NO OPTION MUSICA DE DENTRO DA PASTA
$("#folderContent-screen").on("click", ".elementWidget-opt", function(e){

    e.stopImmediatePropagation();
    

    console.log("item option [folder inside] " , $(this).parent().index() );

    item_option_clicked_index = $(this).parent().index();






    let itemPath = $("#folderContent-screen .elementWidget-wrapper").eq(item_option_clicked_index).attr('path');
    let indexFav = getFavIndex(itemPath);
    if ( indexFav >= 0 ){
        favButtonStateMode(true);
    }
    else{
        favButtonStateMode(false);
    }


    $(".actionsheet-favorite").show();





    toggleActionsheet(true, $("#actionsheet-itemOpt"));
    

});














function requestAJAX_allMusics(){

    $("#loading").show();


    $.ajax({
        type: "GET",
        url: (document.URL + 'pathfinder2.php?type=all'),
        success: function(response) {

            console.warn('DATA OK');

            $("#loading").hide();

            RESPONSE_JSON = JSON.parse(response);
 
            JSON_ALL = JSON.parse(response);

            JSON_ALL.sort(function(a,b){
                let fa = a.title.toLocaleLowerCase();
                let fb = b.title.toLocaleLowerCase();
                if (fa > fb)return 1;
                if (fa < fb)return -1;
                return 0;
            });



            for (let i = 0; i < JSON_ALL.length; i++){
                LIST_ARTISTS_NAME.push(JSON_ALL[i].artist);
                LIST_ALBUNS_NAME.push(JSON_ALL[i].album);
            }

            // REMOVER DUPLICADOS
            LIST_ARTISTS_NAME = [...new Set(LIST_ARTISTS_NAME)];
            LIST_ALBUNS_NAME  = [...new Set(LIST_ALBUNS_NAME)];

            // ORGANIZAR A-Z
            LIST_ARTISTS_NAME.sort();
            LIST_ALBUNS_NAME.sort();





            

            if ( screen_active_index == 0 ){
                gerarListaAll();
            }
            else if ( screen_active_index == 1 ){
                gerarListaAlbuns();
            }

            else if ( screen_active_index == 2 ){
                gerarListaAlbuns();
                gerarListaArtista();
            }

        }
    });

}




 





$("#loading").hide();
requestAJAX_allMusics();


