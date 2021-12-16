document.getElementById("nav_def").addEventListener("click", mostrar_definicion);
document.getElementById("btn_i_def").addEventListener("click", ocultar_definicion);
document.getElementById("nav_moba").addEventListener("click", mostrar_moba);
document.getElementById("btn_i_moba").addEventListener("click", ocultar_moba);
document.getElementById("nav_rol").addEventListener("click", mostrar_roles);
document.getElementById("btn_i_roles").addEventListener("click", ocultar_roles);
document.getElementById("nav_otr").addEventListener("click", mostrar_otr_roles);
document.getElementById("btn_i_otros").addEventListener("click", ocultar_otr_roles);

function mostrar_definicion() {
    Def_moba.style.display = "block";
}

function ocultar_definicion() {
    Def_moba.style.display = "none";
}

function mostrar_moba() {
    Princ_moba.style.display = "block";

}

function ocultar_moba() {
    Princ_moba.style.display = "none";
}

function mostrar_roles() {
    Roles.style.display = "block";

}

function ocultar_roles() {
    Roles.style.display = "none";
}

function mostrar_otr_roles() {
    otr_roles.style.display = "block";

}

function ocultar_otr_roles() {
    otr_roles.style.display = "none";
}

/*Inicializar Variables*/
var vNombre = "";
var vEmail = "";
var vTelefono = "";


function mostarAlert() {

    var validaInput = true;

    /*Establecer Variables*/
    vNombre = document.getElementById("nombre").value;
    vEmail = document.getElementById("email").value;
    vTelefono = document.getElementById("telefono").value;

    //Validando mi primer input
    if (vNombre.length === 0) {
        alert("Debe ingresar un nombre");
        validaInput = false
    }
    //Validando mi segundo input
    if (vEmail.length === 0) {
        alert("Debe ingresar un correo electronico");
        validaInput = false
    }
    //Validando mi tercer input
    if (vTelefono.length === 0) {
        alert("Debe ingresar un comentario");
        validaInput = false
    }

    if (validaInput == true) {
        alert(vNombre + ", con el siguiente correo " + vEmail + " gracias por tu comentario  ");
    }
}

function fnCrearTarjetas() {
    vNombre = document.getElementById("nombre").value;
    vEmail = document.getElementById("email").value;
    vTelefono = document.getElementById("telefono").value;



    var imgTarjeta = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEki8yUD2ErCLg6yZUIgTDAphf9i43vlmUP-dGMxQttnJ4ZPjDgH3Oa_2mYO5DVpm1o8&usqp=CAU";
    var titleTarjeta = "Nueva Tarjeta";
    var textTarjeta = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    var objetoHtml = `<div class="card" style="width: 19rem; margin-top:15px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;">` +
        `<img src="` + imgTarjeta + `" class="card-img-top" alt="...">` +
        `<div class="card-body">` +
        `<h5 class="card-title">` + vNombre + `</h5>` +
        `<p class="card-text" style="color:black;">` + vEmail + `</p>` +
        `<p class="card-text" style="color:black;">` + vTelefono + `</p>` +
        `<a href="../Personajes/Arena of Valor.html" class="btn btn-primary">Refrescar</a>` +
        `</div>` +
        `</div>`;


    $("#idTarjetas").append(objetoHtml)

    //alert("todo ok")
}