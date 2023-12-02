
User = [
  {
    "usuario": "clopez@gmail.com",
    "password": "Casa7890*+",
  },
  {
    "usuario": "clopez2@gmail.com",
    "password": "Admin7890*+",
  },
  {
    "usuario": "clopez3@gmail.com",
    "password": "Admin7890*+",
  }
]



let datica = document.getElementById("loginform")
console.log(datica)

    let passcorreo = false;
    let passlength = false;
    let passletras = false;
    let passmayus = false;
    let passnumeros = false;

datica.addEventListener("input", e =>{
    let pass = datica.password.value;
    let user = datica.user.value;
    let error0 = datica.querySelector("#error0")
    let error1 = datica.querySelector("#error1")
    let error2 = datica.querySelector("#error2")
    let error3 = datica.querySelector("#error3")
    let error4 = datica.querySelector("#error4")
   

    //Validacion de Correo
    if ( user.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ) {
      error0.textContent = "Si es un correo"
      error0.style.color = "green";
      passcorreo =true;
    } else {
      error0.textContent = "No es un correo Permitido"
      error0.style.color = "red";
    }


    //Validacion de longitud
    if ( pass.length >= 8) {
      error1.textContent = "Cumple el requisito de longitud"
      error1.style.color = "green";
      passlength =true;
    } else {
      error1.textContent = "Debe ser mayor a 8 caracteres"
      error1.style.color = "red";
    }
    
    //Validacion de letras
    if ( pass.match(/[A-z]/) ) {
      error2.textContent = "Contiene una letra"
      error2.style.color = "green";
      passletras =true;
    } else {
      error2.textContent = "Debe tener al menos una letra"
      error2.style.color = "red";
    }

    //Validacion letras mayusculas
	  if ( pass.match(/[A-Z]/) ) {
      error3.textContent = "Contiene una letra mayuscula"
      error3.style.color = "green";
      passmayus =true;
	  } else {
      error3.textContent = "Debe contener una letra mayuscula"
      error3.style.color = "red";
	  }  

    //Validacion numeros
	  if ( pass.match(/[0-9].*[0-9]/) ) {
		  error4.textContent = "Contiene dos numeros"
      error4.style.color = "green";
      passnumeros =true;
	  } else {
		  error4.textContent = "No contiene dos numeros"
      error4.style.color = "red";
	  }

    //ingresar(passlength)

})

function limpiar(){
  let user = datica.querySelector("#user");
  let pass = datica.querySelector("#password");

  user.value="";
  pass.value ="";
}

function validaruser(user, pass){

    for(i = 0; i < User.length; i++){
       if(user === User[i].usuario && pass === User[i].password){
          console.log("PERMITE EL INGRESO")
          return true;
        }
    }
    console.log("ACCESO NO PERMITIDO")
    //alert("Usuario o contraseña incorrecto")
    //return false;
    

}


function ingresar() {
  let pass = datica.password.value;
  let user = datica.user.value;
  let mensajeCarga = datica.querySelector("#carga");

  if (passcorreo && passlength && passletras && passmayus && passnumeros) {
      if(validaruser(user, pass)){
        mensajeCarga.innerHTML = "Cargando....";
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            mensajeCarga.innerHTML = "";
            resolve(location.href = "productos.html");
          }, 2000);
        });
      }else{
        alert("Usuario o contraseña incorrecto")
      }
    }else{
    alert("Error de campos de validacion")
    }

}
 

datica.addEventListener("submit", e => {
  e.preventDefault(); // Evitar el envío del formulario por defecto
  ingresar()
    .then(() => console.log("Éxito en la promesa"))
    .catch(error => console.error(error));
});