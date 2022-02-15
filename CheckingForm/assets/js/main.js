//Super-Fonction pour refactoriser le code....
function removeAddClass(elementAchanger,de,a){
    
    const p1=elementAchanger;
    p1+'';
    const p2=de;
    p2+'';
    const p3=a;
    p3+'';

    let params=document.getElementById(p1);
    params.classList.remove(p2);
    params.classList.add(p3);
}

//Gestion du bouton de fermeture haut droit du formulaire...

function closeForm(){
    removeAddClass('mainform','formset','main');

}
//Fin gestion du bouton fermeture...

//Gestion de l'apparition du formulaire à l'écran
function openSetForm(){
    closeSetConnection();
    removeAddClass('mainform','main','formset');
    
}
function openSetConnection(){
    closeForm();
    removeAddClass('mainconnect2','mainconnect','formset2');
}
function closeSetConnection(){
    removeAddClass('mainconnect2','formset2','mainconnect');
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
    removeAddClass('test1','notest','fax1');
    removeAddClass('test2','notest2','fax2');
    removeAddClass('test3','notest','fax1');
    removeAddClass('test4','notest2','fax2');
    removeAddClass('test5','notest','fax1');
    removeAddClass('test6','notest2','fax2');
    removeAddClass('test7','notest','fax1');
    removeAddClass('test8','notest2','fax2');

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

    (c1&&c2)?buttConn.disabled=false:buttConn.disabled=true;
    (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
}

function isFail(champ,ok,pasOK){

    champ.classList.remove('nomOKgreen');
    champ.classList.add('nomPasokred');

    ok.classList.remove('fax2');
    ok.classList.add('notest2');

    pasOK.classList.remove('notest');
    pasOK.classList.add('fax1');

    (c1&&c2)?buttConn.disabled=false:buttConn.disabled=true;
    (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
}

//Fin des 2 fonctions génériques...

// Début des fonctions de vérification des INPUTS...(entrées ou saisies des infos utilisateur)....

function checkInputName(){

    var pasOK = document.getElementById('test1');
    var ok = document.getElementById('test2');
    var champ = document.getElementById('insert');
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
    var champ2 = document.getElementById('insertMail');
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

//Booléens relatifs à l'ouverture du bouton connexion
c1=false;
c2=false;
const buttConn=document.getElementById('validConn');
(c1&&c2)?buttConn.disabled=false:buttConn.disabled=true;


function checkConnMail(){
    var pasOK = document.getElementById('test9');
    var ok = document.getElementById('test10');
    var champ5 = document.getElementById('insertMailconnect');
    champValue5 = champ5.value.trim();

    if(champValue5=='')
    {   
        setErrorFor(champ5,'Champ non-renseigné');
        c1=false;
        isFail(champ5,ok,pasOK);

    }else if (champValue5.length>25)
    {
        setErrorFor(champ5,'Pas plus de 25 caractères');
        c1=false;
        isFail(champ5,ok,pasOK);

    }else if(!isEmail(champValue5))
    {   
        setErrorFor(champ5,'Adresse incorrecte');
        c1=false;
        isFail(champ5,ok,pasOK);

    }else{
        setErrorFor(champ5,'');
        c1=true;
        isSuccess(champ5,pasOK,ok);
        
    }
}

function checkConnPassword(){
    var pasOK = document.getElementById('test11');
    var ok = document.getElementById('test12');
    var champ6 = document.getElementById('insertPassconnect');
    champValue6 = champ6.value.trim();

    if(champValue6==''){
        setErrorFor(champ6,'Champ non-renseigné');
        c2=false;
        isFail(champ6,ok,pasOK);

    }else if(champValue6.length <=5){
        setErrorFor(champ6,'6 caractères au minimum');
        c2=false;
        isFail(champ6,ok,pasOK);
    }else if (champValue6.length>25){
        setErrorFor(champ6,'Mot de passe invalide');
        c2=false;
        isFail(champ6,ok,pasOK);
    }else{
        setErrorFor(champ6,'');
        c2=true;
        isSuccess(champ6,pasOK,ok);
        
    }
}








