const app = Vue.createApp ({
    data() {
        return{
            notizie:[{
                titolo: "Fiat 500 elettrica, la prova dei consumi reali",
                data: "16/02/2022",
                descrizione: "Veloce, raffinata e tecnologica, la Fiat 500 elettrica è un'icona di stile. Abitabilità e bagagliaio migliorabili, autonomia di 200 km.",
                paragrafo1: "Eccola finalmente alle prese con la prova consumi reali. La Fiat 500 elettrica è l'auto a batteria più venduta in Italia e una delle più vendute in Europa e anche per questo successo merita un esame approfondito dei consumi e dell'autonomia reale. La piccola e iconica torinese registra nel tragitto classico Roma-Forlì (con temperature invernali) un consumo medio di 15,9 kWh/100 km che equivalgono a una percorrenza di 6,29 km/kWh e a una spesa per la ricarica domestica di 12,93 euro. Affidandosi invece alla rete di stazioni di ricarica ad alta potenza HPC come Ionity il prezzo dello stesso viaggio sale a 45,22 euro. L'autonomia su questo percorso è di circa 230 km.",
                titolo2: "Al centro della classifica consumi",
                paragrafo2: "Messa a confronto con le altre auto elettriche presenti nella classifica consumi reali, la Fiat 500 elettrica da 118 CV si posiziona attorno alla metà della graduatoria, a pari merito con la Kia e-Soul e davanti a Opel Corsa-e appaiata a Volkswagen ID.3 (17,2 kWh/100 km - 5,8 km/kWh), solo per rimanere tra le EV compatte.",
                foto: "http://www.ferrajoliauto.it/wpa/uploads/ecommerce/1000/48/1609350138.jpg",
                alt: "Fiat 500e",
                paragrafo3: "Meglio della nuova Fiat 500 Elettrica hanno invece fatto la Tesla Model 3 Standard Range Plus nella stessa stagione invernale (14,7 kWh/100 km - 6,8 km/kWh), la Nissan Leaf 40 kWh (13,1 kWh/100 km - 7,6 km/kWh), la Hyundai Kona Electric 64 kWh (12,0 kWh/100 km - 8,3 km/kWh) e la regina Renault Zoe Intens R135 provata in estate e capace di toccare gli 11,0 kWh/100 km (9,0 km/kWh).",
                titolo3:"Qualità, comfort, stile iconico e tecnologia ...in piccolo",
                paragrafo4:"La Fiat 500 elettrica in prova è una ricca versione Icon + con alcuni optional come la vernice metallizzata tristrato, i cerchi in lega da 17\" e i pacchetti Magic Eyes, Style e Comfort. Così accessoriata la 500 a batteria, che è tutta nuova rispetto alla 500 a benzina ed è cresciuta leggermente nelle misure, arriva a costare 37.400 euro, salvo promozioni. Anche l'abitabilità interna è un po' migliorata, mentre il bagagliaio e lo spazio per i passeggeri posteriori restano limitati. I materiali, il design e le finiture sia esterne che interne sono di ottimo livello e riflettono uno stile iconico e tecnologico al tempo stesso. Connettività, infotainment e ausili alla guida sono evoluti e solo il cruise control adattivo risulta difficile da utilizzare perché forzatamente legato ai limiti di velocità vigenti.Bene il comfort, la tenuta di strada e le prestazioni sempre brillanti, oltre alla silenziosità di marcia, la facilità di manovra e il piacere di guida.",
                autore: "Fabio Gemelli",
                sito: "motor1.com",
                refarticolo: "https://it.motor1.com/reviews/567366/fiat-500-elettrica-prova-consumi/"
            },
            {
                titolo: "Batterie: da Mercedes a Tesla, ecco dove sta andando l'innovazione",
                data: "23/05/2022",
                paragrafo1:"I due principali freni alla mobilità elettrica, ormai è noto a tutti, sono l'infrastruttura e le batterie. Il primo aspetto vede i costruttori impegnati nella creazione di reti per la fornitura di servizi di ricarica, anche in partnership con altre realtà magari del settore energetico, ma non pochi i fattori che non dipendono dal settore automobilistico, tra cui la disponibilità di energia pulita o i tempi dei permessi per la costruzione di stazioni e l'installazione delle colonnine. Il secondo aspetto, invece, è legato alle iniziative nel campo della ricerca e sviluppo. A tal proposito, le Case stanno investendo risorse crescenti, non solo su nuovi elementi chimici per ridurre la dipendenza da materie prime quali il litio o il cobalto: per migliorare l’autonomia e i tempi di ricarica, si sta infatti lavorando sulla configurazione delle celle e sulla densità dei materiali utilizzati. Lo sta facendo, per esempio, Mercedes-Benz, che in attesa della tecnologia dello stato solido (soluzioni commerciabili non sono previste prima del 2025) ha annunciato nuovi sviluppi della sua collaborazione con la statunitense Sila.",
                titolo2: "Il caso Mercedes",
                paragrafo2: "In sostanza, con la prossima generazione a batteria della Classe G sarà disponibile, come optional, un pacco batterie caratterizzato da anodi ad alto contenuto non più di carbonio, bensì di silicio. In tal modo, secondo la Mercedes- Benz, sarà possibile aumentare la densità energetica degli accumulatori “senza compromettere la sicurezza o altri parametri prestazionali\".",
                foto: "https://mbenz.it/foto/2021/08/Mercedes-GROB-partnership-batterie-2-scaled.jpg",
                alt: "Un piano batterie in produzione nello stabilimento Mercedes di Vance,Al",
                paragrafo3: "Nello specifico, rispetto alle celle oggi disponibili sul mercato, la nuova tecnologia consente di incrementare la densità del 20-40% superando gli 800 Wh/l (wattora per litro) a livello di singola cella. Dunque, sarà possibile immagazzinare più energia e accrescere “in modo significativo” l’autonomia dei veicoli elettrici. Attenzione, però. Diverse altre aziende, startup o laboratori universitari hanno annunciato simili sviluppi, ma nel caso della Mercedes è la prima volta che viene annunciato un salto tecnologico radicale in tempi stretti: la nuova Classe G, infatti, sarà lanciata entro la fine dell’anno.",
                titolo3: "Il record di Lucid",
                paragrafo4: "D’altro canto, un assaggio del futuro la Mercedes lo ha dato già con la Vision EQXX, un laboratorio su strada accreditato di un’autonomia di oltre mille chilometri, un quarto in più rispetto ai 780 della EQS di serie. Finora, però, il record assoluto è stato raggiunto dalla Lucid Air, in grado di percorrere, stando a quanto certificato dall’agenzia americana Epa, 832 chilometri grazie a una serie di soluzioni innovative. L’azienda guidata da Peter Rawlinson, tra l’altro ex ingegnere capo della Tesla, ha sviluppato una tecnologia proprietaria, denominata Lucid Space Concept e basata sostanzialmente sulla miniaturizzazione delle componenti cruciali delle batterie: in tal modo, la Lucid ha evitato di aumentare le dimensioni dei pacchi, limitando la crescita della capacità ad appena 113 kWh, di poco superiore agli accumulatori della Tesla Model S Long Range Plus. Quest’ultima è accreditata di un’autonomia di oltre 650 chilometri, ma Elon Musk non pare intenzionato a entrare in competizione sulle percorrenze massime, per quanto la sua Tesla abbia tecnologie e competenze per farlo (in fin dei conti, la sua leadership tecnologica si basa su una suite di software appositamente dedicati alla gestione delle batterie).",
                autore: "Rosario Murgida",
                sito: "quattroruote.it",
                refarticolo: "https://www.quattroruote.it/news/tecnologia/2022/05/23/batterie_da_mercedes_a_tesla_tra_innovazione_e_veri_obiettivi_.html",
            },
            {
                titolo:"Incentivi auto 2022: le cifre (fino a 5.000€) per elettriche, ibride, benzina e diesel",
                descrizione:"Dopo settimane di attesa gli incentivi auto 2022 sono realtà. Essi permetteranno di acquistare un’auto nuova elettrica, ibrida, benzina o diesel con uno sconto sul prezzo. Questo permetterà di avere accesso un taglio di prezzo che può arrivare fino a 5.000 euro per le vetture meno inquinanti. In questo articolo troverete tutte le informazioni che servono per capire come muoversi per accedere ai nuovi incentivi per l’auto nuova.",
                titolo2:"Le date per gli incentivi auto 2022",
                paragrafo2:"Al contrario di quanto visto negli anni passati, dal 2022 gli incentivi diventeranno strutturali (salvo modifiche eventuali possibili nei prossimi anni) con termine al 2030. Questo significa che saranno disponibili per il pubblico 700 milioni di euro per il 2022 ed 1 miliardo di euro l’anno dal 2023 al 2030. Questa impostazione permetterebbe di avere una tranquillità superiore rispetto a quanto visto nelle precedenti tornate, durante le quali gli incentivi venivano erogati a singhiozzo con nessuna stabilità per un mercato già in crisi.",
                foto:"https://cdn.motor1.com/images/mgl/KPz1A/s3/tesla-model-3-charging.jpg",
                alt:"Una Tesla in fase di ricarica",
                paragrafo3:"Attualmente non si conosce la data di inizio dell’erogazione degli incentivi, che prima vedranno l’iter giuridico proseguire con l’inserimento in Gazzetta Ufficiale. Dopodiché sarà possibile prenotare l’incentivo auto 2022 che spetta ad ogni acquirente purché Persona fisica.",
                sito:"drivek.it",
                refarticolo:"https://www.drivek.it/guide/incentivi-auto-2022-elettriche-ibride-benzina-diesel/",
            },
            {
                titolo:"Fisker Ronin, l'elettrica cabrio da 965 km di autonomia (dichiarata)",
                data:"25/05/2022",
                descrizione:"Fisker ha annunciato  il progetto della GT quattro-posti Ronin, oltre al via alla produzione della compatta Pear. Per la prima, in fase di sviluppo nella nuova struttura “Magic Works” del Regno Unito, l’autonomia mostruosa dichiarata è di quasi mille km (600 miglia). La seconda arriverà sul mercato statunitense con meno di 30 mila dollari",
                paragrafo:"Una decappottabile quattro posti completamente elettrica, che promette un’autonomia mostruosa di 965 km (600 miglia). L’Ev di Fisker si chiama Ronin e presto avrà la sua realizzazione, dopo che lo scorso 5 maggio, sul profilo ufficiale della casa Usa, ne è stato annunciato il progetto. La vettura sarà a quattro porte. Al momento, però, non si sa ancora nulla riguardo alla potenza, seppur la società abbia rivelato che il modello green avrà un powertrain di tre motori e sarà in grado di fare gli 0-100 km/h in meno di due secondi.",
                titolo2:"la Ronin sarà svelata ad Agosto",
                paragrafo2:"Il dato sull’autonomia è quello che impressiona di più, e in attesa di avere conferma su tale valore, nel suo tweet Fisker ha parlato di “GT progettata per offrire l’autonomia più lunga al mondo, per un veicolo elettrico di serie al massimo delle prestazioni”. La Ronin verrà svelata ad agosto 2023, ed entrerà in produzione nella seconda metà del 2024. È il terzo progetto dopo il Suv Ocean e la compatta Pear, legata alla mobilità urbana.",
                foto:"https://cdn.motor1.com/images/mgl/6ZZz27/s1/henrik-fisker-ronin-teaser.jpg",
                alt:"La Fisker Ronin è una cabriolet quattro posti e quattro porte",
                paragrafo3:"La vettura è in fase di sviluppo nella nuova struttura “Magic Works” nel Regno Unito, che è gestita da Dave King, ex capo dei veicoli speciali di Aston Martin. Tra le sue caratteristiche dell'auto ci sono l’impiego di materiali leggeri e sostenibili, l’integrazione della batteria nel pianale della vettura, un anteriore lungo (con un parabrezza fortemente inclinato) e un posteriore più ridotto. “L’obiettivo è quello di raggiungere l'autonomia più lunga al mondo per un veicolo elettrico di serie, combinato con livelli di prestazioni estremamente elevati — ha commentato il Ceo, Henrik Fisker — Il progetto Ronin rappresenterà una vetrina per le nostre capacità interne di ingegneria, powertrain e software”.",
                autore:"Lorenzo Pastuglia",
                sito:"gazzetta.it",
                refarticolo:"https://www.gazzetta.it/motori/mobilita-sostenibile/auto-elettriche/25-05-2022/auto-elettriche-fisker-ronin-pear.shtml",
            },
            {
                titolo:"Hyundai sfida Tesla: costruirà una fabbrica di auto elettriche da 5,5 miliardi negli Stati Uniti",
                data:"23/05/2022",
                descrizione:"Hyundai Motor Group investirà 5,54 miliardi di dollari per costruire la sua prima fabbrica di veicoli elettrici e batterie negli Stati Uniti. Si aggiungerà così a General Motors, Ford, Volkswagen e altri giganti dell’auto sulla lista di chi vuole scalzare Tesla dal trono di prima azienda di veicoli elettrici al mondo.",
                paragrafo:"La casa automobilistica di Seul prevede di costruire l’impianto su un sito di 2.923 acri nella contea di Bryan, nello stato della Georgia, vicino alla città portuale di Savannah. La produzione dovrebbe iniziare nella prima metà del 2025. La struttura potrà produrre 300mila veicoli all’anno e dovrebbe impiegare, a regime, più di ottomila persone.",
                paragrafo2:"“Gli Stati Uniti hanno sempre avuto un ruolo importante nella strategia globale del gruppo”, ha dichiarato Euisun Chung, presidente esecutivo di Hyundai. “Siamo felici di collaborare con lo stato della Georgia per raggiungere un obiettivo condiviso: quello di diffondere la mobilità elettrica e la sostenibilità negli Stati Uniti”. L’impianto sarà il primo stabilimento Hyundai in Nord America dedicato per intero ai veicoli elettrici.",
                foto:"https://pictures.dealer.com/s/southbayhyundaica/0260/f255bf17f0db72e6aa8b2e6d8cd89fd4x.jpg",
                alt:"La concessionaria Hyundai di Torrence, CA",
                paragrafo3:"L’investimento multimiliardario di Hyundai negli Stati Uniti arriva dopo l’annuncio di progetti simili da parte di Gm e Ford. Anche le due case americane spenderanno miliardi di dollari per costruire fabbriche nuove e più grandi dedicate alla produzione di veicoli elettrici, spinte anche dalla pressione per ridurre le emissioni dovute ad auto e camion, dannose per il clima. Hyundai ha fissato l’obiettivo di essere tra i tre marchi di veicoli elettrici più venduti negli Stati Uniti entro il 2026 e punta a vendere 3,2 milioni di mezzi alimentati a batteria all’anno entro il 2030. Tesla ha venduto circa un milione di veicoli elettrici nel 2021, pari a circa il 75% di tutto il mercato.",
                paragrafo4:"L’annuncio di Hyundai segue anche quello di Rivian, che a fine 2021 ha dichiarato di volere costruire veicoli elettrici in Georgia, in un nuovo stabilimento da cinque miliardi di dollari nelle contee di Morgan e Walton, a est di Atlanta.",
                autore:"Alan Ohnsman",
                sito:"forbes.it",
                refarticolo:"https://forbes.it/2022/05/23/hyundai-55-miliardi-fabbrica-auto-elettriche-usa/",
            },
            {
                titolo:"Il boom delle auto elettriche negli Stati Uniti",
                data:"19/05/2022",
                descrizione:"Nei primi tre mesi del 2022 le immatricolazioni hanno registrato un +60%. E la Casa Bianca ha annunciato un piano da 7,5 miliardi di dollari in 5 anni per creare una rete nazionale di colonnine di ricarica",
                paragrafo:"AGI - Negli Stati Uniti le immatricolazioni di nuovi veicoli elettrici sono aumentate del 60% nei primi tre mesi del 2022, anche se le immatricolazioni di nuove auto sono diminuite nel complesso del 18%. I veicoli elettrici rappresentano ora il 4,6% di tutte le autovetture vendute negli Stati Uniti. Con 113882 veicoli immatricolati (il 59% del totale), Tesla si prende i primi tre posti della top ten (e anche un settimo posto), con la Tesla Model Y a quota 52.051 immatricolazioni, che stacca la Ford Mustang Mach-E, al quarto posto con 6.957 vetture registrate. Sono alcuni dei dati emersi Experian, multinazionale che si occupa di analisi e informazioni creditizie. Dai dati è emerso che tra gennaio e marzo 2022, i consumatori statunitensi hanno registrato 158.689 veicoli elettrici. Nel 2020 erano state immatricolate 252.548 auto elettriche (+11,1% rispetto al 2019) con quota complessiva del mercato dell'1,8% (1,4% nel 2019). Nonostante i veicoli elettrici  rappresentino una nicchia piccola del mercato dei nuovi veicoli, si stanno gradualmente spostando verso il diventare un prodotto mainstream sulla base degli ultimi dati del settore.",
                titolo2:"Crescono gli investimenti di venture capita",
                paragrafo2:"Non solo crescono le immatricolazioni di auto elettriche. È un po’ tutto il settore che cresce. Negli ultimi cinque anni, secondo un'analisi di TechCrunch e PitchBook, solo nel settore delle batterie i venture capital hanno investito 42 miliardi di dollari per un totale di quasi 1.700 deal, il 75% dei quali è avvenuto solo negli ultimi due anni.",
                foto:"https://www.financialounge.com/wp-content/uploads/2022/04/tesla-1.jpeg",
                alt:"La Tesla è la casa automobilistica che ha venduto più auto negli Stati Uniti",
                paragrafo3:"Secondo lo studio, cinque anni fa i fondi di venture capital chiudevano fra i 50 e i 60 investimenti a trimestre, per un valore totale di poche centinaia di milioni di dollari. Le cose hanno iniziato a cambiare verso la fine del 2020. I governi di tutto il mondo (Il presidente degli Stati Uniti all'inizio di quest'anno ha fissato l'obiettivo di far sì che i veicoli a emissioni zero rappresentino fino al 50% del mercato statunitense entro il 2030) hanno iniziato a fissare date in cui avrebbero stoppato la circolazione dei veicoli a combustibile fossile, le batterie poi sono considerate un investimento ad alto rischio e ad alto rendimento e i vc sono abituati a esplorare e valutare scommesse rischiose basate sulla tecnologia.",
                titolo3:"Nuovi modelli in arrivo sul mercato Usa",
                paragrafo4:"Che il mercato sia sempre meno di nicchia emerge anche dal numero di modelli crescenti presentato dalle case automobilistiche. Laddove c'erano meno di 20 modelli, definiti a lungo raggio (quelli cioè consentivano almeno 300 chilometri con una ricarica) secondo le previsioni potrebbero diventare 60 entro dicembre 2022. Per il presidente e CEO di General Motors Mary Barra proprio il 2022 è considerato l’anno “di svolta\" per i veicoli elettrici.",
                autore:"Alessio Nisi",
                sito:"agi.it",
                refarticolo:"https://www.agi.it/economia/news/2022-05-19/auto-elettriche-boom-immatricolazioni-stati-uniti-16778609/",
            }],
            questanotizia: null,
            showModal: false,
 
        }
    },
    methods: {
        notiziagiusta(i){
            this.questanotizia = this.notizie[i];
        },
        cambianotizia(i){
            localStorage.setItem("notiziadacaricare",i);
            console.log("notizia da caricare =",localStorage.getItem("notiziadacaricare"));
            window.location.href='/news/notizia.html';
        },
        openModal(){
            console.log("click");
            this.showModal = !this.showModal;
            console.log(showModal);
        },
        closeModal() {
            this.showModal = !this.showModal;
            console.log(showModal);
        }

    },
    beforeMount(){
        this.notiziagiusta(localStorage.getItem("notiziadacaricare"));
        console.log("notizia da caricare =",localStorage.getItem("notiziadacaricare"));
    }
});
app.mount('#app');