function login() {

    let user = document.getElementById("user");
    let pass = document.getElementById("password");
    let error = document.getElementById("errores");
    let vlcorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(user)
    if(user.value.match(vlcorreo)){
        console.log(user)
        error.innerHTML="Correo correcto"
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(location.href="productos.html");
            }, 3000);
          });

    }else{
        error.innerHTML="Correo incorrecto"

    }

    /*
    if(input.length > 20){
        error.innerHTML = "Puede recibir maximo 20 caracteres";
        error.style.color = "red";
    }else{
  
      let invertida = input.split('').reverse().join('').toLowerCase();
      console.log(invertida);
      error.innerHTML = invertida;
    }
    */
  
  }