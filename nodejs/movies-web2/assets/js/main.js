import { DbMovies } from "./dbMovies.js";
import { movieComponent } from "./components/movie.js";


const moviesApp = {
    components: {
        'movie': movieComponent
    },

    data() {
        return {
            title: "Mes films",
            db: new DbMovies('http://localhost/movies'),
            page: "all"
        };
    },

    mounted() {
        this.db.loadData();
    },

    computed: {
        categories() {
            return this.db.getCategories();

        },
        years() {
            return this.db.getYears();
        }
    },

    methods: {
        tabClick(event) {
            console.log(event.target.dataset);
            this.page = event.target.dataset.tab;
        },

        catSelect(event) {
            let options = event.target.options;

            let val = options[options.selectedIndex];

            this.cat = val.value

        },

        yearSelect(event) {




        },
    }
};

Vue.createApp(moviesApp).mount('#app');