import { DbEmployees } from "./dbEmployees.js";

const employeeApp = {

    data(){
        return{
            db: new DbEmployees ('http://dummy.restapiexample.com/api/v1/employees'),
            
        }
    },

    mounted(){
        this.db.loadData().then(() =>{
            this.db.data;
        });

    },

    computed: {

        employees(){
            let superTab = this.db.data;
            return superTab;
        },
    },

    methods: {

        

    }

}

Vue.createApp(employeeApp).mount('#app');