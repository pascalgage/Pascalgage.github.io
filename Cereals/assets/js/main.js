import { DbCereals } from "./dbCereals.js";
//import { movieComponent } from "./components/cereal.js";


const cerealApp = {
    data() {
        return {
            db: new DbCereals('https://devoldere.net/api/cereals'),
            erasedLines: [],
            nutriTab: []
        }
    },
    mounted() {
        this.db.loadData().then(() => console.log(this.db));
    },

    computed: {
        cereals() {

            return this.db.data.filter(cereal => !this.erasedLines.includes(cereal.id))
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
            this.nutriTab.push(input.target)
        }
    },

}

Vue.createApp(cerealApp).mount('#app');