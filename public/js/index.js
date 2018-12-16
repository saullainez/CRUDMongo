/*$("#formulario").submit(function (event) {
    event.preventDefault();
    enviar();
});

function enviar(){
    alert("Enviar");
}*/

$("#enviar").click(function () {
    //alert("Enviar");
    var data = {
        nombre: $("#nombre").val(),
        edad: $("#edad").val()
    };
    $.ajax({
        url: "/personas/crear",
        method: "POST",
        data: data,
        dataType: "json",
        success: function (res) {
            console.log(res);
            $("#respuesta").append(`<pre> id: ${res._id}<br> Nombre: ${res.nombre}<br> Edad: ${res.edad}</pre>`);
        },
        error: function (error) {
            console.error(error);
        }
    });
});