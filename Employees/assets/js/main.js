import { DbEmployees } from "./dbEmployees.js";

const employeeApp = {

    data(){
        return{
            db: new DbEmployees('http://dummy.restapiexample.com/api/v1/employees'),

        }
    },

    mounted(){
        this.db.loadData().then(() =>{
            this.resultats=this.db.data;
        });

    },

    computed: {

        employees(){

        },
    },

    methods: {

    }

}

Vue.createApp(employeeApp).mount('#app');