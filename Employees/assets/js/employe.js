class Employe{
    constructor(_Employe){
            this.id=parseInt(_Employe.id ?? 0);
            this.employee_name=_Employe.employee_name ??"";
            this.employee_salary=parseInt(_Employe.employee_salary ?? 0);
            this.employee_age=parseInt(_Employe.employee_age ?? 0);
            this.profile_image=_Employe.profile_image ??"";
    }

    


    
}
export { Employe }