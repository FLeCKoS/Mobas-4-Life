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

