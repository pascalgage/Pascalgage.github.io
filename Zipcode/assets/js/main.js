
import { ZipCodes } from "./ZipCodes.js";

const ZipcodesApp={
    data(){
        return{
            zc: new ZipCodes ('/Zipcodes.json'), 
            results:[],
            commune:"",
            resultComm:[],
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
        clickValidation() {
            //console.log(e.target.dataset.code)
            let input=document.getElementById('test').value;
            console.log(input);
            this.resultComm=this.zc.giveCommunes(input);
            
        }
       


    },


}

Vue.createApp(ZipcodesApp).mount('#app');