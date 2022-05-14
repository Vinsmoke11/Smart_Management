let app = Vue.createApp({
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
                tipo: "utilitaria"
            },
            {
                id : 2,
                marca : "BMW",
                modello : "i4",
                foto: "../immagini/i4.png",
                descrizione: "Sportività e lusso nella versione elettrica della gemella di BMW serie 4.",
                posti: 4,
                autonomia: 400,
                prezzo: 50000,
                price : "50.000,00",
                tipo: "berlina"
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
                tipo: "berlina"
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
                tipo: "suv"
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
            }],
            pmin : 0,
            pmax : 500000,
            marca : '',
            carrozzeria : '',
            posti: 0,
            autonomia : 200,
        }
    },
    methods : {
        verificaCondizioni(a){
            res = true;
            if(marca != '' && marca != a.marca){
                res = false;
            }
            else if(carrozzeria != '' && carrozzeria != a.carrozzeria){
                res = false;
            }
            else if(posti != 0 && posti != a.posti){
                res = false;
            }
            else if(autonomia != 200 && autonomia < a.autonomia){
                res = false;
            }
            return res;
        }
    }
});
app.mount('#app');