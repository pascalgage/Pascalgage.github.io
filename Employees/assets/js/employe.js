class Employe
{
    constructor(_Employe){
            this.id=parseInt(_Employe.id ?? 0);
            this.employee_name=_Employe.employee_name ??"";
            this.employee_salary=parseInt(_Employe.employee_salary ?? 0);
            this.employee_age=parseInt(_Employe.employee_age ?? 0);
            this.profile_image=_Employe.profile_image ??"";
            this.employee_monthlySalary=Math.fround(this.employee_salary/12);
    }

    getMail(){
        
            let completeName=this.employee_name;
            let name=completeName.split(' ');
    
            let namePart1=name[0].charAt(0).toLowerCase();
            let namePart2=name[1].toLowerCase();
    
            return namePart1 + "." + namePart2 + "@email.com";
        
    }
    getYear(){
            let madate=new Date();
            let year=(madate.getFullYear())-(this.employee_age);
            return year;
    }

    
}
export { Employe }