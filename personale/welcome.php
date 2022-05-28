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
              <a class="nav-link" href="../auto/auto.html">Le nostre auto</a>
              <a class="nav-link active" href="#">Incentivi</a>
            </div>
          </div>
        </div>
    </nav>
    <section class="incentiviBackground" id="app">
        <div class="container container-md justify-content-center">
            <?php
                echo "<h1 class='lead' v-if='!sended' style='font-size: 32px;'>Benvenuto " .$_SESSION['username']. "</h1>"
            ?>
            <form action="send.php" method="post" name="form" class="mt-4">
                <input type="submit" value="Richiedi" class="mt-4">
            </form>
            <div name="msg" class="m-4">
                <a href="./logout.php" class="btn btn-success btn-md">Logout</a>
            </div>
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