import { Db } from './Db.js';

class DbEmployees extends Db 
{

    getSalary(employee){
        let salary=employee.employee_salary/12;
        return Math.round(salary);
    }
    getYear(employee){
        let madate=new Date();
        let year=(madate.getFullYear())-(employee.employee_age);
        return year;
    }
    

   

    
}

export { DbEmployees, Db}