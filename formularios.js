

function validar() {
    let nom = document.getElementById("nom");
    // let clave = document.getElementById("clave");
    let tel = document.getElementById("tel");
    let msn = document.getElementById("msn");
    let error = false;
    document.getElementById("validar_nom").innerHTML = "&nbsp;";
    // document.getElementById("validar_clave").innerHTML = "&nbsp;";
    document.getElementById("validar_tel").innerHTML = "&nbsp;";
    document.getElementById("validar_msn").innerHTML = "&nbsp;";

    if (nom.value === "") {
        document.getElementById("validar_nom").innerHTML = "Debe completar campo obligatorio";
        error = true;
        nom.focus();
    }

    // if (clave.value.length < 8 || clave.value.length > 8) {
    //     document.getElementById("validar_clave").innerHTML = "Debe completar el campo con 8 digitos";
    //     error = true;
    //     clave.focus();
    // }

    if (tel.value.length < 9 || tel.value.length > 9) {
        document.getElementById("validar_tel").innerHTML = "Son 9 digitos que debe ingresar";
        error = true;
        tel.focus();

    }

    if (msn.value <= 0) {
        document.getElementById("validar_msn").innerHTML = "Completar campo obligatorio";
        error = true;
        msn.focus();

    }

    if (error == false) {
        document.getElementById("nom").value = ""
        document.getElementById("validar_nom").innerHTML = "&nbsp;";
        // document.getElementById("clave").value = ""
        // document.getElementById("validar_clave").innerHTML = "&nbsp;";
        document.getElementById("tel").value = ""
        document.getElementById("validar_tel").innerHTML = "&nbsp;";
        document.getElementById("msn").value = ""
        document.getElementById("validar_msn").innerHTML = "&nbsp;";
        alert('Datos enviados')
    }
    return !error

}


