
import { ZipCodes } from "./ZipCodes.js";

const ZipcodesApp={
    data(){
        return{
            zc: new ZipCodes ('/Zipcodes.json'), 
            results:[],
            nomCommune:""
        }
    },
    mounted(){
        this.zc.loadData().then(()=> console.log(this.zc)); 
          
    },

    computed: {

        communes() {
                return this.results;
            if(this.results.length<500){
            }       
            
        },
        
    },
    methods: {
        searchInput(event) { 
            let val = event.target.value; // attribut "value" de l'input search

            if( val.length > 3) {
                this.results = this.zc.getCommunes(val);
                console.log(val, this.results);
            }
        }


    },


}

Vue.createApp(ZipcodesApp).mount('#app');