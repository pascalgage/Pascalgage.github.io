import { Baker } from "./boulanger.js";
import{ Bakery } from "./boulangerie.js";
import{Commande} from "./commandes.js";

const myBaker = {
    
    data(){

        return {
            bak:new Baker('./boulanger.js'),
            bakry:new Bakery('./boulangerie.js'),

            commandes:[],//Tableau de commandes
            isOpen: false,
            baguetteproduction:0,
            timerEnabled: false,
            timerCount: 60,
            value:true,
            
            
        }
    },
    
    mounted(){

        for(let i=0;i<10;i++){
            this.commandes.push(new Commande());
        }
        console.log(this.commandes);
        
    },
    computed(){
        
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
                    this.bakry.produceFlour();
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

        eraseLine(event){
            let test=(event.target.dataset.id);
            this.commandes=this.commandes.filter(item=>item.id !=test);
        },

        goldincome(event){
            let test=event.target.dataset.id;
            test=parseInt(test);

            let value1=this.commandes.find(c => c.id == test).amount;//somme en OR de la commande
            let value2=this.commandes.find(c => c.id == test).qty;//quantité de baguettes commandées

            if(this.bakry.baguette >= value2){
                this.bakry.gold +=value1;
                this.bakry.baguette-=value2;
                this.commandes=this.commandes.filter(item=>item.id !=test);
                console.log('test');
            }

            console.log(value1, value2);
        }

        
        
        
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
