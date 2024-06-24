<?php


$PATH = "/var/www/html/player/root";

$arquivos = shell_exec("find $PATH -type f -regex '.*\.\(mp3\|wav\)$'");
$arquivos = explode("\n", $arquivos);
array_pop($arquivos);




$lista_nome_album   = array();  // LISTA COM ALBUNS
$lista_nome_artista = array();  // LISTA DOS ARTISTAS
$lista_nome_pasta   = array();  // LISTA DAS PASTAS



$lista_by_album = array();



function getMusicParamByPath( $path ){

    global $lista_nome_album, $lista_nome_artista;

    
    $title  = shell_exec("eyeD3 \"$path\" | grep \"title: \"");
    $artist = shell_exec("eyeD3 \"$path\" | grep \"artist: \" | head -1");
    $album  = shell_exec("eyeD3 \"$path\" | grep \"album: \" | head -1");




    // TITLE
    if ( $title == null ){
        $tempTitle = $path;
        $tempTitle = explode("/", $path);
        $tempTitle = $tempTitle[ count($tempTitle) - 1 ];
        $title = $tempTitle;
    }else{
        $title = explode("title: ", $title)[1];
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
        $album = "deconhecido";
    }
    else{
        $album = explode("album: ", $album)[1];
    }




    // ADD
    array_push($lista_nome_album, $album);
    array_push($lista_nome_artista, $artist);

    // REMOVER REPETICAO
    $lista_nome_album = array_unique($lista_nome_album);
    $lista_nome_artista = array_unique($lista_nome_artista);



    $path = explode("/var/www/html/player/", $path)[1];

    return array(
        'title' => $title,
        'artist' => $artist,
        'album' => $album,
        'path' => $path
    );


}




 







// TODOS
function getAllMusics(){


    global $arquivos;


    $tempAllItens = array();

    foreach ($arquivos as $item) {
        array_push($tempAllItens, getMusicParamByPath($item));
    }


    return json_encode($tempAllItens);

}








// ALBUNS
function getAllAlbuns(){


    $tempList = array();
    global $arquivos;
    global $lista_nome_album;
    global $lista_by_album;

    foreach ($arquivos as $item){
        array_push($tempList, getMusicParamByPath($item) );
    }

    
    $tempAlbuns = array();

    foreach ($lista_nome_album as $album) {
        
        $tempAlbumList = array();
        $tempArtist = "";

        foreach ($tempList as $item) {
            
            if ( $item['album'] == $album ){

                $tempArtist = $item['artist'];
                array_push($tempAlbumList, $item);
            }

        }


        array_push($tempAlbuns, array($tempArtist, $album, $tempAlbumList));
        

    }


    


    return json_encode($tempAlbuns);


}






//





if ( isset($_GET['type']) ){

    $value = $_GET['type'];


    switch ($value) {
        case 'all':
            echo getAllMusics();
            break;
        
        case 'album':
            echo getAllAlbuns();
            break;

        case "artist":
            echo "as";
            break;

        
        case "folder":
            break;
        

        default:
            echo "[]";
    }


}
else{
    echo "[]";
}







?>
