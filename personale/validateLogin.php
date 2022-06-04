<?php
if (!(isset($_POST['loginButton']))) {
    header("Location: ./");
}
else {
    $dbconn = pg_connect("host=localhost port=5432 dbname=utente 
                user=postgres password=biar") 
                or die('Could not connect: ' . pg_last_error());
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        if($dbconn){
            $email = $_POST['inputEmail'];
            $q1 = "select * from utente where email= $1";
            $result = pg_query_params($dbconn, $q1, array($email));
            if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))) {
                echo "<h1>Sorry, you are not a registered user</h1>
                    <a href=./index.html> 
                        Click here to register
                    </a>";
            }
            else {
                $password = md5($_POST['inputPassword']);
                $q2 = "select * from utente where email = $1 and passwd = $2";
                $result = pg_query_params($dbconn, $q2, array($email,$password));
                if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))) {
                    echo "<h1> The password is erroneous</h1>
                        <a href='./index.html'> Click here to login </a>";
                }
                else {
                    $nome = $line['nome'];
                    $cognome = $line['cognome'];
                    $telefono = $line['telefono'];
                    $regione = $line['regione'];
                    session_start();
                    $_SESSION['logged'] = true;
                    $_SESSION['email'] = $email;
                    $_SESSION['nome'] = $nome;
                    $_SESSION['cognome'] = $cognome;
                    $_SESSION['telefono'] = $telefono;
                    $_SESSION['regione'] = $regione;
                    
                    header("Location: ./welcome.php?=$nome");
                }
            }
        }
    ?>
</body>
</html>