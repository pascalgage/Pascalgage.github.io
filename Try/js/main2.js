var nav = document.getElementById('main');
var navSub=document.getElementById('inscriptionOKAY');
let army=false;

function toggleClose(){
    nav.classList.remove('scooper');
    nav.classList.add('active');
}

function toggle(){
    nav.classList.remove('active');
    nav.classList.add('scooper');
    if(army==true){
        CloseInscriptionSuccess();
    }
}

function validation(){
    toggleClose();
    navSub.classList.remove('inscriptionOK');
    navSub.classList.add('active3');
    army=true;
}

function CloseInscriptionSuccess(){
    navSub.classList.remove('active3');
    navSub.classList.add('inscriptionOK');
}

