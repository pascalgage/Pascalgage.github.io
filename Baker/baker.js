const myBaker = {
    
    data(){
        return {
            isOpen: false
        }
    },
    
    mounted(){

    },

    computed:{

    },

    methods:{
        //on souhaite changer le text du bouton! quand clické le texte passe de OUVRIR LA BOULANGERIE à FERMER lA BOULANGERIE
        openClose(){
             this.isOpen = !this.isOpen; 
        }
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
