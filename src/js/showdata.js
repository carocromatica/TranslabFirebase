firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in.
      console.log("user id: " + firebase.auth().currentUser.uid);
      console.log("user id: " + firebase.auth().currentUser.email);
      const usermail = firebase.auth().currentUser.email;





firebase.database().ref(`usuarios/${firebase.auth().currentUser.uid}/BIPS/`)
.on("child_added", (nuevaTarjeta) => {

contenido.innerHTML = `

<div id="${nuevaTarjeta}">

<p>${nuevaTarjeta.val().bip}</p>

</div>

` + contenido.innerHTML;


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
