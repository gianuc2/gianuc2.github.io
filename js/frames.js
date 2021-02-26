   
function frames(variable){
    document.getElementById("enframe").src="pages/home.html";
    if (variable==1){
        document.getElementById("enframe").src="pages/home.html";
    }
    else if (variable==2){
        document.getElementById("enframe").src="pages/investigadores.html";
    }
    else if (variable==3){
        document.getElementById("enframe").src="pages/tesistas-actuales.html";
    }
    else if (variable==4){
        document.getElementById("enframe").src="pages/graduados.html";
    }
    else if (variable==5){
        document.getElementById("enframe").src="pages/proyectos.html";
    }
    else if (variable==6){
        document.getElementById("enframe").src="pages/publicaciones.html";  
    }
    else if (variable==7){
        document.getElementById("enframe").src="pages/preprints.html";
    }  
    else if (variable==8){
        document.getElementById("enframe").src="pages/seminario-don-hubert.html";
    }  
    else if (variable==9){
        document.getElementById("enframe").src="pages/contacto.html";
    }  
} 
