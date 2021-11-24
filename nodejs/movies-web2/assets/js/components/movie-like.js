const likeComponent = {

    data() {
        return {
            counter: window.localStorage.getItem(this.movie.movie_title) ?? 0
        }
    },

    props: {
        movie: Object
    },

    mounted() {
        this.counter = window.localStorage.getItem(this.movie.movie_title) ?? 0;
    },
    methods: {
        like() {
            this.counter++;
            window.localStorage.setItem(this.movie.movie_title, this.counter);
        }
    },
    computed: {
    },
    
    template: `<a @click="like"><i class="fa fa-thumbs-o-up"></i> ({{ counter }})</a>`
}

export { likeComponent }