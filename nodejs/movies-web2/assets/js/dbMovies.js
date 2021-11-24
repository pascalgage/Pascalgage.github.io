import { Db } from './db.js';

class DbMovies extends Db {
    constructor(_url) {
        super(_url);
        //this.loadData();
    }

    getCategories() {

        let cats = [];

        for (let movie of this.data) {
            if (!cats.includes(movie.movie_subject)) {
                cats.push(movie.movie_subject);
            }
        }

        return cats.filter(Boolean);

        /*this.data.forEach((movie) => {

        });*/
    }

    getMoviesByCategory(_category) {
        return this.data.filter(movie => movie.movie_subject === _category);
    }

    getYears() {
        let years = [];
        for (let movie of this.data) {

            if (!years.includes(movie.movie_year)) {
                years.push(movie.movie_year);

            }
        }
        return years.sort().reverse();
    }

    getMoviesByYear(_year) {
        return this.data.filter(movie => movie.movie_year === _year);
    }

}

export { DbMovies, Db }