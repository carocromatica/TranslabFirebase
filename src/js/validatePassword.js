validatePassword = function (pass) {
    if (pass.length <= 7 || pass.length>=16) { // solo acepta contraseñas con mas de 8 caracteres y hasta 16 caracteres, para q no sea tan largo
        return false;
    }

    if (pass=="asdfghjk"||pass=="qwertyui"||pass=="12345678"||pass=="23456789"){ // verifica que no sean claves fáciles
      return false
    }
    if (pass == "") {
      return false
  }

  const num = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(num.test(pass)){
    
  return false
}

    return true;
}