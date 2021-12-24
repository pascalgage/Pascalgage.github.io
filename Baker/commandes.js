class Commande
{
    static lastId = 0; 

    constructor(){
        this.id= parseInt(++Commande.lastId);
        this.qty=this.getQuantity();
        this.unitPrice=0.75;
        this.amount=this.getAmount();
        this.timerCount=60;
    }
    getAmount(){
        let amount;
        amount=this.qty*this.unitPrice;
        amount=Math.round(amount);
        return amount;
    }
    getQuantity(){

        function getRandomInt() {
            let min=1;
            let max=20;
            return Math.round(Math.random()*(max-min)+min);
          }
          return getRandomInt();
          
    }
    delay(){

        setInterval(()=>{
            this.timerCount--,1000
        });

    }
    

    
    

}
export{ Commande}