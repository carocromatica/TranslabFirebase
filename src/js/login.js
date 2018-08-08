function registerWithFirebase() {
    const name = username.value;
    const mail = email.value;
    const pass = password.value;

    if (mail.indexOf('@') < 0) {
        alert("Ingresa email válido");
        return false;
    }

    const tokens = mail.split('@');
    if (tokens.length != 2) { //Verifica que el correo SÓLO tenga 2 partes
        alert("Ingresa email válido");
        return false; //Si es distinto de 2, será false
    }

    if (tokens[1].indexOf('.') < 0) {// si no tiene puntos
        alert("Ingresa email válido");
        return false;
    }

    if (tokens[0] == "") {// si no existe algo antes de la @
        alert("Ingresa email válido");
        return false
    }

    if (mail == "") {
        alert("Ingresa email válido");
        return false
    }

    const domTokens = tokens[1].split('.');
    if (domTokens.length != 2) {
        alert("Ingresa email válido");
        return false;
    }
    if (domTokens[0].length < 1) {
        alert("Ingresa email válido");
        return false
    }
    if (domTokens[1].length < 1) {
        alert("Ingresa email válido");
        return false
    }
    // para detectar caracteres raros
    const rejected = "!#$%^&*()+=-[]\\\';,/{}|\":<>?"
    for (var i = 0; i < mail.length; i++) { // se parece al data dashboard :D
        if (rejected.indexOf(mail.charAt(i)) != -1) {
            alert("Ingresa email válido");
            return false;
        }
    }

    firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then((userData) => {
            firebase.database().ref(`usuarios/${userData.user.uid}`).set({
                username: name,
                mail: userData.user.email,
                uid: userData.user.uid,
            });
            console.log("usuario se creo")
            window.location = "../src/home.html";

        })


        .catch((error) => {
            console.log("Error de Firebase > Codigo > " + error.code);
            console.log("Error de Firebase > Mensaje > " + error.message);

        });


    //Login
    function loginWithFirebase() {
        const emailValue = email.value;
        const passwordValue = password.value;

        firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
            .then(() => {
                console.log("Usuario inició sesión con éxito");
                window.location = "../src/home.html";

            })
            .then(() => {
                if (passwordValue.length <= 7) {
                    alert("Revisa todos los datos ingresados. Hubo un problema con el registro de Facebook.");

                }
            })
            .catch((error) => {
                console.log("Error de firebase > Código > " + error.code);
                console.log("Error de firebase > Mensaje > " + error.message);
                alert("Revisa todos los datos ingresados. Correo y contraseña son obligatorios.");
            });
    }
}

