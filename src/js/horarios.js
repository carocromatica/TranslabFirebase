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

  fetch(`https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${numberBip}`) 
      .then(function (response) {
          return response.json();
      })

      .then(function (data) {

          const dataBip = Object.values(data) // extrae la data de la api y me extrae solo los valores.


          let amountBip = dataBip[2];
          saldoBip = Number(amountBip.replace(/[$,.]+/g, "")); // tranforma bip a number para 

      })

      .then(function horarios() { 

          let pasaje = document.getElementById("selector").value;

          if (saldoBip <= 619) { 
              saldoFinal = saldoBip;
              document.getElementById("alerta").innerHTML = "Tu saldo final"
              document.getElementById("saldo").innerHTML = "$"+saldoFinal;
              document.getElementById("cargar").innerHTML = "necesitas recargar"
          }

          else if (pasaje == "horario valle") {
              valorPasaje = 620;
              saldoFinal = saldoBip - valorPasaje;
              console.log(saldoFinal);
              document.getElementById("alerta").innerHTML = "Tu saldo final"
              document.getElementById("saldo").innerHTML = "$"+saldoFinal;

          } else if (pasaje == "horario normal") {
              valorPasaje = 680;
              saldoFinal = saldoBip - valorPasaje;
              console.log(saldoFinal);
              document.getElementById("alerta").innerHTML = "Tu saldo final"
              document.getElementById("saldo").innerHTML = "$"+saldoFinal;

          } else if (pasaje == "horario punta") {
              valorPasaje = 760;
              saldoFinal = saldoBip - valorPasaje;
              console.log(saldoFinal);
              document.getElementById("alerta").innerHTML = "Tu saldo final"
              document.getElementById("saldo").innerHTML = "$"+saldoFinal;

          }

      })

      .catch(function (fail) {
          console.log('llame a su servicio técnico', fail)
          document.getElementById("alerta").innerHTML = "saldo no disponible, disculpe las molestias :(";

      })

  

} 

