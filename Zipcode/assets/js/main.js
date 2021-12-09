
import { ZipCodes } from "./ZipCodes.js";

const ZipcodesApp={
    data(){
        return{
            zc: new ZipCodes ('/Zipcodes.json'), 
            results:[]
        }
    },
    mounted(){
        this.zc.loadData().then(()=> console.log(this.zc)); 
          
    },

    computed: {

        communes() {
            return this.zc.data;
        },
    },
    methods: {
        searchInput(event) { 
            let val = event.target.value; // attribut "value" de l'input search

            if(val.length < 1 || val.length > 2) {
                this.results = this.zc.getCommunes(val);
                console.log(val, this.results);
            }
        }
    },


}

Vue.createApp(ZipcodesApp).mount('#app');