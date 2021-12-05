import { DbCereals } from "./dbCereals.js";
//import { movieComponent } from "./components/cereal.js";


const cerealApp = {
    data() {
        return {
            db: new DbCereals('https://devoldere.net/api/cereals'),
            erasedLines: [],
            nutriTab: ['A', 'B', 'C', 'D', 'E'],
            search: "",
            boost:"",
        }
    },
    mounted() {
        this.db.loadData().then(() => { 
            this.resultats = this.db.data;
        });

    },

    computed: {

        
        cereals() {
            
            let superTab = this.db.data.filter(cereal => !this.erasedLines.includes(cereal.id));
            
            superTab = superTab.filter(cereal => this.nutriTab.includes(this.db.getNutriscore(cereal)));
            
            if(this.search.length>2){
                superTab = superTab.filter(cereal=> cereal.name.toLowerCase().includes(this.search.toLowerCase()));
            }

            if(this.boost==2){
                let cereal= this.db.data;
                superTab = (this.getCategorySalt(cereal));
            }

            if(this.boost==1){
                let cereal= this.db.data;
                superTab = (this.getCategorySugar(cereal));
            }
            
            if(this.boost==3){
                let cereal= this.db.data;
                superTab = (this.getCategoryBoost(cereal));
            }
            
            return superTab;
            
        },

    },
          

    methods: {
        
        eraseLine(event) {
            this.erasedLines.push(parseInt(event.target.dataset.id))
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
                    if(element.sugars<1){
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