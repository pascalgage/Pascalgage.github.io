import { DbCereals } from "./dbCereals.js";
//import { movieComponent } from "./components/cereal.js";


const cerealApp = {
    data() {
        return {
            db: new DbCereals('https://devoldere.net/api/cereals'),
            erasedLines: [],
            nutriTab: [],
            results:[]
        }
    },
    mounted() {
        this.db.loadData().then(() => console.log(this.db));
    },

    computed: {
        cereals() {
            let results = this.db.data.filter(cereal => !this.erasedLines.includes(cereal.id))

            if(this.nutriTab.length > 0) {
                results = results.filter(cereal=> this.nutriTab.includes(this.db.getNutriscore(cereal)))
            }
            
            if(this.results.length>0){
                results=results.filter(cereal=> this.results.includes(this.db.trySearch()))
            }
            

            return results;
            
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

            if(valeurRecherche>2){
                this.results=this.db.trySearch(valeurRecherche);
            }
            console.log(valeurRecherche);
        },
    }

}

Vue.createApp(cerealApp).mount('#app');