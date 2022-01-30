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
    (champValue!='')? boolName=false : boolName=true;
    //FIN DU CHECK...

    if(boolName===false)
    {
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorFor(champ,'');
        b1=true;
        console.log(b1);
        console.log(b2);
        (b1&&b2&&b3)?butt.disabled=false:butt.disabled=true;
        
        
        
    }
    else
    {
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorFor(champ,'Nom manquant');
        b1=false;
        (b1&&b2&&b3)?butt.disabled=false:butt.disabled=true;
        
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
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorForMail(champ2,'');
        b2=true;
        (b1&&b2&&b3)?butt.disabled=false:butt.disabled=true;
        


    }else{
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorForMail(champ2,'Email invalide');
        b2=false;
        (b1&&b2&&b3)?butt.disabled=false:butt.disabled=true;
        
    }
}

function checkPassword(){
    
    var pasOK = document.getElementById('test5');
    var ok = document.getElementById('test6');

    const champ3 = document.getElementById('insertPassword');
    const champValue3 = champ3.value.trim();

    var boolPass=false;

    //Check...
    (champValue3!='')?boolPass=true:boolPass=false;
    //Fin du check...

    console.log(boolPass);

    if(boolPass===true){
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorForPassword(champ3,'');
        b3=true;
        (b1&&b2&&b3)?butt.disabled=false:butt.disabled=true;
    }else{
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorForPassword(champ3,'Mot de passe incorrect');
        b3=false;
        (b1&&b2&&b3)?butt.disabled=false:butt.disabled=true;

    }


}





