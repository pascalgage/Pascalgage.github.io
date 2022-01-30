 var boolName=false;
 var boolMail=false;
 var etatbutton=false;

 const butt = document.querySelector('button');

 (boolName&&boolMail)?butt.disabled=true:butt.disabled=false;

function checkInput(){

    var pasOK = document.getElementById('test1');
    var ok = document.getElementById('test2');

    const champ = document.getElementById('insert');
    const champValue = champ.value.trim(); 

    var boolName=false;
    
    (champValue===" ")? boolName=false : boolName=true;
    (champValue>=0)? boolName=true : boolName=false;

    

    if(boolName===false)
    {
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorFor(champ,'');
        
        
    }
    else
    {
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorFor(champ,'Veuillez saisir au moins un caractère');
        
    }     
}

function setErrorFor(input, message) {
	
    const formControl=document.getElementById('smallmessage');
	formControl.innerText = message;

}
function setErrorForMail(input, message) {
	
    const formControl=document.getElementById('smallmessageMail');
	formControl.innerText = message;

}


function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputMail(){
    var pasOK = document.getElementById('test3');
    var ok = document.getElementById('test4');
    const champ2 = document.getElementById('insertMail');
    const champValue2 = champ2.value.trim();
    var boolMail=false;

    (champValue2!='' && isEmail(champValue2))?boolMail=false : boolMail=true;

    if(boolMail===false){
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest2');
        ok.classList.add('fax2');
        setErrorForMail(champ2,'');
        boolMail=true;


    }else{
        ok.classList.remove('fax2');
        ok.classList.add('notest2');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        setErrorForMail(champ2,'Email invalide');
        
    }

}



