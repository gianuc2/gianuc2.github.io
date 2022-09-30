   
function frames(variable){
    document.getElementById("enframe").src="pages/home.html";
    document.getElementById("enframe").height="500";
    if (variable==1){
        document.getElementById("enframe").src="pages/home.html";
        document.getElementById("enframe").height="500";       
    }
    else if (variable==2){
        document.getElementById("enframe").src="pages/investigadores.html";
        document.getElementById("enframe").height="800";       
    }
    else if (variable==3){
        document.getElementById("enframe").src="pages/tesistas-actuales.html";
        document.getElementById("enframe").height="700";       
    }
    else if (variable==4){
        document.getElementById("enframe").src="pages/graduados.html";
        document.getElementById("enframe").height="700";       
    }
    else if (variable==5){
        document.getElementById("enframe").src="pages/proyectos.html";
        document.getElementById("enframe").height="800";       
    }
    else if (variable==6){
        document.getElementById("enframe").src="pages/publicaciones.html"; 
        document.getElementById("enframe").height="1400";       
    }
    else if (variable==7){
        document.getElementById("enframe").src="pages/preprints.html";
        document.getElementById("enframe").height="600";       
    }  
    else if (variable==8){
        document.getElementById("enframe").src="pages/seminario-don-hubert.html";
        document.getElementById("enframe").height="700";       
    }  
    else if (variable==9){
        document.getElementById("enframe").src="pages/contacto.html";
        document.getElementById("enframe").height="500";       
    }  
} 
