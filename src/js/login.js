function registerWithFirebase() {
  const name = username.value;
  const mail = email.value;
  const pass = password.value;

  firebase.auth().createUserWithEmailAndPassword(mail, pass)
      .then((userData) => {
          firebase.database().ref(`usuarios/${userData.user.uid}`).set({
              username: name,
              mail: userData.user.email,
              uid: userData.user.uid,
          });
          console.log("usuario se creo")
          window.location = "../src/home.html";

      })
      .catch((error) => {
          console.log("Error de Firebase > Codigo > " + error.code);
          console.log("Error de Firebase > Mensaje > " + error.message);

      });
}

//Login
function loginWithFirebase() {
  const emailValue = email.value;
  const passwordValue = password.value;

  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
      .then(() => {
          console.log("Usuario inició sesión con éxito");
          window.location = "../src/home.html";
         
      })
      .then(() => {
          if (passwordValue.length <= 7) {
              alert("Revisa todos los datos ingresados. Hubo un problema con el registro de Facebook.");

          }
      })
      .catch((error) => {
          console.log("Error de firebase > Código > " + error.code);
          console.log("Error de firebase > Mensaje > " + error.message);
          alert("Revisa todos los datos ingresados. Correo y contraseña son obligatorios.");
      });
}

