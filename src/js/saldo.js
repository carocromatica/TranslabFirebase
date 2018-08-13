firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("user id: " + firebase.auth().currentUser.uid);
        console.log("user id: " + firebase.auth().currentUser.email);
     
        firebase.database().ref(`usuarios/${firebase.auth().currentUser.uid}/BIPS/`)
            .on("child_added", (nuevaTarjeta) => {
                selectorBip.innerHTML =
                `<option>${nuevaTarjeta.val().bip}</option> `
                + selectorBip.innerHTML;
            });
    } else {
        window.location = "index.html";
    }

});
let saldoBip; // salgo actual del usuario
let saldoFinal; // saldo al que se le resta valor del pasaje
let valorPasaje; // cuando el usuario selecciona segun horario
let numberBip; // numero de serie ingresado por el usuario
let serieBip; // numero de serie bip en selector


// disableInput funciona
function disableInput() {
    if (document.getElementById("selectorBip").onclick) {
        document.getElementById("bipCard").disabled = true;
    }
}

document.getElementById("btnCalculo").onclick = function verSaldo() { 
    
    // para ingresar bipnumber desde input 
    if (numberBip = document.getElementById("bipCard").value) {

    } else {
        numberBip = document.getElementById("selectorBip").value; // sacaremos el numero de bip desde un selector
        serieBip = numberBip; // el valor del selector lo guardaremos en una nueva variable
   
        for (i = 0; i < serieBip.length; i++) { // recorre el selector segun el valor que se encuentre en [i] guardará el numero de serie
            numberBip = serieBip;
        }
    }

    //////////////////// despliegue de info ///////////////////////

    fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numberBip}`) 
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            const dataBip = Object.values(data) 
            let amountBip = dataBip[2];
            document.getElementById("databip0").innerHTML = 'SALDO TOTAL'
            document.getElementById("databip2").innerHTML = 'saldo ' + amountBip;
            saldoBip = Number(amountBip.replace(/[$,.]+/g, "")); 

        })

        .catch(function (fail) {
            console.log('llame a su servicio técnico', fail)
            document.getElementById("alerta").innerHTML = "saldo no disponible, disculpe las molestias :(";

        })

 

} 
