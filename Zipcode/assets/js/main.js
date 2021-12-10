
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
                return this.results=this.zc.data;
                
            
        },
        
    },
    methods: {
        searchInput(event) { 
            let val =(event.target.value); // attribut "value" de l'input search
                if(val.length>3){
                        this.results = this.zc.giveZipCode(val);
                        console.log("by nom", val); 
                }else if(val.length>3 && Number.isInteger(val)){
                        this.results=this.zc.giveCommunes(val);
                        console.log("by numCode", val);
                }
              
        },
        communeClick(event){
            let clicked = event.target.innerText.value;
            
            console.log(clicked);
        }


    },


}

Vue.createApp(ZipcodesApp).mount('#app');