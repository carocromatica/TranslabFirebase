

window.onload = () => {
  //Base de datos para consultar 1 vez
  firebase.database().ref(`usuarios/${currentUser.uid}/BIPS/${bipKey}`)
    .once("value")
    .then((tarjetas) => {
      console.log(JSON.stringify(tarjetas))
    })
    .catch((error) => {
      console.log("Database error >" + error);
    });
  
    firebase.database().ref("publicaciones")
    .on("child_added", (nuevaTarjeta) => {
        contenido.innerHTML = `
        
                       <p>${nuevaTarjeta.key}<p>
                       <p>${nuevaTarjeta.bip}<p>>
        

    ` + contenido.innerHTML;
    });

}


function saveBip() {
  const bip = cardbip.value;
  const currentUser = firebase.auth().currentUser; // esta indica si estamos logeadas
  const bipKey = firebase.database().ref("usuarios").child(currentUser.uid).child("BIPS").push().key;

  firebase.database().ref(`usuarios/${currentUser.uid}/BIPS/${bipKey}`).set({
    bip,
  });

};
