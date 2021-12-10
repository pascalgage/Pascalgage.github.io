
import { ZipCodes } from "./ZipCodes.js";

const ZipcodesApp={
    data(){
        return{
            zc: new ZipCodes ('/Zipcodes.json'), 
            results:[],
            nomCommune:"",
            clicked: "",
        }
    },
    mounted(){
        this.zc.loadData(); 
          
    },

    computed: {

        communes() {
                return this.results;
                
            
        },
        
    },
    methods: {
        searchInput(event) { 
            let val =(event.target.value); // attribut "value" de l'input search
            
            if(val.length>4) {
                console.log("that's it",val);
                this.results=this.zc.giveCommunes(val);
                
            }else if (5<val.length>6){
                console.log("ok", val);
                this.results = this.zc.giveZipCode(val);
            
            }
            
            
               
        },
        communeClick(event){
            let clicked = event.target.innerText.value;
            
            console.log(clicked);
        }


    },


}

Vue.createApp(ZipcodesApp).mount('#app');