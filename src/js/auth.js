

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