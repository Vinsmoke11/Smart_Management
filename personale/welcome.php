<?php
    session_start();
    if(!isset($_SESSION['logged']) || ($_SESSION['logged'] !== true)){
        header("location: ./index.html");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <script src="https://unpkg.com/vue@3"></script>
    <script src="../bootstrap.min.js"></script>
    <title>Area Privata</title>
</head>
<body>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <img src="../immagini/logo.png" alt="" height="45px">
          <a class="navbar-brand" href="../news/index.html">Green Vehicle Demand</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="../index.html">Home</a>
              <a class="nav-link" href="../auto/auto.php">Le nostre auto</a>
              <a class="nav-link" href="../index.html">Incentivi</a>
            </div>
          </div>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <?php
            if(!$_SESSION['logged'] || !isset($_SESSION['logged'])){
              echo "<div class='navbar-nav'>
                    <a class='nav-link btn border-secondary' style='border-radius: 10px;' href='../personale/welcome.php'>Area personale</a>
                    </div>";
            }
            else{
              echo "<div class='navbar-nav'>
                    <a class='nav-link btn border-secondary' style='border-radius: 10px;' href='../personale/welcome.php'>Ciao " . $_SESSION['nome'] . "</a>
                    </div>";
            }
            ?>
          </div>
        </div>
    </nav>
    <section class="incentiviBackground" id="app">
        <div class="container container-md justify-content-center">
          <div class="row">
            <div class="col">
              <hr>
            <?php
                echo "<h1 class='mt-4' style='font-size: 32px;'>Benvenuto " .$_SESSION['nome']." ".$_SESSION['cognome']. "</h1>"
            ?>
            <h2 class="mt-4" style='font-size: 26px;'>Il tuo profilo:</h2>
            <table>
              <tr>
                <td class="p-3">Nome:  </td>
                <td class="lead p-3"><?php echo $_SESSION['nome'];?></td>
              </tr>
              <tr>
                <td class="p-3">Cognome:  </td>
                <td class="lead p-3"><?php echo $_SESSION['cognome'];?></td>
              </tr>
              <tr>
                <td class="p-3">E-mail:  </td>
                <td class="lead p-3"><?php echo $_SESSION['email'];?></td>
              </tr>
              <tr>
                <td class="p-3">Telefono:  </td>
                <td class="lead p-3"><?php echo $_SESSION['telefono'];?></td>
              </tr>
              <tr>
                <td class="p-3">Regione:  </td>
                <td class="lead p-3"><?php echo $_SESSION['regione'];?></td>
              </tr>
            </table>
            <h3 class="lead mt-4">Grazie per esserti unito a noi di Green Vehicle Demand...</h3>
            <a href="./logout.php" class="btn btn-outline-success btn-md mt-5">Logout</a>
          </div>
          <div class="col">
          <hr>
            <h3 class="lead text-bold mt-3">...Ora puoi richiedere un preventivo personalizzato per l'auto che più ti piace!</h3>
            <p class="lead mt-5 mb-2"><a href="../auto/auto.php" class="btn btn-success btn-sm">Clicca qui</a> per scegliere la tua prossima auto direttamente dal nostro catatlogo.</p>
            <p class="lead mt-5 mb-2">Altrimenti, se già hai le idee chiare,</p>
            <p class="lead mt-3 mb-2"> <a href="../auto/preventivo.php" class="btn btn-success btn-sm">Clicca qui</a> per richiedere un preventivo sulla base delle tue preferenze.</p>
            <img src="https://beppegrillo.it/wp-content/uploads/2020/10/auto-elettrica.jpg" class="img-fluid" alt="../immagini/roadster.webp">
          </div>
          </div>
          <hr>
        </div>
    </section>
    <div class="container mt-5 p-3">
        <div class="row">
          <div class="text-left text-md-start">
            <span class="copyright">Copyright &copy; Progetto Linguaggie e tecnologie per il web 2022 Pilla-Pascucci-Cutroni</span>
        </div>
    </div>
    <script src="./app.js" type="application/javascript"></script>
</body>
</html>