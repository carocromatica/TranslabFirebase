firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      // User is signed in.
      console.log("user id: " + firebase.auth().currentUser.uid);
      console.log("user id: " + firebase.auth().currentUser.email);

firebase.database().ref(`usuarios/${firebase.auth().currentUser.uid}/BIPS/`)
.on("child_added", (nuevaTarjeta) => {

  selectorBip.innerHTML = 
  `<option>${nuevaTarjeta.val().bip}</option>` 
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

document.getElementById("btn").onclick = function calcularTarifa() { 

  numberBip = document.getElementById("selectorBip").value; 
  serieBip = numberBip; // el valor del selector lo guardaremos en una nueva variable

  for (i = 0; i < serieBip.length; i++) { 
      numberBip = serieBip;
  }

  //////////////////// despliegue de info ///////////////////////

  fetch(`http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numberBip}`) 
      .then(function (response) {
          return response.json();
      })

      .then(function (data) {

          const dataBip = Object.values(data) // extrae la data de la api y me extrae solo los valores.

          let numberBip = dataBip[0];
          document.getElementById("databip").innerHTML = 'numero de bip ' + numberBip;

          let statusBip = dataBip[1];
          document.getElementById("databip1").innerHTML = 'Status ' + statusBip;

          let amountBip = dataBip[2];
          document.getElementById("databip2").innerHTML = 'saldo ' + amountBip;
          saldoBip = Number(amountBip.replace(/[$,.]+/g, "")); // tranforma bip a number para calcular saldo

          let dayBip = dataBip[3];
          document.getElementById("databip3").innerHTML = 'fecha de carga ' + dayBip;

      })

      .then(function horarios() { 

          let pasaje = document.getElementById("selector").value;

          if (saldoBip <= 619) { // cuando no hay plata pal pasajeeeeeeeeeeee :al fiscalizador le gusta esto:
              document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoBip + " necesitas recargar";
          }

          else if (pasaje == "horario valle") {
              valorPasaje = 620;
              saldoFinal = saldoBip - valorPasaje;
              console.log(saldoFinal);
              document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

          } else if (pasaje == "horario normal") {
              valorPasaje = 680;
              saldoFinal = saldoBip - valorPasaje;
              console.log(saldoFinal);
              document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

          } else if (pasaje == "horario punta") {
              valorPasaje = 760;
              saldoFinal = saldoBip - valorPasaje;
              console.log(saldoFinal);
              document.getElementById("alerta").innerHTML = "tu saldo final es: $" + saldoFinal;

          }

      })

      .catch(function (fail) {
          console.log('llame a su servicio técnico', fail)
          document.getElementById("alerta").innerHTML = "saldo no disponible, disculpe las molestias :(";

      })

  

} 

