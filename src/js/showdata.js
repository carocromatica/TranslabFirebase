
window.onload = () => {
  //Base de datos para consultar 1 vez
  firebase.database().ref("usuarios").child(currentUser.uid).child("BIPS")
    .once("value")
    .then((tarjetas) => {
      console.log(JSON.stringify(tarjetas))
    })
    .catch((error) => {
      console.log("Database error >" + error);
    });
  
  firebase.database().ref("usuarios").child(currentUser.uid).child("BIPS")
    .on("child_added", (tarjetasBip) => {

      const bipIngresada=firebase.database().ref("usuarios").child(currentUser.uid).child("BIPS").key
      console.log(bipIngresada);
    });
};



function saveBip() { 
  const bip= cardbip.value; 
  const currentUser = firebase.auth().currentUser; // esta indica si estamos logeadas
  firebase.database().ref("usuarios").child(currentUser.uid).child("BIPS").push({ 
    bip, //objeto bip
  });
};
