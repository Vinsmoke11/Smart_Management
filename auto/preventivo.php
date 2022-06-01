<?php 
  session_start();
  if(!isset($_SESSION['logged']) || ($_SESSION['logged'] !== true)){
    header("location: ../personale/index.html");
    exit();
  } 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <link rel="stylesheet" href="../css/style.css">
    <script src="../bootstrap.min.js"></script>
    <script src="https://unpkg.com/vue@3"></script>
    <title>Preventivo</title>
</head>
<body id="app2">
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
              <a class="nav-link active" href="#">Preventivo</a>
              <a class="nav-link" href="../incentivi/incentivi.html">Incentivi</a>
              <a class="nav-link" href="../about-us/about-us.html">Chi siamo?</a>
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
        </div>
    </nav>
    <div class="prevSection">
      <div class="container container-lg">
        <h2 class="text-dark text-center pt-4" style="border-bottom: solid 1px rgb(28, 28, 28);">RICHIEDI UN PREVENTIVO PER LA TUA PROSSIMA AUTO</h2>
        <p class="lead text-dark">Il preventivo sarà calcolato in base alla regione inserita in fase di registrazione...</p>
        <?php
          echo "<h3 class='text-dark text-capitalize'>La tua regione: <span style='border-bottom: 1px solid rgb(28, 28, 28);' id='reg'>".$_SESSION['regione']."</span></h3>";
        ?>
        <div class="btn-group">
          <button type="button" id="menu" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Seleziona l'auto:
          </button>
          <ul class="dropdown-menu">
            <div v-for="auto in automobili">
              <li><button class="dropdown-item" @click="this.scelta(auto)">{{auto.marca}} {{auto.modello}}</button></li>
            </div>
          </ul>
        </div>
        <div class='row' v-if="choosen != null">
          <div class="col">
            <img :src="choosen.foto" alt="" class="mostra img-fluid mt-3">
          </div>
          <div class="col">
            <table class="table table-dark table-hover mt-3 mostra">
              <thead>
                <tr>
                  <th scope='col'>
                    Hai selezioanto: {{choosen.marca}} {{choosen.modello}}
                  </th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Prezzo standard:</th>
                  <td>a partire da €{{choosen.price}}</td>
                </tr>
                <tr>
                  <th scope='row'>Preventivo sulla base degli incentivi regionali in:</th>
                  <td>{{regione}}</td>
                </tr>
                <tr>
                  <th scope='row'><button class='btn btn-success' id="cal" @click='calcola'>CALCOLA</button></th>
                  <td class='text-decoration-line-through'><span v-if="calcolato">€{{choosen.price}}</span></td>
                </tr>
                <tr>
                  <th scope='row'><span v-if="calcolato">NUOVO PREZZO: €{{newprice}},00</span></th>
                  <td><span v-if="calcolato">Risparmio: €{{sconto}},00</span></td>
                </tr>
                <tr>
                  <th scope='row'><span class='lead text-uppercase text-center' v-if="calcolato">Clicca qui sotto per ricevere il preventivo generato direttamente sulla tua mail!</span></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <form action="mail.php" method="POST" name='form' v-if='calcolato' class='text-center'>
              <input type="text" name="marca" :value='choosen.marca' style="display: none;">
              <input type="text" name="modello" :value='choosen.modello' style="display: none;">
              <input type="text" name="oldprice" :value='choosen.price' style="display: none;">
              <input type="text" name="newprice" :value='this.newprice' style="display: none;">
              <input type="text" name="sconto" :value='this.sconto' style="display: none;">
              <input type="submit" class='btn btn-success' value="RICHIEDI" id="ric">
            </form>
          </div>
        </div>
        <div class='row mt-3' style="border-bottom: solid 1px rgb(28, 28, 28);"></div>
      </div>
    <script src="../bootstrap.bundle.min.js"></script>
    <script src="./app2.js"></script>
</body>
</html>