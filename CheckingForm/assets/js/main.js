//Gestion du bouton de fermeture haut droit du formulaire...

function closeForm(){
    
    let formulaire=document.getElementById('mainform');
    formulaire.classList.remove('formset');
    formulaire.classList.add('main');
    let wrapped=document.getElementById('wrapper');
    wrapped.classList.remove('footer-wrapper');
    wrapped.classList.add('footer');

}
//Fin gestion du bouton fermeture...

//Gestion de l'apparition du formulaire à l'écran
function closeSetForm(){
    let formhide=document.getElementById('mainform');
    formhide.classList.remove('main');
    formhide.classList.add('formset');
    let wrapped=document.getElementById('wrapper');
    wrapped.classList.remove('footer');
    wrapped.classList.add('footer-wrapper');
}
//Fin de l'apparition du formulaire
//Action du bouton annuler...
function reinitialise(){
    const champs = document.getElementById('formulaire');
    champs.reset();
    b1=false;
    b2=false;
    b3=false;
    b4=false;
    (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
    //Enlever tous les textes d'erreurs...
    let num1=document.getElementById('insert');
    let num2=document.getElementById('insertMail');
    let num3=document.getElementById('insertPassword');
    let num4=document.getElementById('insertPassword2');
    num1.classList.remove('nomPasokred','fax1','notest2','nomOKgreen','fax2','notest');
    setErrorFor(num1,'');
    num2.classList.remove('nomPasokred','fax1','notest2','nomOKgreen','fax2','notest');
    setErrorFor(num2,'');
    num3.classList.remove('nomPasokred','fax1','notest2','nomOKgreen','fax2','notest');
    setErrorFor(num3,'');
    num4.classList.remove('nomPasokred','fax1','notest2','nomOKgreen','fax2','notest');
    setErrorFor(num4,'');
    //Enlever toutes les pastilles....
    let tes1=document.getElementById('test1');
    tes1.classList.remove('notest');
    tes1.classList.add('fax1');
    let tes1b=document.getElementById('test2');
    tes1b.classList.remove('notest2');
    tes1b.classList.add('fax2');

    let tes2=document.getElementById('test3');
    tes2.classList.remove('notest');
    tes2.classList.add('fax1');
    let tes2b=document.getElementById('test4');
    tes2b.classList.remove('notest2');
    tes2b.classList.add('fax2');

    let tes3=document.getElementById('test5');
    tes3.classList.remove('notest');
    tes3.classList.add('fax1');
    let tes3b=document.getElementById('test6');
    tes3b.classList.remove('notest2');
    tes3b.classList.add('fax2');

    let tes4=document.getElementById('test7');
    tes4.classList.remove('notest');
    tes4.classList.add('fax1');
    let tes4b=document.getElementById('test8');
    tes4b.classList.remove('notest2');
    tes4b.classList.add('fax2');
}


//Booléens relatifs à l'ouverture du bouton de validation...

var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;

const butt=document.getElementById('valid');
//Fin gestion ouverture bouton Validation...


// Fonctions appelées au sein des Checkinputs()....

function setErrorFor(input,message) {

	const location = input.parentElement;
    location.className='general';
    const mes= location.querySelector('small');
    mes.innerText=message;

}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//  FIN DES FONCTIONS appelées au sein des CheckInput()....

//Début des deux principales fonctions génériques (bloc d'éxécution)
function isSuccess(champ,pasOK,ok){
    champ.classList.remove('nomPasokred');
    champ.classList.add('nomOKgreen');
    pasOK.classList.remove('fax1');
    pasOK.classList.add('notest');
    ok.classList.remove('notest2');
    ok.classList.add('fax2');
    (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
}

function isFail(champ,ok,pasOK){
    champ.classList.remove('nomOKgreen');
    champ.classList.add('nomPasokred');
    ok.classList.remove('fax2');
    ok.classList.add('notest2');
    pasOK.classList.remove('notest');
    pasOK.classList.add('fax1');
    (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
}

//Fin des 2 fonctions génériques...

// Début des fonctions de vérification des INPUTS...(entrées ou saisies des infos utilisateur)....

function checkInputName(){

    var pasOK = document.getElementById('test1');
    var ok = document.getElementById('test2');
    const champ = document.getElementById('insert');
    const champValue = champ.value.trim(); 

    if(champValue=='')
    {   
        setErrorFor(champ,'Champ non-renseigné');
        b1=false;
        isFail(champ,ok,pasOK);

    }else if (champValue.length>25)
    {
        setErrorFor(champ,'Pas plus de 25 caractères');
        b1=false;
        isFail(champ,ok,pasOK);
    }else
    {
        setErrorFor(champ,'');
        b1=true;
        isSuccess(champ,pasOK,ok);
    }
}

function checkInputMail(){

    var pasOK = document.getElementById('test3');
    var ok = document.getElementById('test4');
    const champ2 = document.getElementById('insertMail');
    const champValue2 = champ2.value.trim();

    if(champValue2==''){
        setErrorFor(champ2,'Champ non-renseigné');
        b2=false;
        isFail(champ2,ok,pasOK);
    }else if (!isEmail(champValue2))
    {
        setErrorFor(champ2,'Adresse incorrecte');
        b2=false;
        isFail(champ2,ok,pasOK); 
    }else{
        setErrorFor(champ2,'');
        b2=true;
        isSuccess(champ2,pasOK,ok);
    }
}

//Variable globale du mot de passe 1 à comparer avec mot de passe 2
var champValue3;

function checkPassword(){
    
    var pasOK = document.getElementById('test5');
    var ok = document.getElementById('test6');
    var champ3 = document.getElementById('insertPassword');
    champValue3 = champ3.value.trim();

    if(champValue3==''){
        setErrorFor(champ3,'Champ non-renseigné');
        b3=false;
        isFail(champ3,ok,pasOK);
    }else if(champValue3.length <=5) 
    {
        setErrorFor(champ3,'6 caractères au minimum');
        b3=false;
        isFail(champ3,ok,pasOK);
    }else if(champValue3.length>30){
        setErrorFor(champ3,'30 caractères au maximum');
        b3=false;
        isFail(champ3,ok,pasOK);
    }else{
        setErrorFor(champ3,'');
        b3=true;
        isSuccess(champ3,pasOK,ok);
    }


}

var champValue4;

function checkPassword2(){
    
    var pasOK = document.getElementById('test7');
    var ok = document.getElementById('test8');
    var champ4 = document.getElementById('insertPassword2');
    champValue4 = champ4.value.trim();

    if(champValue4==''){
        setErrorFor(champ4,'Champ non-renseigné');
        b4=false;
        isFail(champ4,ok,pasOK);
    	}else if(champValue4!=champValue3){
        setErrorFor(champ4,'Mots de passe différents');
        b4=false;
        isFail(champ4,ok,pasOK);
        }else if(champValue4.length <=5){
        setErrorFor(champ4,'6 caractères au minimum');
        b4=false;
        isFail(champ4,ok,pasOK)
        }else if(champValue4.length>30){
        setErrorFor(champ4,'30 caractères au maximum');
        b4=false;
        isFail(champ4,ok,pasOK);
        }else{
        setErrorFor(champ4,'');
        b4=true;
        isSuccess(champ4,pasOK,ok);
        }
}









