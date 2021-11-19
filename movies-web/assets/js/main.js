import { DbMovies } from './movies.js';


const moviesApp = {
    data() {
        return {
            title: "Mes films",
            db: new DbMovies()
        }
    },
    mounted() {
        this.db.loadData();
    }
};

Vue.createApp(moviesApp).mount('#app');
