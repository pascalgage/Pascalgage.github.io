class Cereal{
        constructor(_cereal){
            this.id=parseInt(_cereal.id ?? 0);
            this.name= _cereal.name??"";
            this.calories=parseInt(_cereal.calories??0);
            this.protein= parseInt(_cereal.protein??0);
            this.sodium= parseInt(_cereal.sodium??0);
            this.fiber= parseInt(_cereal.fiber??0);
            this.carbo= parseInt(_cereal.carbo??0);
            this.sugars= parseInt(_cereal.sugars??0);
            this.potass= parseInt(_cereal.potass??0);
            this.vitamins= parseInt(_cereal.vitamins??0);
            this.rating= _cereal.rating??"";
            this.nutriscore = this.getNutriscore();
        }

        getNutriscore() {
        

            if(this.rating > 80) {
                return 'A';
            } else if(this.rating > 70) {
                return 'B';
            } else if(this.rating > 55) {
                return 'C';
            } else if(this.rating > 35) {
                return 'D';
            } else {
                return 'E';
            }
        }


        
}
export { Cereal }