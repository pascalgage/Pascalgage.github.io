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
        
        openClose(){
            
            this.isOpen = !this.isOpen;
            

            if(this.isOpen){
                this.startToProduce();
                
            }else{
                this.stopToProduce();
            }
            
        },
        
        startToProduce(){
            let BaguetteOne=0;
            let GoldOne=0;

            if(this.isOpen){
                this.BaguetteOne= setInterval(this.produceBaguette,1000);
                this.GoldOne= setInterval(this.increase,1000);
            }
            console.log(this.isOpen);
        },

        stopToProduce(){
            clearInterval(this.BaguetteOne);
            clearInterval(this.GoldOne);
        },
        
        produceBaguette(){
            this.bakry.flour-=2;
            this.bakry.baguette++;
            
        },
        increase(){
            this.bakry.gold++;
        }
        
        
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
