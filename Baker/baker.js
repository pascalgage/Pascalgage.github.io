import { Baker } from "./boulanger.js";
import{ Bakery } from "./boulangerie.js";

const myBaker = {
    
    data(){

        return {
            bak:new Baker('./boulanger.js'),
            bakry:new Bakery('./boulangerie.js'),
            isOpen: false
            
        }
    },
    
    mounted(){
        if(this.isOpen){
            setInterval(this.produceBaguette,1000);
            setInterval(this.increase,1000);
        }
        console.log(this.isOpen);
    },

    computed:{
        
    },

    methods:{
        //on souhaite changer le text du bouton! quand clické le texte passe de OUVRIR LA BOULANGERIE à FERMER lA BOULANGERIE
        openClose(){
            
            this.isOpen = !this.isOpen;
            
            
        },
        
        increase(){
            this.bakry.gold++;
        },
        

        produceBaguette(){
            this.bakry.flour-=2;
            this.bakry.baguette++;
        }

        
        
        
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
