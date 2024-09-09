const registerBtn = document.querySelector(".register-btn");

registerBtn.addEventListener("click", (event) => {
  // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
  // 1. Obtenemos el valor ingresado en el input de email
  // 2. Obtenemos los datos ingresados en el input de password
  // 3. Obtenemos el valor del input radio
  // 4. Obtenemos el valor del input checkbox
  // 5 Validamos si el usuario es mayor de edad. Si no, mostramos
  // un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
  // 6 Vaidamos si el usuario aceptó los términos y condiciones. Si no, mostramos
  // un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
  // 7 Si todo esta correcto, mostramos por consola un objeto con la información
  // ingresada por el usuario.

  const email = document.querySelector('#email-input').value
  const password = document.querySelector('#password-input').value
  const legalAge = document.querySelector('[name=legalAge]:checked')
  if (legalAge==null){
    alert("Debe seleccionar la Edad!")

  }else if(legalAge.value == "false"){
    alert("Debes ser mayor de edad para registrarte en el sitio")
  }else{
    const tycAccepted = document.getElementsByName("termsAndConditions");
    let tycondiciones =[]
    tycAccepted.forEach(function(tyc){
      tycondiciones = tyc.checked
        if (tyc.checked == ""){
          alert(" Debes aceptar los TyCs para registrarte en el sitio")
        }else{
          console.log(`{Email: ${email},  Password: ${password}, legalAge: ${legalAge.value}, tycAccepted: ${tycondiciones} }`)

    }
    })
  }

});

