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
    getMail(employee){
        let completeName=employee.employee_name;
        let name=completeName.split(' ');

        let namePart1=name[0].charAt(0).toLowerCase();
        let namePart2=name[1].toLowerCase();

        return namePart1+"."+namePart2+"@email.com";
        
    }

   

    
}

export { DbEmployees, Db}