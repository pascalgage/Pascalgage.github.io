//Booléens relatifs à l'ouverture du bouton de validation...

var b1 = false;
var b2 = false;
var b3 = false;
var b4 = false;

const butt=document.getElementById('valid');
//Fin gestion ouverture bouton Validation...


// Fonctions appelées au sein des Checkinputs()....

function setErrorFor(input,message) {
	
    const formControl=document.getElementById('smallmessage');
	formControl.innerText = message;

}
function setErrorForMail(input,message) {
	
    const formControl=document.getElementById('smallmessageMail');
	formControl.innerText = message;

}

function setErrorForPassword(input,message){

    const formControl=document.getElementById('smallmessageMdp');
	formControl.innerText = message;
}

function setErrorForPassword2(input,message){

    const formControl=document.getElementById('smallmessageMdp2');
    formControl.innerText = message;
}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//  FIN DES FONCTIONS appelées au sein des CheckInput()....

// Début des fonctions de vérification des INPUTS...(entrées ou saisies des infos utilisateur)....

function checkInputName(){

    var pasOK = document.getElementById('test1');
    var ok = document.getElementById('test2');

    const champ = document.getElementById('insert');
    const champValue = champ.value.trim(); 

    var boolName=true;

    //CHECK...
    (champValue!='' && champValue.length<25)? boolName=false : boolName=true;
    //FIN DU CHECK...

    if(boolName===false)
    {   
        champ.classList.remove('nomPasokred');
        champ.classList.add('nomOKgreen');
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorFor(champ,'');
        b1=true;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
        
        
        
    }else{
    	
        champ.classList.remove('nomOKgreen');
        champ.classList.add('nomPasokred');
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorFor(champ,'Nom incorrect');
        b1=false;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
        
    }
}

function checkInputMail(){

    var pasOK = document.getElementById('test3');
    var ok = document.getElementById('test4');
    const champ2 = document.getElementById('insertMail');
    const champValue2 = champ2.value.trim();

    var boolMail=true;

    //Check....
    (champValue2!='' && isEmail(champValue2))?boolMail=false : boolMail=true;
    //Fin du Check....

    if(boolMail===false){

    	champ2.classList.remove('nomPasokred');
        champ2.classList.add('nomOKgreen');
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorForMail(champ2,'');
        b2=true;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
        


    }else{

        champ2.classList.remove('nomOKgreen');
        champ2.classList.add('nomPasokred');
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorForMail(champ2,'Email invalide');
        b2=false;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;
        
    }
}

var champValue3;

function checkPassword(){
    
    var pasOK = document.getElementById('test5');
    var ok = document.getElementById('test6');

    var champ3 = document.getElementById('insertPassword');
    champValue3 = champ3.value.trim();

    var boolPass=false;

    //Check...
    (champValue3!='' && champValue3.length >=5)?boolPass=true:boolPass=false;
    //Fin du check...

    if(boolPass===true){

    	champ3.classList.remove('nomPasokred');
        champ3.classList.add('nomOKgreen');
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorForPassword(champ3,'');
        b3=true;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;

    }else{


        champ3.classList.remove('nomOKgreen');
        champ3.classList.add('nomPasokred');
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorForPassword(champ3,'Mot de passe incorrect');
        b3=false;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;

    }


}

var champValue4;

function checkPassword2(){
    
    var pasOK = document.getElementById('test7');
    var ok = document.getElementById('test8');

    var champ4 = document.getElementById('insertPassword2');
    champValue4 = champ4.value.trim();

    var boolPass2=false;

    //Check...
    (champValue4==champValue3 && champValue4!='')?boolPass2=true:boolPass2=false;
    //Fin du check...

    if(boolPass2===true){

    	champ4.classList.remove('nomPasokred');
        champ4.classList.add('nomOKgreen');
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorForPassword2(champ4,'');
        b4=true;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;

    }else{

        champ4.classList.remove('nomOKgreen');
        champ4.classList.add('nomPasokred');
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorForPassword2(champ4,'Mot de passe invalide');
        b4=false;
        (b1&&b2&&b3&&b4)?butt.disabled=false:butt.disabled=true;

    }


}





