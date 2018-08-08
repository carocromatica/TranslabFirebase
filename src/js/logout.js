window.onload = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("user id: " + firebase.auth().currentUser.uid);
        
          
        } else {
            window.location = "index.html";
        }
    });

}

//Logout

function logoutWithFirebase() {
    firebase.auth().signOut()
        .then(() => {
            console.log("Sesion finalizada")
            window.location = "index.html";
        })
        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code)
            console.log("Error de Firebase > Mensaje > " + error.message)
        });
}