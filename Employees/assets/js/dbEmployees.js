import { Db } from './Db.js';
import { Employe } from './employe.js';

class DbEmployees extends Db 
{
    loadData(){
        return super.loadData().then(data => {
            for(let index in data){
                this.data[index]=new Employe(this.data[index]);
            }
            return this.data;
        })
    }

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
    findSalaryMonthly(){
        let test=this.data;
        
        return (test.employee_salary);
    }
   

    
}

export { DbEmployees, Db}