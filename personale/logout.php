<?php
    session_start();
    $_SESSION = array();
    session_destroy();
    if(!isset($_SESSION['logged'])){
        header("location: ../index.html");
    }
    else echo "errore nel logout!";
?>