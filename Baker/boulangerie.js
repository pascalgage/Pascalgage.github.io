import { Baker } from './boulanger.js';

class Bakery
{
    constructor(){
        this.level=1;
        this.mill=1;
        this.gold=100;
        this.flour=400;
        this.baguette=0;
        this.levelgold=15;
        this.millgold=100
    }

    produceBaguette(){
        this.flour-=2;
        this.baguette++;
        
    }
    millmaintenance(){
         return Math.round(this.gold-=0.5)*this.level*this.mill;
    }
    uplevel(){
        this.level=this.level+1;
        this.gold-=this.levelgold;
        (this.levelgold=Math.round(this.levelgold*1.5));       
    }
    buyamill(){
        this.mill++;
        this.gold-=this.millgold;
    }
    
}
export { Bakery }