let app2 = Vue.createApp({
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
                prezzo: 40000,
                price : "40.000,00",
                tipo: "utilitaria",
                immagini : ["./daScoprire/i3/i31.jpg","./daScoprire/i3/i32.jpg","./daScoprire/i3/i33.jpg","./daScoprire/i3/i34.jpg","./daScoprire/i3/i35.jpg","./daScoprire/i3/i36.jpg"],
                potenza: "170cv",
                performance: "V.max: 150km/h, 0-100km/h: 7,2 sec",
                dimensioni: "4.00 / 1.79 / 1.59",
                consumo: "16,5 kwh/100km",
                peso: 1365

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
                tipo: "coupe",
                immagini : ["./daScoprire/i4/i41.jpg","./daScoprire/i4/i42.webp","./daScoprire/i4/i43.webp","./daScoprire/i4/i44.jpg","./daScoprire/i4/i45.jpg","./daScoprire/i4/i46.jpg"],
                potenza: "340cv",
                performance: "V.max: 190km/h, 0-100km/h: 5,7 sec",
                dimensioni: "478 / 185 / 145",
                consumo: "-",
                peso: 2125
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
                tipo: "suv",
                immagini : ["./daScoprire/ix/ix1.webp","./daScoprire/ix/ix2.jpg","./daScoprire/ix/ix3.jpg","./daScoprire/ix/ix4.jpg","./daScoprire/ix/ix5.png","./daScoprire/ix/ix6.jpg"],
                potenza: "326cv",
                performance: "V.max: 200km/h, 0-100km/h: 6,1 sec",
                dimensioni: "495 / 197 / 170",
                consumo: "19,6 kwh/100km",
                peso: 2440
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
                tipo: "berlina",
                immagini : ["./daScoprire/i7/i71.jpg","./daScoprire/i7/i72.jpg","./daScoprire/i7/i73.jpg","./daScoprire/i7/i74.jpg","./daScoprire/i7/i75.jpg","./daScoprire/i7/i76.jpg"],
                potenza: "544cv",
                performance: "V.max: 240km/h, 0-100km/h: 4,7 sec",
                dimensioni: "539 / 195 / 154",
                consumo: "18,5 kwh/100km",
                peso: 2715
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
                tipo: "utilitaria",
                immagini : ["./daScoprire/m1/m1.jpg","./daScoprire/m1/m2.jpg","./daScoprire/m1/m3.jpg","./daScoprire/m1/m4.jpg","./daScoprire/m1/m5.jpg","./daScoprire/m1/m6.jpg"],
                potenza: "184cv",
                performance: "V.max: 150km/h, 0-100km/h: 7,3 sec",
                dimensioni: "385 / 173 / 143",
                consumo: "15,2 kwh/100km",
                peso: 1365
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
                tipo: "coupe",
                immagini : ["./daScoprire/ts/ts1.jpg","./daScoprire/ts/ts2.jpg","./daScoprire/ts/ts3.jpg","./daScoprire/ts/ts4.jpg","./daScoprire/ts/ts5.jpg","./daScoprire/ts/ts6.jpg"],
                potenza: "670cv",
                performance: "V.max: 250km/h, 0-100km/h: 3,2 sec",
                dimensioni: "498 / 196 / 145",
                consumo: "18,1 kwh/100km",
                peso: 2069
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
                tipo: "crossover",
                immagini : ["./daScoprire/tx/tx1.jpg","./daScoprire/tx/tx2.jpg","./daScoprire/tx/tx3.jpg","./daScoprire/tx/tx4.jpg","./daScoprire/tx/tx5.jpg","./daScoprire/tx/tx6.jpg"],
                potenza: "670cv",
                performance: "V.max: 250km/h, 0-100km/h: 3,7 sec",
                dimensioni: "503 / 198 / 168",
                consumo: "-",
                peso: 2351
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
                tipo: "utilitaria",
                potenza: "118cv",
                immagini : ["./daScoprire/500/5001.jpg","./daScoprire/500/5002.jpg","./daScoprire/500/5003.jpg","./daScoprire/500/5004.jpg","./daScoprire/500/5005.jpg","./daScoprire/500/5006.jpg"],
                performance: "V.max: 150km/h, 0-100km/h: 8,2 sec",
                dimensioni: "363 / 168 / 138",
                consumo: "15,9 kwh/100km",
                peso: 1290
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
                tipo: "Berlina",
                immagini : ["./daScoprire/t3/t3.jpg","./daScoprire/t3/t32.jpg","./daScoprire/t3/t33.jpg","./daScoprire/t3/t34.jpg","./daScoprire/t3/t35.jpg","./daScoprire/t3/t36.jpg"],
                potenza: "283cv",
                performance: "V.max: 150km/h, 0-100km/h: 6,1 sec",
                dimensioni: "469 /185 /144",
                consumo: "14,7 kwh/100km",
                peso: 1847
            },
            {
                id : 10,
                marca : "TESLA",
                modello : "ROADSTER",
                foto : "../immagini/roadster.webp",
                descrizione: "La prima super car elettrica in grado di percorrere lo 0-100km/h in meno di 2,5 secondi.",
                posti: 2,
                autonomia: 1000,
                prezzo: 250000,
                price: "250.000,00",
                tipo: "supercar",
                immagini : ["./daScoprire/tr/tr1.jpg","./daScoprire/tr/tr2.jpg","./daScoprire/tr/tr3.jpg","./daScoprire/tr/tr4.jpeg","./daScoprire/tr/tr5.jpg","./daScoprire/tr/tr6.jpg"],
                potenza: "?",
                performance: "V.max: 400km/h, 0-100km/h: 2,1 sec",
                dimensioni: "394 / 173 / 114",
                consumo: "-",
                peso: 1235
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
                tipo: "supercar",
                immagini : ["./daScoprire/gt/gt1.jpg","./daScoprire/gt/gt2.jpg","./daScoprire/gt/gt3.jpg","./daScoprire/gt/gt4.jpg","./daScoprire/gt/gt5.jpg","./daScoprire/gt/gt6.jpg"],
                potenza: "530cv",
                performance: "V.max: 250km/h, 0-100km/h: 4,1 sec",
                dimensioni: "499 / 196 / 141",
                consumo: "20,5 kwh/100km",
                peso: 2345
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
                tipo: "suv",
                immagini : ["./daScoprire/et/et1.jpg","./daScoprire/et/et2.jpg","./daScoprire/et/et3.jpg","./daScoprire/et/et4.jpg","./daScoprire/et/et5.jpg","./daScoprire/et/et6.jpg"],
                potenza: "408cv",
                performance: "V.max: 200km/h, 0-100km/h: 5,7 sec",
                dimensioni: "490 / 193 / 163",
                consumo: "22,4 kwh/100km",
                peso: 2490
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
                tipo: "crossover",
                immagini : ["./daScoprire/eqa/eqa1.jpg","./daScoprire/eqa/eqa2.jpg","./daScoprire/eqa/eqa3.jpg","./daScoprire/eqa/eqa4.jpeg","./daScoprire/eqa/eqa5.jpg","./daScoprire/eqa/eqa6.jpg"],
                potenza: "190cv",
                performance: "V.max: 160km/h, 0-100km/h: 8,9 sec",
                dimensioni: "446 / 183 / 185",
                consumo: "17,7 kwh/100km",
                peso: 2080
            }],
            choosen : null,
            calcolato : false,
            regione : null,
            sconto : 0,
            newprice : null,
            statale : null
        }
    },
    methods: {
        scelta(a){
            this.choosen = a;
            this.calcolato = false;
            this.sconto = null;
            this.statale = null;
            document.getElementById("menu").innerHTML = "Modifica scelta:";
            this.regione = document.getElementById('reg').innerHTML;
        },
        calcola(){
            this.calcolato = true;
            if(this.regione != null){
                this.sconto = this.choosen.prezzo * 10 / 100;
                if(this.sconto > 8000){
                    this.sconto = 8000;
                }
            }
            if(this.choosen.prezzo <= 42500){
                this.statale = 3000;
                this.newprice = this.choosen.prezzo - this.sconto - this.statale;
                this.sconto += this.statale;
            }
            else{
                this.newprice = this.choosen.prezzo - this.sconto;
            }
            return this.newprice
        }
    }
    
});
app2.mount("#app2");