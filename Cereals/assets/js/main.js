import { DbCereals } from "./dbCereals.js";
//import { movieComponent } from "./components/cereal.js";


const cerealApp = {
    data() {
        return {
            db: new DbCereals('https://devoldere.net/api/cereals'),
            
            erasedLines: [],
            nutriTab: ['A', 'B', 'C', 'D', 'E'],
            search: "",
            chooseCat:"",
            resultats:[]
            
        }
    },
    mounted() {
        this.db.loadData().then(() => { 
            this.resultats = this.db.data;
        });

    },

    computed: {

        
        cereals() {
            let chooseCat=3;
            
            let superTab = this.db.data.filter(cereal => !this.erasedLines.includes(cereal.id)); // OK pas touche
            
                  
         
            superTab = superTab.filter(cereal => this.nutriTab.includes(this.db.getNutriscore(cereal))); // OK pas touche
            
            
            
            if(this.search.length>2){
                superTab = superTab.filter(cereal=> cereal.name.toLowerCase().includes(this.search.toLowerCase()));
            }

            if(chooseCat==1){
                let cereal= this.db.data;
                superTab = (this.getCategorySalt(cereal));
            }

            if(chooseCat==2){
                let cereal= this.db.data;
                superTab = (this.getCategorySugar(cereal));
            }
            
            if(chooseCat==3){
                let cereal= this.db.data;
                superTab = (this.getCategoryBoost(cereal));
            }
            
            
            
            console.log(superTab);

              
            
            return superTab;
            
        },

        
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

            let chooseCat = event.target.selectedIndex;
            
             console.log(chooseCat);
             return parseInt(chooseCat);
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
                    if(element.potass<=50){
                        tabx.push(element);
                    }
                });
                return tabx;
            
                 
        },

        getCategoryBoost(cerealTab){
            let tabx=[];
            // (taux de vitamines supérieur ou égal à 25 + taux de fibres supérieur ou égal à 10)
                cerealTab.forEach(element => {
                    if(element.vitamins>=25 && element.fiber>=10){
                        tabx.push(element);
                    }
                });
                return tabx;
        },
    
        
    }
}

Vue.createApp(cerealApp).mount('#app');