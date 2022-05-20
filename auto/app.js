
app = Vue.createApp({
    e1 : '#app',
    data(){
        return{
            automobili : [{
                id : 1,
                marca : "BMW",
                modello : "i3",
                foto: "../immagini/i3.png",
                descrizione : "Comoda e agile, perfetta per spostarsi in città riducendo le emissioni.",
                posti: 4,
                autonomia: 350,
                prezzo: 30000,
                price : "30.000,00",
                tipo: "utilitaria",
                immagini : ["./daScoprire/i3/i31.jpg","./daScoprire/i3/i32.jpg","./daScoprire/i3/i33.jpg","./daScoprire/i3/i34.jpg","./daScoprire/i3/i35.jpg","./daScoprire/i3/i36.jpg"]
            },
            {
                id : 2,
                marca : "BMW",
                modello : "i4",
                foto: "../immagini/i4.png",
                descrizione: "Sportività e lusso nella versione elettrica della gemella di BMW serie 4.",
                posti: 4,
                autonomia: 400,
                prezzo: 60000,
                price : "60.000,00",
                tipo: "coupe"
            },
            {
                id : 3,
                marca : "BMW",
                modello : "iX",
                foto: "../immagini/iX.png",
                descrizione: "La comodità e lo spazio sono i punti forza di questo lussuoso E-SUV firmato BMW.",
                posti: 5,
                autonomia: 630,
                prezzo: 84000,
                price : "84.000,00",
                tipo: "suv"
            },
            {
                id : 4,
                marca : "BMW",
                modello : "i7",
                foto : "../immagini/i7.png",
                descrizione: "La berlina di rappresentanza più lussuosa di casa BMW completamente elettrica.",
                posti: 5,
                autonomia: 600,
                prezzo: 150000,
                price: "150.000,00",
                tipo: "berlina"
            },
            {
                id : 5,
                marca : "MINI",
                modello : "Full electric",
                foto : "../immagini/minise.webp",
                descrizione: "La prima auto dello storico brand inglese in versione totalmente elettrica",
                posti: 4,
                autonomia: 270,
                prezzo: 33000,
                price: "33.000,00",
                tipo: "utilitaria"
            },
            {
                id : 6,
                marca : "TESLA",
                modello : "Model S",
                foto : "../immagini/models.jpg",
                descrizione: "Berlina con prestazioni e comfort top della casa automobilistica fondata da Elon Musk.",
                posti: 5,
                autonomia: 630,
                prezzo: 105000,
                price: "105.000,00",
                tipo: "coupe"
            },
            {
                id : 7,
                marca : "TESLA",
                modello : "Model X",
                foto : "../immagini/modelx.jpg",
                descrizione: "Suv full elettrico in grado di offrire autonomie molto elevate insieme a prestazioni sportive.",
                posti: 7,
                autonomia: 570,
                prezzo: 115000,
                price: "115.000,00",
                tipo: "crossover"
            },
            {
                id : 8,
                marca : "FIAT",
                modello : "500 E",
                foto : "../immagini/fiat500.webp",
                descrizione: "Passato e futuro 100% made in italy nell'auto più iconica al mondo ora elettrica",
                posti: 4,
                autonomia: 320,
                prezzo: 27000,
                price: "27.000,00",
                tipo: "utilitaria"
            },
            {
                id : 9,
                marca : "TESLA",
                modello : "MODEL 3",
                foto : "../immagini/model3.jpg",
                descrizione: "Modello entry level di Tesla, berlina comfort e con linee sinuose",
                posti: 5,
                autonomia: 450,
                prezzo: 54000,
                price: "54.000,00",
                tipo: "Berlina"
            },
            {
                id : 10,
                marca : "TESLA",
                modello : "ROADSTER",
                foto : "../immagini/roadster.webp",
                descrizione: "La prima super car elettrica in grado di percorrere lo 0-100km/h in meno di 2 secondi.",
                posti: 2,
                autonomia: 340,
                prezzo: 120000,
                price: "120.000,00",
                tipo: "supercar"
            },
            {
                id : 11,
                marca : "AUDI",
                modello : "E-TRON GT",
                foto : "../immagini/etrongt.jpg",
                descrizione: "Come dichiarato da casa madre Audi le prestazioni e l'estetica di E-Tron GT non hanno eguali.",
                posti: 5,
                autonomia: 470,
                prezzo: 105000,
                price: "105.000,00",
                tipo: "supercar"
            },
            {
                id : 12,
                marca : "AUDI",
                modello : "E-TRON",
                foto : "../immagini/etrons.jpg",
                descrizione: "Il primo SUV Audi 100% elettrico in grado di offrire esperienze di guida mai provate prima.",
                posti: 5,
                autonomia: 450,
                prezzo: 89000,
                price: "89.000,00",
                tipo: "suv"
            },
            {
                id : 13,
                marca : "MERCEDES",
                modello : "EQA",
                foto : "../immagini/eqa.webp",
                descrizione: "La stella dalle tre punte fa il suo debutto nel mondo dell'elettrico con questo meraviglioso cross-over.",
                posti: 5,
                autonomia: 420,
                prezzo: 51000,
                price: "51.000,00",
                tipo: "crossover"
            }],
            pmin : 0,
            pmax : 500000,
            marca : '',
            carrozzeria : '',
            posti: 0,
            autonomia : 200,
            show: false,
            scopri : null,
            navbaron : true
        }
    },
    computed : {
        condizioni(){
            return this.automobili.filter(a => (a.marca == this.marca || this.marca == "")&&
                                                (a.tipo == this.carrozzeria || this.carrozzeria=="")&&
                                                (a.posti == this.posti || this.posti == 0)&&
                                                (a.autonomia >= this.autonomia)&&
                                                (a.prezzo >= this.pmin && a.prezzo <= this.pmax));
        }
    },
    methods : {
        sortPcresc(){
            return this.automobili.sort(function(a , b){return a.prezzo - b.prezzo;});
        },
        sortPdec : function(){
            return this.automobili.sort(function(a, b){return b.prezzo - a.prezzo;})
        },
        sortAut : function(){
            return this.automobili.sort(function(a, b){return b.autonomia - a.autonomia;})
        },
        sortPosti : function(){
            return this.automobili.sort(function(a, b){return a.posti - b.posti;})
        },
        discover(i){
            this.show = !this.show;
            this.scopri = this.automobili[i];
            this.navbaron = !this.navbaron
        },
        showLess(){
            this.show = !this.show;
            this.scopri = null;
            this.navbaron = !this.navbaron
        },
        imageZoom(f, index){
            let pics = document.getElementsByClassName("photo");
            for(var i = 0; i < pics.length; i++){
                if(i == index){
                    pics[i].classList.add("active");
                }else{
                    if(pics[i].classList.contains("active")){
                        pics[i].classList.remove("active")
                    }
                }
            }
            document.getElementById("frame").innerHTML = "<img src="+f+" class='img-fluid'></img>"
            document.getElementById("frame").style.height = "100% max-height";
            document.getElementById("frame").style.width = "100% max-width";
        }
    }
});
app.mount('#app');

