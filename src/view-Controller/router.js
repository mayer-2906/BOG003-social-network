import { componentes } from "../view/index.js";

export const changeView = (route) => {

    console.log(route);
    const container=document.getElementById("container");
    container.innerHTML="";
    switch(route){
        case "#/inicio" :{
            return container.appendChild(componentes.inicio())
        }
        case "#/registro" : {
            return container.appendChild(componentes.registro())
        }
        case "#/timeline" : {
            return container.appendChild(componentes.timeLine())
        }
        case "#/editar" : {
            return container.appendChild(componentes.editar())
        }
        default : {
            return container.appendChild(componentes.errores())
        }
        

    }
};
