class Commande
{
    static lastId = 0; 

    constructor(){
        this.id= ++Commande.lastId;
        this.qty=5;
        this.unitPrice=0.75;
        this.amount=this.getAmount();
    }
    getAmount(){
        return this.qty*this.unitPrice;
    }

    

    
    

}
export{ Commande}