firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    let usermail = firebase.auth().currentUser.email;
    document.getElementById("usermail").innerHTML = usermail;

    firebase.database().ref(`usuarios/${firebase.auth().currentUser.uid}/BIPS/`)
      .on("child_added", (nuevaTarjeta) => {

        contenido.innerHTML = `
        <div class="col m4 offset-m4 s12 white profile-margin">
        <p>${nuevaTarjeta.val().bip}</p>
        </div>
        `     
        + contenido.innerHTML;

      });

  } else {
    window.location = "index.html";
  }
});


function saveBip() {
  const bip = cardbip.value;
  const currentUser = firebase.auth().currentUser; // esta indica si estamos logeadas
  const bipKey = firebase.database().ref("usuarios").child(currentUser.uid).child("BIPS").push().key;

  firebase.database().ref(`usuarios/${currentUser.uid}/BIPS/${bipKey}`).set({
    bip
  });

};
