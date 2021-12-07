import { DbEmployees } from "./dbEmployees.js";
//import { Employe } from './employe.js';

const employeeApp = {

    data(){
        return{
            db: new DbEmployees ('http://dummy.restapiexample.com/api/v1/employees'),
            superTab:[],
        }
    },

    mounted(){
        this.db.loadData();
        
    },

    computed: {

        employees(){
            let superTab = this.db.data;
            return superTab;
        },

        totalMonthly(){
            let i=0;
            for(let employee of this.employees){
                 i+=Math.fround(employee.employee_salary/12,2);
            }
            return i;
        },

        employeeSalMonthly(){
            console.log(this.db.findSalaryMonthly());
            return this.db.findSalaryMonthly();  
        },

        totalEmp(){
            let totalEmp=this.db.length;
            console.log(totalEmp);
            return this.employees.length;
        }
        
    },

    methods: {

        eraseEmployee(event) {
            let test = event.target.dataset.id;
            this.db.removeEmploye(test);
        },
        

    }

}

Vue.createApp(employeeApp).mount('#app');