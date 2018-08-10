firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("user id: " + firebase.auth().currentUser.uid);
        console.log("user id: " + firebase.auth().currentUser.email);
        const usermail = firebase.auth().currentUser.email;





firebase.database().ref(`usuarios/${firebase.auth().currentUser.uid}/BIPS/`)
.on("child_added", (nuevaTarjeta) => {

  saldos.innerHTML = `
  
  <div id="${nuevaTarjeta}">
  
  <p>${nuevaTarjeta.val().bip}</p>

  </div>

` + saldos.innerHTML;


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


document.getElementById("btn").onclick = function verSaldo() { // cuando se hace click en el boton, despliega toda la info que viene a continuación

    // para ingresar bipnumber desde input 
    if (numberBip = document.getElementById("bipCard").value) {
        console.log(numberBip); // verifica si carga el numero, solo para control interno

    } else {
        numberBip = document.getElementById("selectorBip").value; // sacaremos el numero de bip desde un selector
        serieBip = numberBip; // el valor del selector lo guardaremos en una nueva variable
        console.log(serieBip);// verifica si carga el numero, solo para control interno

        for (i = 0; i < serieBip.length; i++) { // recorre el selector segun el valor que se encuentre en [i] guardará el numero de serie
            numberBip = serieBip;
        }
    }

    //////////////////// despliegue de info ///////////////////////

    fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numberBip}`) // fetch del infiernoooooooo dsadhgsadhsagfd!!!!
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            const dataBip = Object.values(data) // extrae la data de la api y me extrae solo los valores. 

            let amountBip = dataBip[2];
            document.getElementById("databip0").innerHTML = 'SALDO TOTAL'
            document.getElementById("databip2").innerHTML = 'saldo ' + amountBip;
            saldoBip = Number(amountBip.replace(/[$,.]+/g, "")); // tranforma bip a number para calcular saldo

        })

        .catch(function (fail) {
            console.log('llame a su servicio técnico', fail)
            document.getElementById("alerta").innerHTML = "saldo no disponible, disculpe las molestias :(";

        })

    // fin fetch

} // fin llamada boton
