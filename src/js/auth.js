window.onload = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("user id: " + firebase.auth().currentUser.uid);
            console.log("user id: " + firebase.auth().currentUser.email);
            const usermail = firebase.auth().currentUser.email;
            document.getElementById("userMail").innerHTML = usermail;
        } else {
            window.location = "index.html";
        }
    });

}

(function($){
    $(function(){
  
      $('.sidenav').sidenav();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  

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