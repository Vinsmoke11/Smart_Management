<?php
    session_start();
    $to = $_SESSION['email'];
    $subject = 'Preventivo in base a incentivi in: '. $_SESSION['regione'];
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers  .= 'From: preventivoGVD@greenvehicledemand.com'."\r\n";
    
    $nome = $_SESSION['nome'];
    $cognome = $_SESSION['cognome'];
    
    $marca = $_POST['marca'];
    $modello = $_POST['modello'];
    $oldprice = $_POST['oldprice'];
    $newprice = $_POST['newprice'];
    $sconto = $_POST['sconto'];

    $message = "<html><head></head><body>";
    $message .= "<h1>Salve gentile ". $nome ." ". $cognome .",</h1>";
    $message .= "<h3>come da lei richiesto le inoltriamo il preventivo generato per la seguente auto:</h3>";
    $message .= "<h2 style='text-decoration: underline'>".$marca." ".$modello."</h2>";
    $message .= "<hr>";
    $message .= "<h4>Prezzo standard: ".$oldprice."</h4>";
    $message .= "<h3>Prezzo dopo incentivi regionali: €".$newprice.",00</h3>";
    $message .= "<h4>Risparmio: €".$sconto.",00</h4>";
    $message .= "<h4>La ringraziamo per aver scelto Green Vehicle Demad!</h4>";
    $message .= "<a href='http://localhost:3000/index.html'>Clicca qui</a> per tornare sul nostro sito<br><hr>";
    $message .= "</body></html>";

    if(mail($to,$subject,$message,$headers)){
        header("location: ../personale/welcome.php");
    }
?>