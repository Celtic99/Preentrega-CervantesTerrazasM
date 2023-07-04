// LISTA DE TAREAS 

function Bienvenido(nombre){
    console.log(`Bienvenido ${nombre}.`)
}

(Bienvenido('Usuario'));   


alert("BIENVENID@ A LA LISTA DE TAREAS DEL DIA A DIA");


let tareas = prompt ("Escribi el numero de una tarea:");
let lista="";
if(tareas=="1" || tareas=="2" || tareas=="3" || tareas=="4" || tareas=="5"){
    switch(tareas){
        case "1":
            lista="numero 1";
            break;
            case "2":
                lista="numero 2";
                break;
                case "3":
                    lista="numero 3";
                    break; 
                    case "4":
                        lista="numero 4";
                        break;
                        case "5":
                            lista="numero 5";
                            break;
                            default:
            lista="error";
        }
    }
    
    
    let tarea1= confirm("¿Hiciste la tarea numero "+ lista + "?");
    if (tarea1== true) {
        alert("Buenisimo");
        document.write("Tarea "+ lista + " REALIZADA");}
        else{
            alert("NO TE OLVIDES DE HACER LA TAREA!!");
        }
        
        
        let otratarea= prompt ("¿Realizaste otra tarea SI o NO?");
        
        while(otratarea != "si" && otratarea != "no"){
            prompt("SI o NO");
        }
        
        if(otratarea == "si"){
            let plus= prompt ("Escribi el numero de la otra tarea realizada:");
            document.write("Tarea "+ plus + " REALIZADA");
        }
        
