   
function frames(variable){
    document.getElementById("enframe").src="pages/home.html";
    document.getElementById("enframe").height="650";
    if (variable==1){
        document.getElementById("enframe").src="pages/grupo.html";
        document.getElementById("enframe").height="1100";       
    }
    else if (variable==2){
        document.getElementById("enframe").src="pages/investigadores.html";
        document.getElementById("enframe").height="730";       
    }
    else if (variable==3){
        document.getElementById("enframe").src="pages/tesistas.html";
        document.getElementById("enframe").height="780";       
    }
    else if (variable==4){
        document.getElementById("enframe").src="pages/ayudantes-investigacion.html";
        document.getElementById("enframe").height="550";       
    }
    else if (variable==5){
        document.getElementById("enframe").src="pages/proyectos.html";
        document.getElementById("enframe").height="950";       
    }
    else if (variable==6){
        document.getElementById("enframe").src="pages/publicaciones.html"; 
        document.getElementById("enframe").height="2850";       
    }
    else if (variable==7){
        document.getElementById("enframe").src="pages/preprints.html";
        document.getElementById("enframe").height="1100";       
    }  
    else if (variable==8){
        document.getElementById("enframe").src="pages/graduados-postgrado.html";
        document.getElementById("enframe").height="950";       
    }
    else if (variable==9){
        document.getElementById("enframe").src="pages/graduados-pregrado.html";
        document.getElementById("enframe").height="550";       
    }       
    else if (variable==10){
        document.getElementById("enframe").src="pages/eventos.html";
        document.getElementById("enframe").height="550";       
    }  
    else if (variable==11){
        document.getElementById("enframe").src="pages/contacto.html";
        document.getElementById("enframe").height="550";       
    }  
} 
