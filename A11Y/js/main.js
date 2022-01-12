function toggleForm(){

    var monform=document.getElementById('etatcivil');
    var etatform = monform.style.display;
    var button=document.getElementById('on');

        if(etatform =='none'){
            
            monform.style.display='block';
            console.log('ok');
            button.innerHTML='Déclarer un incident ▲';
            button.setAttribute('aria-expanded',true);
        }
        else{
            monform.style.display='none';
            console.log('ok');
            button.innerHTML='Déclarer un incident ▼';
            button.setAttribute('aria-expanded',false);
        }
    };




    









