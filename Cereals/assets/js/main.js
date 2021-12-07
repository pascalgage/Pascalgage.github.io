import { Cereal } from "./Cereal.js";
import { DbCereals } from "./dbCereals.js";
//import { movieComponent } from "./components/cereal.js";


const cerealApp = {
    data() {
        return {
            db: new DbCereals('https://devoldere.net/api/cereals'),
            nutriTab: ['A', 'B', 'C', 'D', 'E'],
            search: "",
            boost:"",
            test:''
        }
    },
    mounted() {
        this.db.loadData();

    },

    computed: {
        total(){
            return this.cereals.length + " Eléments";
        },
        
        calorie(){
            let i = 0;
            let length = this.cereals.length;
            for(let cereal of this.cereals) {
                i += cereal.calories;
            }

            return length > 0 ? Math.round(i/length) : 0;
        },


        cereals() {
            
            let superTab = this.db.data.filter(cereal => this.nutriTab.includes(this.db.getNutriscore(cereal)));
            
            if(this.search.length>2){
                superTab = superTab.filter(cereal=> cereal.name.toLowerCase().includes(this.search.toLowerCase()));
            }
               
            if(this.boost==2){
                superTab = (this.getCategorySalt(superTab));
            } else if(this.boost==1){
                superTab = (this.getCategorySugar(superTab));
                
            } else if(this.boost==3){
                superTab = (this.getCategoryBoost(superTab));
            }
            
            return superTab;
            
        },

        

    },
          

    methods: {
        

        eraseLine(event) {
            let test = event.target.dataset.id;
            
            this.db.removeCereal(test);
            
        },

        

        nutriSelect(event) {
            if(event.target.checked) {
                this.nutriTab.push(event.target.dataset.name)
            } else {
                this.nutriTab = this.nutriTab.filter(item => item !== event.target.dataset.name);
            }
            
        },

        searchInput(event){

            let valeurRecherche=event.target.value;

            if(valeurRecherche.length<1||valeurRecherche.length>2){
                this.search = valeurRecherche.trim();
            }
            
        },
        
        changeCat(event){

            let chooseCat = event.target.selectedIndex;
            this.boost=chooseCat;
            
        },
        getCategorySugar(cerealTab){

            let tabx=[];
            
                cerealTab.forEach(element => {
                    if(element.sugars<1 && element.sugars != -1){
                        tabx.push(element);
                    }
                });
                return tabx;
            
        },
        getCategorySalt(cerealTab){
            
            let tabx=[];
            
                cerealTab.forEach(element => {
                    if(element.sodium<=50){
                        tabx.push(element);
                    }
                });
                return tabx;
    
        },
    
        getCategoryBoost(cerealTab){
            let tabx=[];
            
                cerealTab.forEach(element => {
                    if(element.vitamins>=25 && element.fiber>=10){
                        tabx.push(element);
                    }
                });
                return tabx;
        }
        
    
    }
}

Vue.createApp(cerealApp).mount('#app');