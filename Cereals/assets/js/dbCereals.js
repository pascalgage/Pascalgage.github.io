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

   

    
}

export { DbCereals, Db}