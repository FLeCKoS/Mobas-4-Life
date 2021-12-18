var vNombre = "";
var vEmail = "";
var vTelefono = "";


/* var obtenersrc = document.getElementById('osrc1'),
    src = obtenersrc.getElementsByTagName('img')[0].src;

/* alert(src); */

//http://127.0.0.1:5500/IMG/Wild%20rift/Ahri_ChampThumb.jpg

/*let textosrc = src;
let result = textosrc.replace("http://127.0.0.1:5500",".."); */



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

function CopiarImagen_ocho(){

    var tempImg = $("#Imagen_ocho").attr("src");
    var imgcard = $("#img_temp").attr("src");
  
    $("#img_temp").attr("src", tempImg);
  
}

function CopiarImagen_seis(){

    var tempImg = $("#Imagen_seis").attr("src");
    var imgcard = $("#img_temp").attr("src");
  
    $("#img_temp").attr("src", tempImg);
  
}

function CopiarImagen_siete(){

    var tempImg = $("#Imagen_siete").attr("src");
    var imgcard = $("#img_temp").attr("src");
    
  
    $("#img_temp").attr("src", tempImg);
  
}

function CopiarImagen_cinco(){

    var tempImg = $("#Imagen_cinco").attr("src");
    var imgcard = $("#img_temp").attr("src");
    
  
    $("#img_temp").attr("src", tempImg);
  
}

function CopiarImagen_cuatro(){

    var tempImg = $("#Imagen_cuatro").attr("src");
    var imgcard = $("#img_temp").attr("src");
    
  
    $("#img_temp").attr("src", tempImg);
  
}

function CopiarImagen_tres(){

    var tempImg = $("#Imagen_tres").attr("src");
    var imgcard = $("#img_temp").attr("src");
    
  
    $("#img_temp").attr("src", tempImg);
  
}

function CopiarImagen_dos(){

    var tempImg = $("#Imagen_dos").attr("src");
    var imgcard = $("#img_temp").attr("src");
    
  
    $("#img_temp").attr("src", tempImg);
  
}

function CopiarImagen_uno(){

    var tempImg = $("#Imagen_uno").attr("src");
    var imgcard = $("#img_temp").attr("src");
    
  
    $("#img_temp").attr("src", tempImg);
  
}




function fnCrearTarjetas() {
    vNombre = document.getElementById("nombre").value;
    vEmail = document.getElementById("email").value;
    vTelefono = document.getElementById("telefono").value;
    var imgcard = $("#img_temp").attr("src");



    var imgTarjeta = imgcard;
    var titleTarjeta = "Nueva Tarjeta";
    var textTarjeta = "Some quick example text to build on the card title and make up the bulk of the card's content.";

    var objetoHtml = `<div class="crear_card" style="width: 19rem; margin-top:15px; box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;">` +
        `<img src="` + imgTarjeta + `" class="img_card" alt="..." >` +
        `<div class="card_body">` +
        `<h3 class="card-title">`+ "Usuario: " + vNombre + `</h3>` +
        `<p class="card_text">`+ "Email: " + vEmail + `</p>` +
        `<p class="card_text">`+ "Comentario: " + vTelefono + `</p>` +
        
        `</div>` +
        `</div>`;


    $("#idTarjetas").append(objetoHtml)

    //alert("todo ok")
}