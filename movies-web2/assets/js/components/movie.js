import { likeComponent } from "./movie-like.js";

const movieComponent = {

    components: {
        'movie-like': likeComponent
    },
    
    data() {
        return {}
    },

    props: {
        info: Object
        /*info: {
            type: String,
            default: "Rien"
        }*/
    },

    methods: {

    },

    template: `<article>
        <h3>{{ info.movie_title }}</h3>
        <ul>
            <li>Genre: {{ info.movie_subject }}</li>
            <li>Année: {{ info.movie_year }}</li>
            <li>Durée: {{ info.movie_length }}</li>
            <li>Acteurs: {{ info.movie_actor }}, {{ info.movie_actress }}</li>
        </ul>
        <movie-like :movie="info"></movie-like>
        </article>`
}

export { movieComponent }