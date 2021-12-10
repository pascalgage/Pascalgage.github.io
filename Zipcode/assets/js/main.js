
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
        this.zc.loadData().then(()=> console.log(this.zc)); 
          
    },

    computed: {

        communes() {
                return this.results;
                
            
        },
        
    },
    methods: {
        searchInput(event) { 
            let val = event.target.value; // attribut "value" de l'input search

            if( val.length > 3) {
                this.results = this.zc.getCommunes(val);
        
            }
            if(val.length > 3){
                this.results=this.zc.getZipCode(val);
            }
        },
        communeClick(event){
            let clicked = event.target.dataset.tab;
            
            console.log(clicked);
        }


    },


}

Vue.createApp(ZipcodesApp).mount('#app');