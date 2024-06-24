<?php



$PATH = "/var/www/html/player/root";

$arquivos = shell_exec("find $PATH -type f -regex '.*\.\(mp3\|wav\)$'");
$arquivos = explode("\n", $arquivos);
array_pop($arquivos);









function getMusicParamByPath( $path ){

    

    
    $title  = shell_exec("eyeD3 \"$path\" | grep \"title: \"");
    $artist = shell_exec("eyeD3 \"$path\" | grep \"artist: \" | head -1");
    $album  = shell_exec("eyeD3 \"$path\" | grep \"album: \" | head -1");


    $title = trim($title);
    $artist = trim($artist);
    $album = trim($album);


    // TITLE
    if ( $title == null || $title == "" ){
        $tempTitle = $path;
        $tempTitle = explode("/", $path);
        $tempTitle = $tempTitle[ count($tempTitle) - 1 ];
        $title = $tempTitle;
    }else{

        $title = explode("title: ", $title)[1];
        
        if ( trim($title) == null ){
            $tempTitle = $path;
            $tempTitle = explode("/", $path);
            $tempTitle = $tempTitle[ count($tempTitle) - 1 ];
            $title = $tempTitle;
        }
        
    }


    // ARTIST
    if ( $artist == null ){
        $artist = "desconhecido";
    }
    else{
        $artist = explode("artist: ", $artist)[1];
    }


    // ALBUM
    if ( $album == null ){
        $album = "desconhecido";
    }
    else{
        $album = explode("album: ", $album)[1];
    }




     



    $path = explode("/var/www/html/player/", $path)[1];

    return array(
        'title' => $title,
        'artist' => $artist,
        'album' => $album,
        'path' => $path
    );


}








// TODAS AS MUSICAS
function getAllMusics(){

    global $arquivos;

    $lista = array();


    foreach ($arquivos as $arq) {
        array_push($lista, getMusicParamByPath($arq));
    }

    echo json_encode( $lista );
}












// QUERY STRING

if ( isset($_GET['type']) ){



    // MOSTART TODAS AS MUSICAS
    if ( $_GET['type'] == "all" ){
        // echo "SHOW ALL MUSICS";
        getAllMusics();
    }



}




?>
