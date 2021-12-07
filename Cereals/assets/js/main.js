import { Cereal } from "./Cereal.js";
import { DbCereals } from "./dbCereals.js";
//import { movieComponent } from "./components/cereal.js";

/**
 * la constante cerealApp est l'objet principal de l'application...
 */
const cerealApp = {
    data() { // ceux sont les variables manipulables de l'application...
        return {
            db: new DbCereals('https://devoldere.net/api/cereals'),
            nutriTab: ['A', 'B', 'C', 'D', 'E'],
            search: "",
            boost:"",
            
        }
    },
    mounted() { // évènement du cycle de vie de l'application...
        this.db.loadData();

    },

    computed: {  //c'est l'ensemble des données calculées....
        totalElements(){
            return this.cereals.length + " Eléments";
        },
                    //c'est la variable de fin de colonne calories...
        calorieMoy(){
            let i = 0;
            let length = this.cereals.length;
            for(let cereal of this.cereals) {
                i += cereal.calories;
            }

            return length > 0 ? Math.round(i/length) : 0;
        },

                //ceux sont les filtres de l'application...
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
                                //ma méthode eraseline permet de supprimer un élément du tableau
        eraseLine(event) {
            let test = event.target.dataset.id;
            this.db.removeCereal(test);
            
        },

        
        /**
         * 
         * @param {*} event permet de selectionner selon le nutriscore....et d'obtenir les céréales filtrées 
         * selon le nutriscore....
         */
        nutriSelect(event) {
            if(event.target.checked) {
                this.nutriTab.push(event.target.dataset.name)
            } else {
                this.nutriTab = this.nutriTab.filter(item => item !== event.target.dataset.name);
            }
            
        },

        /**
         * 
         * @param {*} event permet d'entrer une chaîne de caractères pour rechercher des céréales dans le tableau
         * contenant dans leur nom tout ou partie de cette chaîne de caractères....
         */
        searchInput(event){

            let valeurRecherche=event.target.value;

            if(valeurRecherche.length<1||valeurRecherche.length>2){
                this.search = valeurRecherche.trim();
            }
            
        },
                            //permet de choisir une catégorie de céréales...
        changeCat(event){

            let chooseCat = event.target.selectedIndex;
            this.boost=chooseCat;
            
        },
                            //fonctions de tri des céréales selon catégorie...
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
                    if(element.sodium<=50 && element.sodium != -1){
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
//fin du code cerealApp....