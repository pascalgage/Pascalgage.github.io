import { Baker } from "./boulanger.js";
import{ Bakery } from "./boulangerie.js";

const myBaker = {
    
    data(){

        return {
            bak:new Baker('./boulanger.js'),
            bakry:new Bakery('./boulangerie.js'),
            isOpen: false,
            
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
             
        },
        start(){
            setInterval(this.increase,1000);
            
        },
        increase(){
            this.bakry.gold++;
        }
        
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
