function sendText() { 
  const bip= cardbip.value; 
  const currentUser = firebase.auth().currentUser; // esta indica si estamos logeadas
  firebase.database().ref("usuarios").child(currentUser.uid).child("BIPS").push({ 
    bip, 
  });
};



 
     
 
