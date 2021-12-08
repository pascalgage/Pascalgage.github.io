import { DbEmployees } from "./dbEmployees.js";
import { Employe } from './employe.js';

const employeeApp = {

    data(){
        return{
            db: new DbEmployees ('/employee.json'),
            superTab:[],
        }
    },

    mounted(){
        this.db.loadData().then(()=>{
            this.superTab = this.db.data;
        });
        
    },

    computed: {

        employees(){
            
            return this.superTab;
        },

        totalMonthly(){
            let i=0;
            for(let employee of this.employees){
                 i+=Math.fround(employee.employee_salary/12);
            }
            return (Number.parseFloat(i).toPrecision(8));
        },

        /*employeeSalMonthly(){
            console.log(this.db.findSalaryMonthly());
            return this.db.findSalaryMonthly();  
        },

        findSalaryMonthly(){
            console.log(this.db.employee_salary);
            return (this.db.employee_salary)/12;
        },*/

        totalEmp(){
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