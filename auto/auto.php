<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <title>Le nostre auto</title>
    <script src="../bootstrap.min.js" type="application/javascript"></script>
    <script src="https://unpkg.com/vue@3"></script>
</head>
<body>
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <img src="../immagini/logo.png" alt="" height="45px">
          <a class="navbar-brand" href="#">Green Vehicle Demand</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link" href="../index.html">Home</a>
              <a class="nav-link active" href="#" aria-current="page">Le nostre auto</a>
              <a class="nav-link" href="../incentivi/incentivi.html">Incentivi</a>
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
      <!--Main-->
    <section style="overflow: hidden;" id="app">
      <div class="row">
              <!--Menu ricerca-->
              <div class="col col-md-4 col-xl-2 bg-light collapse-horizontal navbar-expand-lg" style="height: 100vmax max-content; min-height: 100%;" v-if="navbaron">
                  <div class="container pt-3">
                      <span class="lead">Filtra per:</span>
                      <form class="mt-3">
                        <div class="accordion" id="accordionPrice">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <label for="headingOne" class="">Prezzo:</label>
                                </button>
                              </h2>
                              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                  <input type="number" id="minPrezzo" class="form-control form-control-sm" placeholder="Prezzo minimo" v-model="pmin">
                                  <input type="number" id="maxPrezzo" class="form-control form-control-sm" placeholder="Prezzo massimo" v-model="pmax" min="5000">
                                </div>
                              </div>
                            </div>
                        </div>
                        <label for="selectMarca" class="mt-4 ms-3">Marca:</label>
                        <select class="form-select" id="selectMarca" v-model="marca">
                            <option value="" selected>Qualsiasi</option>
                            <option value="AUDI">Audi</option>
                            <option value="BMW">Bmw</option>
                            <option value="FIAT">Fiat</option>
                            <option value="MINI">Mini</option>
                            <option value="TESLA">Tesla</option>
                            <option value="MERCEDES">Mercedes</option>
                        </select>
                        <label for="selectCarrozzeria" class="mt-4 ms-3">Carrozzeria:</label>
                        <select class="form-select" id="selectCarrozzeria" v-model="carrozzeria">
                            <option value="" selected>Seleziona tipologia</option>
                            <option value="utilitaria">Utilitaria</option>
                            <option value="berlina">Berlina</option>
                            <option value="supercar">Super Car</option>
                            <option value="suv">SUV</option>
                            <option value="crossover">Crossover</option>
                            <option value="coupe">Coupé</option>
                        </select>
                        <label for="nPosti" class="mt-4 ms-3">Numero di posti:</label>
                        <div id="nPosti" class="form-check">
                            <input class="form-check-input" type="radio" id="2posti" v-model="posti" value="0">
                            <label class="form-check-label">Qualsiasi</label><br>
                            <input class="form-check-input" type="radio" id="2posti" v-model="posti" value="2">
                            <label class="form-check-label">2 posti</label><br>
                            <input class="form-check-input" type="radio" id="2posti" v-model="posti" value="4">
                            <label class="form-check-label">4 posti</label><br>
                            <input class="form-check-input" type="radio" id="2posti" v-model="posti" value="5">
                            <label class="form-check-label">5 posti</label><br>
                            <input class="form-check-input" type="radio" id="2posti" v-model="posti" value="7">
                            <label class="form-check-label">7 posti</label><br>
                        </div>
                        <label for="customRange3" class="form-label mt-4 ms-3">Autonomia minima (km):</label>
                        <input type="range" class="form-range" min="200" max="700" step="50" id="autonomiaMin" value="700" v-model="autonomia">
                      </form>
                      <p>Valore selezionato: {{autonomia}} km</p>
                      <button class="btn btn-success btn-sm m-2" @click="this.navbaron = false">Chiudi</button>
                  </div>
              </div>
              <!--Menu auto-->
              <div class="col-md mainMenuBackground">
                <div class="row justify-content-md-start justify-content-center">
                  <button class="btn btn-success btn-sm m-2 ms-md-4 col-10 col-md-1" @click="this.navbaron = true" v-if="!navbaron && !show">Filtri</button>
                  <div class="btn-toolbar justify-content-center justify-content-lg-end col" role="toolbar" aria-label="Toolbar with button groups" v-if="!show">
                    <label class="lead mt-2">Ordina per: </label>
                    <div class="btn-group m-2" role="group" aria-label="First group">
                      <button type="button" class="btn btn-success" @click="sortPcresc">Prezzo crescente</button>
                      <button type="button" class="btn btn-success" @click="sortPdec">Prezzo decrescente</button>
                      <button type="button" class="btn btn-success" @click="sortPosti">Posti</button>
                      <button type="button" class="btn btn-success" @click="sortAut">Autonomia</button>
                    </div>
                </div>
                <div class="row">
                  <div v-if="!condizioni.length">
                    <div class="container-md m-3">
                      <div class="alert alert-danger" role="alert">
                        Siamo spiacenti... 
                        <div>
                          <a href="./auto.php" class="alert-link">Indietro</a>
                        </div>
                      </div>
                      <p class="lead ms-3"><strong>Per ora non sono presenti nel nostro sito auto corrispondenti ai criteri inseriti:</p></strong>
                      <li class="lead mt-3 ms-3" v-if="this.marca != ''">{{marca}}</li>
                      <li class="lead mt-3 ms-3" v-if="this.carrozzeria != ''">{{carrozzeria}}</li>
                      <li class="lead mt-3 ms-3" v-if="this.posti != 0">{{posti}} posti</li>
                      <li class="lead mt-3 ms-3" v-if="autonomia != 200">{{autonomia}} km di autonomia minima</li>
                      <li class="lead mt-3 ms-3">da €{{pmin}},00 a €{{pmax}},00</li>
                    </div>
                  </div>
                  <div class="col m-3" v-for="(auto, index) in condizioni":key="auto.id" v-if="!show">
                      <div class="card mx-auto h-100" style="width: 18rem;">
                            <img v-bind:src="auto.foto" class="card-img-top">
                            <div class="card-body">
                            <h5 class="card-title">{{auto.marca}} {{auto.modello}}</h5>
                            <p class="card-text">{{auto.descrizione}}</p>
                            </div>
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">a partire da: €{{auto.price}}</li>
                            </ul>
                            <div class="card-body">
                            <a class="btn btn-success btn-md" href="#" class="card-link" @click="discover(index)">Scopri di più...</a>
                            </div>
                      </div>
                  </div>
                  <div v-else="">
                    <p class="lead mt-3 ms-2 text-sm">Scopri di più su {{scopri.marca}} {{scopri.modello}}:</p><hr>
                    <div class="container">
                      <div class="row">
                          <div class="col-lg-7 mb-3">
                            <div class="row row-cols-6 mb-2"  style="border-radius: 10px;">
                              <div style="padding: 0;" class="card-group" v-for="(foto, index) in scopri.immagini" id="smallPic">
                                <img :src="foto" alt="" class="card-img-top photo" style="height: 80px;" @click="imageZoom(foto, index)">
                              </div>
                            </div>
                            <div id="frame">
                              <img :src="scopri.immagini[0]" style="width: 100%;">
                            </div>
                          </div>
                          <div class="col-lg-3 mt-4">
                            <ul>
                              <h4>Scheda tecnica:</h4>
                              <li>Marca: <span class="lead">{{scopri.marca}}</span></li>
                              <li>Modello: <span class="lead">{{scopri.modello}}</span></li>
                              <li>Tipologia: <span class="lead">{{scopri.tipo}}</span></li>
                              <li>Prezzo a partire da: €<span class="lead">{{scopri.price}}</span></li>
                              <li>Autonomia: <span class="lead">{{scopri.autonomia}} km</span></li>
                              <li>Numero di posti: <span class="lead">{{scopri.posti}}</span></li>
                              <li>Potenza: <span class="lead">{{scopri.potenza}}</span></li>
                              <li>Performance: <span class="lead">{{scopri.performance}}</span></li>
                              <li>Dimensioni: <span class="lead">{{scopri.dimensioni}} (cm)</span></li>
                              <li>Consumo medio: <span class="lead">{{scopri.consumo}}</span></li>
                              <li>Peso in ordine di marcia: <span class="lead">{{scopri.peso}} kg</span></li>
                            </ul>
                          </div>
                          <p class="lead text-center mt-2">"{{scopri.descrizione}}"</p>
                      </div>
                    </div><hr>
                    <div class="row">
                      <div class="col">
                        <button class="btn btn-success m-2" @click="showLess">Mostra meno</button>
                      </div>
                      <div class="container-fluid text-end lead col">
                        <?php
                          if($_SESSION['logged']){
                            echo "<a href='./preventivo.php' class='btn btn-outline-success btn-md'>Clicca qui</a> per scoprire il tuo preventivo personalizzato.";
                          }
                          else{
                            echo "<a href='../personale/index.html' class='btn btn-outline-success btn-md'>Clicca qui</a> per accedere al tuo profilo.". $_SESSION['logged'];
                          }
                        ?>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
    </section>
    <div class="container p-3">
      <div class="row">
        <div class="text-left text-md-start">
          <span class="copyright">Copyright &copy; Progetto Linguaggie e tecnologie per il web 2022 Pilla-Pascucci-Cutroni</span>
      </div>
    </div>
    <script src="app.js" type="application/javascript"></script>
</body>
</html>