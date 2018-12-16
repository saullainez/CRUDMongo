
function obtenerUsuarios(){
    $.ajax({
        url: "/personas",
        method: "GET",
        dataType: "json",
        success: function (res) {
            for (var i = 0; i < res.length; i++) {
                $("#usuarios").append(`<pre> id: ${res[i]._id}<br> Nombre: ${res[i].nombre}<br> Edad: ${res[i].edad}</pre>`)
            }

        }
    });
}

obtenerUsuarios();

$("#enviar").click(function () {
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
            $("#respuesta").append(`<pre> id: ${res._id}<br> Nombre: ${res.nombre}<br> Edad: ${res.edad}</pre>`);
            obtenerUsuarios();
        },
        error: function (error) {
            console.error(error);
        }
    });
});