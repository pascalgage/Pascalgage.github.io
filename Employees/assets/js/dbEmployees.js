import { Db } from './Db.js';

class DbEmployees extends Db 
{

    getSalary(employee){
        let salary=employee.employee_salary/12;
        return Math.round(salary);
    }
    
    

   

    
}

export { DbEmployees, Db}