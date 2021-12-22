import { Baker } from './boulanger.js';
import{Commande} from "./commandes.js";
class Bakery
{
    constructor(){
        this.level=1;
        this.mill=1;
        this.gold=1000;
        this.flour=400;
        this.baguette=0;
        this.levelgold=15;
        this.millgold=80;
        this.bagproduced=0;
        this.wheatproduced=0;
        this.goldwon=this.gold;
    }

    produceBaguette(){
        this.flour-=2;
        this.baguette += (this.level);
        this.bagproduced+=(this.level);
    }
    produceFlour(){
        this.flour+=(this.mill*1);
        this.wheatproduced+=(this.level*1);
    }



    millmaintenance(){
         return Math.round(this.gold-=(0.5*this.level*this.mill));
    }
    uplevel(){
        this.level=this.level+1;
        this.gold-=this.levelgold;
        this.levelgold=Math.round(this.levelgold*1.5);       
    }
    buyamill(){
        this.mill++;
        this.gold-=this.millgold;
        this.millgold=Math.round(this.millgold*1.5);
    }

    balanceGold(){
        
    }
    
}
export { Bakery }