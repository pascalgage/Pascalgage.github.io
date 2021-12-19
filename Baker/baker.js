import { Baker } from "./boulanger.js";
import{ Bakery } from "./boulangerie.js";
import{Commande} from "./commandes.js";

const myBaker = {
    
    data(){

        return {
            bak:new Baker('./boulanger.js'),
            bakry:new Bakery('./boulangerie.js'),
            comm:new Commande(),
            isOpen: false,
            baguetteproduction:0,
            timerEnabled: true,
            timerCount: 60,
            value:true,
            call:0,
        }
    },
    
    mounted(){
        
    },

    
    watch: {

            timerEnabled(value) {
                if (value) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
            },
    
            timerCount: {
                handler(value) {
    
                    if (value > 0 && this.timerEnabled) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
    
                },
                immediate: true 
            }
    
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
        },

        play() {
            this.timerEnabled = !this.timerEnabled;
        },

        
        
        
        
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
