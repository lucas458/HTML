alarmClickedIndex = -1;     // INDEX DO ALARME SELECIONADO
        alarmClickedSongIndex = -1; // INDEX DO SOM SELECIONADO
        isEditMode = false;
        
        // REAL TIME CLOCK
        function dateUpdateScreen(){

            date = new Date();

            hora    = date.getHours();
            minuto  = date.getMinutes();
            
            
            $("#header-clock").text(`${hora}:${ (minuto < 10)? ("0" + minuto): minuto } ${ (hora > 12 )? "PM" : "AM" }`);

        }
        dateUpdateScreen(); // INITAL CLOCK


        // UPDATE CLOCK -- 500ms
        setInterval( dateUpdateScreen, 500 );





        
        // POPUP
        function showPopUp( message ){

            $("#popup-message").fadeOut(1); // HIDDEN FAST


            $("#popup-message").text(message);
            $("#popup-message").fadeIn(250);


            setInterval(function(){
                $("#popup-message").fadeOut(500);
            },1500);

        }

        




        // CALCULO DE TEMPO DO TOQUE DO ALARME
        function alarmDiferenceCalc( alarmHour, alarmMin ){

            // HORA DO DISPOSITIVO
            realHour    = 8     //date.getHours();
            realMin     = 40    //date.getMinutes();
            
            
            
            tempHour = 0;
            tempMin = 0;
            
            





            // HORAS e MINUTOS


            // HORAS


            // MINUTOS

            showPopUp(`Alarme definido para ${tempHour} horas e ${tempMin} minutos apartir de agora`);


        }

        alarmDiferenceCalc(5, 20);







        



        // SABER QUAIS DIAS DA SEMANA O ALARME TOCA
        function repeatDays(){
            tempRepeat = [];
            isEveryDay = true;
            tempText = "";


            // $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children("summary").text("Todos os dias");
            // $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children(".alarmRepeatContainer").children("label").removeClass("toggle-weekday");
            // $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children(".alarmRepeatContainer").children("label").addClass("toggle-weekday");
            // $(".alarmRepeatToggle input").eq(alarmClickedIndex).prop("checked");
            
            // GET STATES
            for ( let i = 0; i < 7; i++ ){
                tempRepeat[i] = $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children(".alarmRepeatContainer").children("label").children("input").eq(i).prop("checked");
                if ( tempRepeat[i] == false ){
                    isEveryDay = false;
                }
            }

            
            


            // REPETIR -- ON
            if ( $(".alarmRepeatToggle input").eq(alarmClickedIndex).prop("checked") ){

                // SHOW TOGGLES
                $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children(".alarmRepeatContainer").children("label").removeClass("toggle-weekday");

                

                // SELECIONADO TODOS  -- REPETIR TODOS OS DIAS
                if ( isEveryDay ){
                    $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children("summary").text("Todos os dias");
                }

                // NEM TODOS OS DIAS FORAM SELECIONADOS
                else{

                    // ALGUNS DIAS
                    if ( tempRepeat[0] || tempRepeat[1] || tempRepeat[2] || tempRepeat[3] || tempRepeat[4] || tempRepeat[5] || tempRepeat[6] ){



                        for ( let i = 0; i < 7; i++ ){

                            if ( tempRepeat[i] ){

                                tempText += (i == 0)? "Dom" : "";
                                tempText += (i == 1)? "Seg" : "";
                                tempText += (i == 2)? "Ter" : "";
                                tempText += (i == 3)? "Qua" : "";
                                tempText += (i == 4)? "Qui" : "";
                                tempText += (i == 5)? "Sex" : "";
                                tempText += (i == 6)? "Sáb" : "";


                                for ( let x = i+1; x < 7; x++ ){
                                    if (tempRepeat[x]){
                                        tempText += ", ";
                                        break;
                                    }
                                }
                                
                            }

                        }
                        
                        $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children("summary").text(tempText);


                    }


                    // NENHUM DIA SELECIONADO -- HOJE
                    else{
                        
                        $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children("summary").text("Hoje");
                    }

                }
            }  


            // REPETIR -- OFF
            else{

                // HIDDEN TOGGLES
               $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children(".alarmRepeatContainer").children("label").addClass("toggle-weekday");
               $(".alarmRepeatToggle input").eq(alarmClickedIndex).parent().parent().parent().children("summary").text("Hoje");

            } 

            


        }






        // MASTER TOGGLE REPEAT MODE
        $("#alarmListContainer").on("change", ".alarmRepeatToggle input", function(){
            repeatDays();
        });


        // ON SELECT WEEKDAY
        $("#alarmListContainer").on("change", ".alarmRepeatContainer input", function(){
            console.log("WEEKDAY SELECTED");
            repeatDays();
            
        });

















        




        // EDITAR HORA:MINUTO | AM/PM
        $("#alarmListContainer ").on("click", ".alarmClock", function(){
            console.log("EDITAR...");

            // GET INDEX ON CLICK ALARM ITEM CLOCK
            alarmClickedIndex = $(this).parent().parent().index();
            console.log("EDIT CLICK NO: ", alarmClickedIndex);

            // MODO -- EDITOR
            isEditMode = true;
            
            // LER -- HORA:MINUTO
            let timeEdit = $(".alarmClock").eq(alarmClickedIndex).children("span").eq(0).text();

            // LER - AM/PM
            let timeModeEdit = $(".alarmClock").eq(alarmClickedIndex).children("span").eq(1).text();


            // CHECK -- AM/PM
            document.getElementsByName("timeModeScreen3")[0].checked = (timeModeEdit == "AM");
            document.getElementsByName("timeModeScreen3")[1].checked = !(timeModeEdit == "AM");


            // DIVIR HORA:MINUTO
            timeEdit = timeEdit.split(":");


            // ESCREVER -- HORAS
            $("#tela3-hours").text( timeEdit[0] );


            // ESCREVER -- MINUTOS
            timeEdit[1] = parseInt( timeEdit[1] );
            $("#tela3-minutes").text( (timeEdit[1] < 10)? ( "0" + timeEdit[1] ) : timeEdit[1] );

            // ABRIR TELA3
            $("#tela3").fadeIn(100);

        });





        // SELECIONAR MUSICA -- ABRIR TELA LATERAL
        $("#alarmListContainer ").on("click", ".alarmSongButton", function(){
            console.log("MUDA MUSICA...");
            tela2(true);
        });



        // SELECIONAR MUSICA E SALVAR NO ATRIBUTO E NO TEXTO
        $(".optionSongContainer > div").click(function(){
            console.log("selected music: ", $(this).parent().index()-2);
            alarmClickedSongIndex =  $(this).parent().index() - 2;


            // SET ATTRIBUTE
            $(".alarmSongButton").eq(alarmClickedIndex).attr("data-song", alarmClickedSongIndex);

            // SET TEXT
            $(".alarmSongButton div").eq(alarmClickedIndex).text( $(".optionSongName").eq(alarmClickedSongIndex).text()  );
        });






        // DELETAR ALARME
        $("#alarmListContainer ").on("click", ".alarmDelete", function(){
            console.log("DELETAR ALARME...", alarmClickedIndex);
            $(this).parent().parent().parent().remove();
        });


        












        // CRAIR NOVO ALARME
        function createNewAlarm(){
            console.log("CRIAR NOVO");

            // MODO -- CRIAR NOVO
            isEditMode = false;
            $("#tela3").fadeIn(100);
        }











        // LIGAR / DESLIGAR -- ALARME
        $("#alarmListContainer").on("change", ".alarmClockContainer input", function(){

            
            // LIGAR -- CALCULAR QUANTO TEMPO FALTA PARA TOCAR
            if ( $(this).prop("checked") ){
                console.log("Ligar: ", alarmClickedIndex);

                $(".alarmClockContainer").eq(alarmClickedIndex).css("color", "#fff");


                selectedHour = $(".alarmClock").eq(alarmClickedIndex).children("span").eq(0).text().split(":")[0] - 0;
                selectedMin  = $(".alarmClock").eq(alarmClickedIndex).children("span").eq(0).text().split(":")[1] - 0;

                if ( $(".alarmClock").eq(alarmClickedIndex).children("span").eq(1).text() == "PM" ){
                    selectedHour += 12;
                }
                

                alarmDiferenceCalc(selectedHour, selectedMin);
            }


            // DESLIGAR
            else{
                console.log("Desligar: ", alarmClickedIndex);
                $(".alarmClockContainer").eq(alarmClickedIndex).css("color", "#b7b8b9");
            }

        });














        // ADD/EDITAR  -- NOME
        $("#alarmListContainer").on("input", ".alarmInputName", function(){
            console.log("KEYSTROKE");

            inputValue = $(this).val();

            if ( inputValue.length > 20 ){
                inputValue = inputValue.slice(0, 20);
                $(this).val( inputValue ); 
            }


            $(".alarmName").eq(alarmClickedIndex).text( (inputValue.length <= 0)?" " : inputValue );
            
        });




       













        // MODAL EDIT -- HOUUR
        function changeClockHour( mode ){
            
            changeHour = $("#tela3-hours").text();
            changeHour = parseInt(changeHour);

            if (mode){
                changeHour = (changeHour < 12)? (changeHour+1) : 1;
            }

            else{             
                changeHour = (changeHour > 1)? (changeHour-1) : 12;
            }

            $("#tela3-hours").text(changeHour);
        }
        



        // MODAL EDIT -- MINUTE
        function changeClockMinute( mode ){
            changeMin = $("#tela3-minutes").text();
            changeMin = parseInt(changeMin);

            if (mode){
                changeMin = (changeMin + 1) % 60;
            }

            else{
                changeMin = (changeMin > 0)? (changeMin-1) : 59;
            }

            $("#tela3-minutes").text((changeMin < 10)?("0" + changeMin):changeMin);
        }





        // MODAL EDIT -- AM/PM
        $(".timeModeScreen3Item").on("change", "input", function(){
            console.log("AM/PM", $(this).parent().index());
        });




        

        // MODAL EDIT -- CLOSE SCREEN
        function closeTimePicker(){

            // FECHAR TELA3
            $("#tela3").fadeOut(100);

            // RESET INPUTS
            $("#tela3-hours").text("1");
            $("#tela3-minutes").text("00");
            document.getElementsByName("timeModeScreen3")[0].checked = true;
        }

        




        // MODAL EDIT -- SAVE/CREATE
        function timerPickerOk(){

            // GET VALUES
            let tela3_hour = $("#tela3-hours").text();
            let tela3_min = $("#tela3-minutes").text();
            let isAM = document.getElementsByName("timeModeScreen3")[0].checked;



            /****** EDITAR ******/
            if ( isEditMode ){

                // TIME
                $(".alarmClock").eq(alarmClickedIndex).children("span").eq(0).text(`${tela3_hour}:${tela3_min}`);

                // AM/PM
                let timeModeEdit = $(".alarmClock").eq(alarmClickedIndex).children("span").eq(1).text( (isAM)?"AM":"PM" );
            }



            /****** NOVO ******/
            else{

                
                $("#alarmListContainer").append(`
                
                <div class="alarmItemContainer">
                    <div class="alarmClockContainer">
                        <div class="alarmClock">
                            <span>${tela3_hour}:${tela3_min}</span>
                            <span>${(isAM)?"AM":"PM"}</span>
                        </div>
                        <div>
                            <label class="UI-widget UI-switch">
                                <input type="checkbox" checked>
                                <div><div></div></div>
                            </label>
                        </div>
                    </div>
        
        
                    <pre class="alarmName"> </pre>
        
                        <div class="alarmMoreOptions">
                            <details>
                                <summary>Hoje</summary>
                                <label class="alarmRepeatToggle">
                                    <label class="UI-widget UI-checkbox"><input type="checkbox"><div></div></label>
                                    Repetir
                                </label>
            
                                <div class="alarmRepeatContainer">
                                    <label class="UI-widget UI-toggleButton toggle-weekday"><input type="checkbox"><div>D</div></label>
                                    <label class="UI-widget UI-toggleButton toggle-weekday"><input type="checkbox"><div>S</div></label>
                                    <label class="UI-widget UI-toggleButton toggle-weekday"><input type="checkbox"><div>T</div></label>
                                    <label class="UI-widget UI-toggleButton toggle-weekday"><input type="checkbox"><div>Q</div></label>
                                    <label class="UI-widget UI-toggleButton toggle-weekday"><input type="checkbox"><div>Q</div></label>
                                    <label class="UI-widget UI-toggleButton toggle-weekday"><input type="checkbox"><div>S</div></label>
                                    <label class="UI-widget UI-toggleButton toggle-weekday"><input type="checkbox"><div>S</div></label>
                                </div>
                                
                                <div class="iconWithLabel alarmSongButton" data-song="0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/></svg>
                                    <div>Silencioso</div>
                                </div>
            
                                <div class="iconWithLabel alarmNameInputContainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16"><path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/></svg>
                                    <input type="search" class="alarmInputName" placeholder="Marcador">
                                </div>
            
                                <div class="iconWithLabel alarmDelete">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
                                    <div>Excluir</div>
                                </div>
                            </details>
                        </div>
                    </div>
                
                `);


            }


            // FECHAR
            $("#tela3").fadeOut(100);

            
            setTimeout(function(){
                // RESET INPUTS
                $("#tela3-hours").text("1");
                $("#tela3-minutes").text("00");
                document.getElementsByName("timeModeScreen3")[0].checked = true;
            },100);

            

           

        }





















        // ABRIR / FECHAR -- TELA 2 -- SELECT SONG
        function tela2( mode ){

            // ABRIR
            if ( mode ){

                Songindex = $(".alarmSongButton").eq(alarmClickedIndex).attr("data-song");

                document.getElementsByName("radioSong")[Songindex].checked = true;

                $("#tela2").css("left", "0");
            }

            // FECHAR
            else{
                $("#tela2").css("left", "-100%");
            }

        }