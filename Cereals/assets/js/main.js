import { DbCereals } from "./dbCereals.js";
//import { movieComponent } from "./components/cereal.js";


const cerealApp = {
    data() {
        return {
            db: new DbCereals('https://devoldere.net/api/cereals'),
            
            erasedLines: [],
            nutriTab: ['A', 'B', 'C', 'D', 'E'],
            search: "",
            
            
        }
    },
    mounted() {
        this.db.loadData().then(() => { 
            this.resultats = this.db.data;
        });
    },

    computed: {

        
        cereals() {
            
            let superTab = this.db.data.filter(cereal => !this.erasedLines.includes(cereal.id)); // OK pas touche
            
                  
         
            superTab = superTab.filter(cereal => this.nutriTab.includes(this.db.getNutriscore(cereal))); // OK pas touche
            
            
            
            if(this.search.length>2){
                superTab = superTab.filter(cereal=> cereal.name.toLowerCase().includes(this.search.toLowerCase()));
            }

            
            
            
            console.log(superTab);

              
            
            return superTab;
            
        },

        isGoodHealth(superTab) {
            let sugarfree=[];
            let poorsalted=[];
            let boost=[];
    
                superTab.forEach(cereal => {
                    if(cereal.sugars <= 1){
                        sugarfree.push(cereal);
                    }else if(cereal.potass<=50){
                        poorsalted.push(cereal);
                    }else if(cereal.vitamins>=25 && cereal.fiber>=10){
                        boost.push(cereal);}
                });

               return boost;
        }
    },
          

    methods: {
        /*
         *au click ajoute l'id de la céréale à effacer dans un tableau erasedLines  
         */

        
        eraseLine(event) {
            this.erasedLines.push(parseInt(event.target.dataset.id))
        },

        nutriSelect(event) {
            if(event.target.checked) {
                this.nutriTab.push(event.target.dataset.name)
            } else {
                this.nutriTab = this.nutriTab.filter(item => item !== event.target.dataset.name);
            }
            
            //console.log(this.nutriTab)
           
        },

        searchInput(event){

            let valeurRecherche=event.target.value;

            if(valeurRecherche.length<1||valeurRecherche.length>2){
                this.search = valeurRecherche.trim();
            }
            //console.log(valeurRecherche);
        },

        /**
         * @todo  
         * @param {*} event 
         */
        changeCat(event){
            let chooseCat=event.target.selectedIndex;
            
            console.log(chooseCat);
            return chooseCat; 
        },

        
            
                
            
            
            
    
            
    
            
        
        
    }

}

Vue.createApp(cerealApp).mount('#app');