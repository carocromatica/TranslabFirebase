// Registro
function registerWithFirebase() {
  const userValue=user.value;
  const emailValue = email.value;
  const passwordValue = password.value;

  firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue,userValue)
      .then((users) => {
          firebase.database().ref(`users/${users.user.uid}`).set({ 
              mail: users.user.email, 
              uid: users.user.uid, 
              username: users.user.email, 

          });
          console.log("usuario se creo"); // mail de confirmacion y login
      })
      .catch((error) => {
          console.log("Error de Firebase > Codigo > " + error.code); // alert error
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
          window.location = "home.html";
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