


// TIMESTAMP
var date = new Date();

// UPDATE CLOCK AND CHECK ALARM -- CALLBACK
setInterval(function(){

    date = new Date();


    printClock();

}, 1000);



printClock();

// UPDATE CLOCK
function printClock(){
    let time_hour = date.getHours();
    let time_min  = date.getMinutes();
    
    let time_mode = (time_hour > 12)?'PM':'AM';
    time_hour = (time_hour > 12)? (time_hour-12): time_hour;
    time_min  = (time_min  < 10)? ('0'+time_min ) : time_min;

    document.getElementById("clock-div").innerText = `${time_hour}:${time_min} ${time_mode}`;
}










var alarmAddEdit = false;

var alarmEditIndex = -1;



// LISTA DE ALARMES
var alarmes = [];

// ALARME DE CONTROLE
var alarmTemp = {
    "active": false,
    "time": "09:12_AM",
    "repeat": 0x00,
    "title": "",
    "colorIndex": 0,
    "songIndex": 0
};



function resetTempAlarm(){
    alarmTemp = {
        "active": false,
        "time": "09:12_AM",
        "repeat": 0x00,
        "title": "",
        "colorIndex": 0,
        "songIndex": 0
    };
}






var colorList = [
    '#f44336',  // LARANJA
    '#E91E63',  // ROSA
    '#03a9f4',  // AZUL
    '#4caf50',  // VERDE
    '#ffc107',  // AMARELO
    '#607d8b'   // CINZA

];






// APERTOU O BOTAO "+" (ADD ALARME)
function addAlarm(){
    screenAddEdit(true, 1);
}















// ABRIR TELA DE 'EDITAR ALARME' AO CLICAR NO ELEMENTO
$("#alarm-list").on("click", ".alarm-item-params", function(){
    
    // Get Index do Elemento clicado
    alarmEditIndex = $(this).parent().index();
    console.log('Editar item', alarmEditIndex );

    // abrir, editar
    screenAddEdit(true, 0);
});




// LIGAR/DESLIGAR ALARME
$("#alarm-list").on("change", ".alarm-item-state input", function(){
    
    let state = $(this).prop('checked');
    let index = $(this).parent().parent().parent().index();

     
    if ( state ){
        console.log("toggle ON  - ", index);
        $(this).parent().parent().parent().children(".alarm-item-params").css('filter', 'blur(0px)');
    }

    else{
        console.log("toggle OFF - ", index);
        $(this).parent().parent().parent().children(".alarm-item-params").css('filter', 'blur(1px)');
    }
   

});











// QUANDO CLICAR NO BOTAO "SALVAR"
function screenAddEditSave(){


    // CRIAR NOVO ALARME
    if ( alarmAddEdit ){
        
        console.log("CRIAR");


        // STATE
        alarmTemp.active = true;

        // TIME
        let alarm_time_hour = $("#time-edit-hour .clock-value").text();
        let alarm_time_min  = $("#time-edit-minutes .clock-value").text();
        let alarm_time_mode = $("#time-edit-mode .time-mode-button input").eq(0).prop("checked");
        alarm_time_mode = (alarm_time_mode)? 'AM' : 'PM';

        alarmTemp.time = `${alarm_time_hour}:${alarm_time_min}_${alarm_time_mode}`;
        alarmes.push(alarmTemp);



        // REPEAT
        alarm_repeat = '0b';
        for (let x = 0; x < 7; x++){
            if ( $("#repeatList .day-select input").eq(x).prop('checked') ){
                alarm_repeat += '1';
            }
            else{
                alarm_repeat += '0';
            }
        }
        alarm_repeat = alarm_repeat - 0;
        alarmTemp.repeat = alarm_repeat;




        // LABEL
        alarmTemp.title = $("#labelInput").val();


        // SELECTED COLOR
        for (let i = 0; i < $("#colorList .color-select input").length; i++){
            if ( $("#colorList .color-select input").eq(i).prop('checked') ){
                alarmTemp.colorIndex = i;
                break;
            }
        }


        // SELECTED SONG
        for (let i = 0; i < $("#songList .song-select input").length; i++){
            if ( $("#songList .song-select input").eq(i).prop('checked') ){
                alarmTemp.songIndex = i;
                break;
            }
        }




        let state = (alarmTemp.active)? 'checked' : '';


        // GERAR ITEM
        $("#alarm-list").append(`
        <div class="alarm-item" style="background-color: ${colorList[alarmTemp.colorIndex]};">
            <div class="alarm-item-params">
                <div class="alarm-item-param-label">${alarmTemp.title}</div>
                <div class="alarm-item-param-time">${alarm_time_hour}:${alarm_time_min} ${alarm_time_mode}</div>
                <div class="alarm-item-param-repeat">${daysRepeatString(alarm_repeat)}</div>
            </div>
            
            <div class="alarm-item-state">
                <label class="UI-switch">
                    <input type="checkbox" ${state}>
                    <div><div></div></div>
                </label>
            </div>
        </div>
        `);





    }






    // SALVAR O ALARME EDITADO
    else{
        console.log("SALVAR");
    }

}












// EDITAR HORAS -- UP
$("#time-edit-hour .clock-up").click(function(){
    console.log("clock Hour UP");

    let value = $(this).parent().children(".clock-value").text();
    value = parseInt(value);
    value = (value < 12)? (value+1) : 0;
    value = (value < 10)? ('0'+value) : value;
    $(this).parent().children(".clock-value").text(value);

});

// EDITAR HORAS -- DOWN
$("#time-edit-hour .clock-down").click(function(){
    console.log("clock Hour DOWN");

    let value = $(this).parent().children(".clock-value").text();
    value = parseInt(value);
    value = (value > 0)? (value-1) : 12;
    value = (value < 10)? ('0'+value) : value;
    $(this).parent().children(".clock-value").text(value);
});









// EDITAR MINUTOS -- UP
$("#time-edit-minutes .clock-up").click(function(){
    console.log("clock Minutes UP");

    let value = $(this).parent().children(".clock-value").text();
    value = parseInt(value);
    value = (value < 59)? (value+1) : 0;
    value = (value < 10)? ('0'+value) : value;
    $(this).parent().children(".clock-value").text(value);
});

// EDITAR MINUTOS -- DOWN
$("#time-edit-minutes .clock-down").click(function(){
    console.log("clock Minutes DOWN");

    let value = $(this).parent().children(".clock-value").text();
    value = parseInt(value);
    value = (value > 0)? (value-1) : 59;
    value = (value < 10)? ('0'+value) : value;
    $(this).parent().children(".clock-value").text(value);
});







// AM/PM -- SELECT BUTTONS
$("#time-edit-mode").on("click", ".time-mode-button input", function(){
    
    let modeIndex = $(this).parent().index();
    let modeValue =  $(this).parent().children("div").text();

    console.log( modeValue, modeIndex );

});











// 'INPUT' LABEL
$("#labelInput").keyup(function(event) {

    // TECLA 'ENTER'
    if ( event.which == 13 ) {
       event.preventDefault();
       $(this).blur();
    }

    // KEYS
    else{

        if ( $(this).val().length >= $(this).attr("maxlength")  ){
            $("#label-max").css("opacity", 1);
        }
        else{
            $("#label-max").css("opacity", 0);
        }

    }

});










function daysRepeatString( repeatValue ){

    


    

    let temp = [];

    if ( repeatValue & 1 << 6 ){ temp.push('dom'); }    // SEGUNDA
    if ( repeatValue & 1 << 5 ){ temp.push('seg'); }    // TERÇA
    if ( repeatValue & 1 << 4 ){ temp.push('ter'); }    // QUARTA
    if ( repeatValue & 1 << 3 ){ temp.push('qua'); }    // QUINTA
    if ( repeatValue & 1 << 2 ){ temp.push('qui'); }    // SEXTA
    if ( repeatValue & 1 << 1 ){ temp.push('sex'); }    // SÁBADO
    if ( repeatValue & 1 << 0 ){ temp.push('sáb'); }    // DOMINGO




    // HOJE -- SE NENHUM DOS DIAS DA SEMANA FOR SELECIONADO
    if ( temp.length == 0 ){
        return "Hoje";
    }

    // TODOS OS DIAS -- SE TODOS OS DIAS DA SEMANA FOR SELECIONADO
    else if ( temp.length == 7 ){
        return "Todos os dias";
    }

    // OUTROS DIAS
    else{
        let tempStr = '';
        for (let i = 0; i < temp.length; i++){
            tempStr += temp[i];
            if ( !(i == temp.length - 1) ){tempStr += ', ';}
        }
        return tempStr;
    }

    


    return null;



    


    


}











// GERAR LISTA DE ALARMES
function genList(){


    $("#alarm-list").empty();
    

    for ( let x = 0; x < alarmes.length; x++ ){

        let state = (alarmes[x].active)? 'checked' : '';

        $("#alarm-list").append(`
        
        <!-- ITEM -->
        <div class="alarm-item">
            <!-- LABEL, TIME, REPEAT -->
            <div class="alarm-item-params">
                <div class="alarm-item-param-label">Label</div>
                <div class="alarm-item-param-time">09:00 AM</div>
                <div class="alarm-item-param-repeat">${daysRepeatString(x)}</div>
            </div>
            <!-- SWITCH -->
            <div class="alarm-item-state">
                <label class="UI-switch">
                    <input type="checkbox" ${state}>
                    <div><div></div></div>
                </label>
            </div>
        </div>

        `);

    }

    

}













// TELA 2 - RESETAR 'UI'
function resetScreen2(){

    // HORAS
    $("#time-edit-hour .clock-value").text('00');

    // MINUTOS
    $("#time-edit-minutes .clock-value").text('00');

    // TIPO: AM
    $("#time-edit-mode input").eq(0).prop('checked', true);


    // RESETAR REPETIÇÃO
    $("#repeatList input").prop('checked', false);

    // LABEL
    $("#content-wrapper-label input").val('');

    // COR PADRÃO
    $("#colorList input").eq(0).prop('checked', true);

    // MUSICA PADRÃO
    $("#songList input").eq(0).prop('checked', true);
}









// TELA 2 - LER e WRITE NA TELA
function readAlarmByIndex( index ){

    let tempItem = alarmes[index];

    let time = tempItem.time;
    time = time.split('_');

    let repeat = tempItem.repeat;

    // HORAS
    $("#time-edit-hour .clock-value").text(time[0].split(':')[0]);

    // MINUTOS
    $("#time-edit-minutes .clock-value").text(time[0].split(':')[1]);

    // TIPO: AM
    $("#time-edit-mode input").eq( (time[1] == 'AM')?0:1 ).prop('checked', true);


    // RESETAR REPETIÇÃO
    $("#repeatList input").prop('checked', false);

    for ( let i = 0; i < 7; i++ ){

        if ( repeat & 1 << (6-i) ){
            $("#repeatList input").eq(i).prop('checked', true);
        }
       
    }


    // LABEL
    $("#content-wrapper-label input").val(tempItem.title);


    // COR
    $("#colorList input").eq(tempItem.colorIndex).prop('checked', true);


    // MUSICA
    $("#songList input").eq(tempItem.songIndex).prop('checked', true);


}










// ABRIR/FECHAR | TELA 2 - ADD/EDIT
function screenAddEdit( state, mode ){

    if ( state ){
        document.getElementById("screen-addEdit").style.left = "0";
    }

    else{
        document.getElementById("screen-addEdit").style.left = "-100%";
        resetTempAlarm();
        resetScreen2();
        return;
    }


    // PARAMETRO PARA SABER SE É PARA CRIAR/SALVAR
    alarmAddEdit = mode;


    // ADICIONAR ALARME
    if ( mode ){
        resetTempAlarm();
    }

    // EDITAR ALARME
    else{
        readAlarmByIndex( alarmEditIndex );
    }



    document.getElementById("screen2-title").innerText = (mode)? "Add Alarme" : "Editar Alarme";



}












// POPUP MESSAGE
function showPopup( msg , duration ){


    // Content
    $("#popup-content").text( msg );

    // Mostar Content
    $("#popup-wrapper").fadeIn(200);

    // Esconder Content depois de 'duration' em ms
    setTimeout( () => {
        $("#popup-wrapper").fadeOut(200);
    } , duration);


}