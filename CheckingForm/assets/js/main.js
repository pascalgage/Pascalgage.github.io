
function checkInput(){

    var pasOK = document.getElementById('test1');
    var ok = document.getElementById('test2');
    const champ = document.getElementById('insert');

    const champValue = champ.value.trim(); 

    var army=false;

    if(champValue===" "){
        
        army=false;

    }
    else if(champValue>=0)
    {
        
        army=true;
        
    }

    if(army===false)
    {
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
    }
    else
    {
        ok.classList.remove('fax2');
        ok.classList.add('notest');
    }
        
        
}
