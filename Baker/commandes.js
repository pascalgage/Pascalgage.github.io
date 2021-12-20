class Commande
{
    static lastId = 0; 

    constructor(){
        this.id= ++Commande.lastId;
        this.qty=this.getQuantity();
        this.unitPrice=0.75;
        this.amount=this.getAmount();
    }
    getAmount(){
        return this.qty*this.unitPrice;
    }
    getQuantity(){

        function getRandomInt() {
            let min=1;
            let max=20;
            return Math.random()*(max-min)+min;
          }
          return getRandomInt();
          
    }
    

    
    

}
export{ Commande}