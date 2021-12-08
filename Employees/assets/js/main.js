import { Employe } from './employe.js';
import { DbEmployees } from "./dbEmployees.js";
const employeeApp = {

    data(){
        return{
            db: new DbEmployees ('/employee.json'),
            //superTab:[],
            column: {name:'id', asc: true }
        }
    },

    mounted(){
        this.db.loadData();  /*.then(()=>{
            this.superTab = this.db.data;*/
            console.log('etat initial column : ' + this.column.name + ' : ' + this.column.asc)
        /*});*/
        
    },

    computed: {

        employees(){
            let superTab=this.db.data;
            
            if(this.column.asc){
                superTab.sort((a,b)=>a[this.column.name]-b[this.column.name]);
            }else{
                superTab.sort((a,b)=>a[this.column.name]-b[this.column.name]).reverse();
            }

            return superTab;

        },

        totalMonthly(){
            let i=0;
            for(let employee of this.employees){
                 i+=Math.fround(employee.employee_salary/12);
            }
            return (Number.parseFloat(i).toPrecision(8));
        },

        totalEmp(){
            return this.employees.length;
        }
        
    },

    methods: {

        eraseEmployee(event) {
            let test = event.target.dataset.id;
            console.log(test);
            this.db.removeEmploye(test);
        },
        
        columnClick(event){
            let columnClicked=event.target.dataset.column;
            
            if(this.column.name!=columnClicked){
                this.column.name=columnClicked;
                this.column.asc=true;
            }else{
                 this.column.asc=!this.column.asc;
            }
        }

    }

}

Vue.createApp(employeeApp).mount('#app');