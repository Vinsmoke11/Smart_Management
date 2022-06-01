<?php
    if(!isset($_POST['invia'])){
        header("location: ./index.html");
    }
    $mail =  $_POST['email'];
    $name = $_POST['nome'];
    $tel =  $_POST['telefono'];
    $mess = $_POST['messaggio'];
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers  .= 'From: assistenzaGVD@greenvehicledemand.com'."\r\n";
    $to = "greenvehicledemand@outlook.it";
    $subject = "Richiesta assistenza cliente";

    $message = "<html><head></head><body>";
    $message .= "<p>Mail genearata automaticamente dal servizio di assistenza clienti:</p>";
    $message .= "<h3>Richiesta inoltrata da: ".$name."</h3>";
    $message .= "<h3>Contatti: ".$mail." ".$tel." </h3>";
    $message .= "<h3>Richiesta:</h3>";
    $message .= "<p>".$mess."</p>";
    $message .= "</body></html>";

    if(mail($to, $subject, $message, $headers)){
        header("location: ./index.html");
    }
?>