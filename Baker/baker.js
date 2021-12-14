import { Boulanger } from "./boulanger";

const myBaker = {
    
    data(){
        return {
            isOpen: false,
            niv:'0',
            moulins:'0',
            goldlevel:'5',
            farine:'400',
            baguette:'0',
            b1gold:'0',
            b2gold:'0'
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
            this.goldlevel++;
        }
        
    }




}

const appBaker = Vue.createApp(myBaker);

appBaker.mount('#app');
