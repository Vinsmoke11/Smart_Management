let i3 = auto;
alert(i3)
let app = Vue.createApp({
    e1 : '#app',
    data(){
        return{
            prezzo : 0,
            marca : '',
            carrozzeria: '',
            posti : [],
            autonomia : 100
        }
    }
});
app.mount('#app');