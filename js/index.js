$(document).ready(() => {
    $.ajax({
        url:
            "https://www.el-tiempo.net/api/json/v2/provincias/36/municipios/36057",
        success: function (respuesta) {
            console.log(respuesta);
            $("#tiempo").text(
                "Estado del cielo: " + respuesta.stateSky.description
            );
            $("#temperatura-min").text(
                "Temperatura minima: " + respuesta.temperaturas.min + " ºC"
            );
            $("#temperatura-max").text(
                "Temperatura maxima: " + respuesta.temperaturas.max + " ºC"
            );
        },
        error: function () {
            console.log("No se ha podido obtener la información");
        },
    });
});
