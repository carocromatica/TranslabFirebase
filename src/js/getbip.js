let numberBip;
let saldoBip;

function calcularTarifa(numberBip) {
  fetch(`http://www.psep.cl/api/Bip.php?&numberBip=${numberBip}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const dataBip = Object.values(data) // extrae la data de la api y me extrae solo los valores. 
      let amountBip = dataBip[2];
      console.log(amountBip)
      saldoBip = Number(amountBip.replace(/[$,.]+/g, "")); // tranforma bip a number para calcular saldo
      console.log(numberBip)
      console.log(saldoBip)
    })
    .catch(function () {
      console.log('fallo carga')
    })
}

function horarios(pasaje) { 
  if (saldoBip <= 619) { 
    console.log("tu saldo final es: $" + saldoBip + " necesitas recargar")
  } else if (pasaje == "valle") {
    valorPasaje = 620;
    saldoFinal = saldoBip - valorPasaje;
    console.log("te quedarán $" + saldoFinal);
  } else if (pasaje == "normal") {
    valorPasaje = 680;
    saldoFinal = saldoBip - valorPasaje;
    console.log("te quedarán $" + saldoFinal);
  } else if (pasaje == "punta") {
    valorPasaje = 760;
    saldoFinal = saldoBip - valorPasaje;
    console.log("te quedarán $" + saldoFinal);
  }
}

