import { Cereal } from './Cereal.js';
import { Db } from './Db.js';

class DbCereals extends Db 
{
    loadData(){
        return super.loadData().then(data => {
            for(let index in data){
                this.data[index]=new Cereal(this.data[index]);
            }
            return this.data;
        })
    }
    
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

    removeCereal(_id) {
            this.data = this.data.filter(item=>item.id != _id);
        }
    
    inOrderTabByCalorie(){
        
    }
    
}

export { DbCereals, Db}