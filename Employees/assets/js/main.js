import { DbEmployees } from "./dbEmployees.js";
//import { Employe } from './employe.js';

const employeeApp = {

    data(){
        return{
            db: new DbEmployees ('http://dummy.restapiexample.com/api/v1/employees'),
            erasedEmp:[],
            superTab:[],
        }
    },

    mounted(){
        this.db.loadData();
        
    },

    computed: {

        employees(){
            let superTab = this.db.data;

            //superTab=this.db.data.filter(employee=>!this.erasedEmp.includes(employee.id));

            


            return superTab;
        },
        totalMonthly(){
            let i=0;
            for(let employee of this.employees){
                 i+=employee.employee_salary;
            }
            return i;
        },
        employeeSalMonthly(){
            console.log(this.db.findSalaryMonthly());
            return this.db.findSalaryMonthly();
            
            
        }
        
    },

    methods: {

        eraseEmployee(event){
            this.erasedEmp.push(parseInt(event.target.dataset.id));
        },
        
        

    }

}

Vue.createApp(employeeApp).mount('#app');