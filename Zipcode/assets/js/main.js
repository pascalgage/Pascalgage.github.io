
import { ZipCodes } from "./ZipCodes.js";

const ZipcodesApp={
    data(){
        return{
            zc: new ZipCodes ('/Zipcodes.json'), 
            
        }
    },
    mounted(){
        this.zc.loadData(); 
          
    },



}

Vue.createApp(ZipcodesApp).mount('#app');