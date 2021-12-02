import { Db } from './Db.js';

class DbCereals extends Db 
{

    
    
    getNutriscore(cereal) {
        

        if(cereal.rating > 80) {
            return 'A';
        } else if(cereal.rating > 70) {
            return 'B';
        } else if(cereal.rating > 55) {
            return 'C';
        } else if(cereal.rating > 35) {
            return 'D';
        } else {
            return 'E';
        }
    }

    isGoodHealth(cereal) {
        if(cereal.sugars <= 1){
            return parseInt(1);
    }else if(cereal.potass<=50){
            return parseInt(2);
    }else if(cereal.vitamins>=25 && cereal.fiber>=10){
            return parseInt(3);}
    }

    /*isPoorSalt(cereal){
        return(cereal.potass<=50);
    }

    isBoost(cereal){
        return(cereal.vitamins>=25 && cereal.fiber>=10);
    }*/
    
    /*
    getCerealByName(_cereal){
        return this.data.filter(
            cereal => 
            cereal.name.includes(_cereal) 
            
        );
    }
    */
 
    
}

export { DbCereals, Db}