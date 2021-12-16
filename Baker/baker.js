import { Baker } from "./boulanger.js";
import{ Bakery } from "./boulangerie.js";

const myBaker = {
    
    data(){

        return {
            bak:new Baker('./boulanger.js'),
            bakry:new Bakery('./boulangerie.js'),
            isOpen: false,
            baguetteproduction:0,

        }
    },
    
    mounted(){
        
    },

    computed:{
        
    },

    methods:{

        //OUVRIR ou FERMER la boulangerie
        openClose(){
            
            this.isOpen = !this.isOpen;

            if(this.isOpen){
                this.startToProduce();
            }else{
                this.stopToProduce();
            }
            
        },
        //Lancer la production de baguette: diminution du niveau de farine; augmentation du nombre de baguettes
        startToProduce(){
           
            if(this.isOpen){
                this.baguetteproduction= setInterval(() => {
                    this.bakry.produceBaguette();
                    this.bakry.millmaintenance();

                },1000);
               
            }
            console.log(this.isOpen);
        },

        stopToProduce(){
            clearInterval(this.baguetteproduction);
            clearInterval(this.millmaint);
        },
        uplevel1(){
            this.bakry.uplevel();
        },
        buyamill1(){
            this.bakry.buyamill();
        }
        
        
        
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
