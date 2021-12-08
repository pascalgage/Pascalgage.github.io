import { Db } from './Db.js';
import { Employe } from './employe.js';

class DbEmployees extends Db 
{
    loadData(){
        return super.loadData().then(data => {
            for(let index in data){
                this.data[index]=new Employe(data[index]);
            }
            return this.data;
        })
    }

    getSalary(employee){
        let salary=employee.employee_salary/12;
        return Math.round(salary);
    }
    
    removeEmploye(_id) {
        this.data = this.data.filter(item => item.id != _id);
    }
    
    
}

export { DbEmployees, Db}