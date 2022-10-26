//Descrizione:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

createApp({
    data(){
        return{
            title: 'Hello Vue!',
            imgUrl: 'https://www.monterail.com/hubfs/vue-optimized.png'
        }
    }
}).mount('#app')