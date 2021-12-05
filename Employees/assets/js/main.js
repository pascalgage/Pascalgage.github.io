import { DbEmployees } from "./dbEmployees.js";

const employeeApp = {

    data(){
        return{
            db: new DbEmployees ('http://dummy.restapiexample.com/api/v1/employees'),
            resultats=[],
        }
    },

    mounted(){
        this.db.loadData().then(() =>{
            this.resultats=this.db.data;
        });

    },

    computed: {

        employees(){
            let superTab = this.db.data.filter(employee =>(this.employees));;
            return superTab;
        },
    },

    methods: {

    }

}

Vue.createApp(employeeApp).mount('#app');