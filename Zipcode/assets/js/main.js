
import { ZipCodes } from "./ZipCodes.js";

const ZipcodesApp={
    data(){
        return{
            zc: new ZipCodes ('/Zipcodes.json'), 
            results:[],
            commune:"",
            
            zipCode: ""
        }
    },
    mounted(){
        this.zc.loadData(); 
        
    },

    computed: {

        communes() {
                return this.results=this.zc.data;
                
        },
        communeByZip(clicked){
            return this.zc.communeByZip(clicked);
        },

        resultats(){
            return this.zc.giveCommunes(this.zipCode);
        }
        
    },
    methods: {
        searchInput(event) { 
            this.zipCode = event.target.value
            let val =(event.target.value); // attribut "value" de l'input search
                if(val.length>3){
                        this.results = this.zc.giveZipCode(val);
                         
                }else if(val.length>2 && Number.isInteger(val)){
                        this.results=this.zc.giveCommunes(val);
                        
                }
              
        },
        clickValidation(e) {
            //console.log(e.target.dataset.code)
            
        }
       


    },


}

Vue.createApp(ZipcodesApp).mount('#app');