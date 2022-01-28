
function checkInput(){

    var pasOK = document.getElementById('test1');
    var ok = document.getElementById('test2');
    const champ = document.getElementById('insert');

    const champValue = champ.value.trim(); 

    var bool=false;

    if(champValue===" "){
        
        bool=false;

    }
    else if(champValue>=0)
    {
        
        bool=true;
        
    }

    if(bool===false)
    {
        pasOK.classList.remove('fax1');
        pasOK.classList.add('notest');
        ok.classList.remove('notest');
        ok.classList.add('fax2');
        
    }
    else
    {
        ok.classList.remove('fax2');
        ok.classList.add('notest');
        pasOK.classList.remove('notest');
        pasOK.classList.add('fax1');
        
    }
    

        
}
