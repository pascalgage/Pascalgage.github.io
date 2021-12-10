
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
            let val = (event.target.value); // attribut "value" de l'input search
            
            if(val.length==5 && Number.isInteger(val)==true) {
                console.log("ok", val);
                this.results = this.zc.getByZipCode(val);
        
            }else if(val.length>3 && Number.isInteger(val)==false){
                this.results=this.zc.getCommunes(val);
            }
        },
        communeClick(event){
            let clicked = event.target.innerText.value;
            
            console.log(clicked);
        }


    },


}

Vue.createApp(ZipcodesApp).mount('#app');