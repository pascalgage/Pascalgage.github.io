function toggleForm(){

    var monform=document.getElementById('etatcivil');
    var etatform = monform.style.display;
    var button=document.getElementById('on');

        if(etatform=='none'){
            
            monform.style.display='block';
            
            button.innerHTML='Déclarer un incident ▲';
        }
        else{
            monform.style.display='none';
            
            button.innerHTML='Déclarer un incident ▼';
        }
    };




    









