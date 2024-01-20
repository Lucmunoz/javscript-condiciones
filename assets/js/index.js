//Obtengo el nombre de la pagina abierta
var path = window.location.pathname;
var page = path.split("/").pop();

//Ejercicio 1
//Ejecuto lineas de codigo unicamente si la pagina "Ejercicio1" está abierta
if(page === "Ejercicio1.html") 
{
    
    let borde = false
    const RootImagen=document.querySelector("#imagen_ejercicio_1");

    RootImagen.addEventListener("click",function(e){
        if(borde===true){
            borde=false; 
            //console.log("oculto borde")
            RootImagen.style.border = "none";
        }else{
            borde=true;
           //console.log("muestro borde");
            RootImagen.style.border = "solid red 2px";    
        }
    });
}

//Ejercicio 2
if(page === "Ejercicio2.html") 
{

    const RootBotonSticker=document.querySelector("#boton-sticker");
    const RootAlertaSticker=document.querySelector("#alerta-sticker");
    
    RootBotonSticker.addEventListener("click", () => {
        let cantidad1 = Number(document.querySelector("#input-sticker-1").value);
        let cantidad2 = Number(document.querySelector("#input-sticker-2").value);
        let cantidad3 = Number(document.querySelector("#input-sticker-3").value);
        
        if(isNaN(cantidad1) || cantidad1<0){
            RootAlertaSticker.style.color = "red";  
            RootAlertaSticker.innerHTML = "Por favor, intenta ingresar un valor correcto en cantidad 1"
            return
        }
        if(isNaN(cantidad2)|| cantidad2<0){
            RootAlertaSticker.style.color = "red";  
            RootAlertaSticker.innerHTML = "Por favor, intenta ingresar un valor correcto en cantidad 2"
            return
        }
        if(isNaN(cantidad3)|| cantidad3<0){
            RootAlertaSticker.style.color = "red";  
            RootAlertaSticker.innerHTML = "Por favor, intenta ingresar un valor correcto en cantidad 3"
            return
        }
    
        let suma = cantidad1 + cantidad2 + cantidad3;
        
        if (suma > 10) {
            RootAlertaSticker.style.color = "red";  
            RootAlertaSticker.innerHTML = "Lamentablemente llevas mas de 10 stickers. Intenta reducir alguna de las cantidades ingresadas" 
        } else{
            if(suma!=0){
                RootAlertaSticker.style.color = "lightgreen";  
                RootAlertaSticker.innerHTML = "Llevas "+ suma + " Stickers"
            }else{
                RootAlertaSticker.style.color = "red";  
                RootAlertaSticker.innerHTML = "¡No has ingresado ninguna cantidad!"
            }

        }
    });
}



//Ejercicio 3
if(page === "Ejercicio3.html") 
{
    const RootBotonPassword=document.querySelector("#boton-password");
    const RootAlertaPassword=document.querySelector("#alerta-password");

    RootBotonPassword.addEventListener("click", () => {

        let numero1 = document.querySelector("#selector-1").value;
        let numero2 = document.querySelector("#selector-2").value;
        let numero3 = document.querySelector("#selector-3").value;

        const password = numero1 + numero2 + numero3;

        if (password == "911"){
            RootAlertaPassword.style.color = "lightgreen";  
            RootAlertaPassword.innerHTML = "¡Password 1 correcto!"
        }else if(password == "714"){
            RootAlertaPassword.style.color = "lightgreen";  
            RootAlertaPassword.innerHTML = "¡Password 2 es correcto!"
        }else{
            RootAlertaPassword.style.color = "red";  
            RootAlertaPassword.innerHTML = "¡Contraseña incorrecta. Intente denuevo!"
        } 

    });

}