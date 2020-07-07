$(document).ready(() => {


    $("#btnDatos").click(() => {
        $("#Datos").show();  
    });
    $("#btnDatos").dblclick(() => {
        $("#Datos").hide();  
    });

    $("#btnExperiencia").click(() => {
        $("#Experiencia").show();
    });
    $("#btnExperiencia").dblclick(() => {
        $("#Experiencia").hide();
    });

    $("#btnFormacion").click(() => {
        $("#Formacion").show();
    });
    $("#btnFormacion").dblclick(() => {
        $("#Formacion").hide();
    });

    $("#btnCursos").click(() => {
        $("#Cursos").show();
        $("Datos").hide
        $("#Experiencia").hide();
        $("#Formacion").hide();
        $("#Informatica").hide();
        $("#OtrosDatos").hide();
        $("#SituacionLaboral").hide();
    });
    $("#btnInformatica").click(() => {
        $("#Informatica").show();
        $("Datos").hide
        $("#Experiencia").hide();
        $("#Formacion").hide();
        $("#Cursos").hide();
        $("#OtrosDatos").hide();
        $("#SituacionLaboral").hide();
    });
    $("#btnOtrosDatos").click(() => {
        $("#OtrosDatos").show();
        $("Datos").hide
        $("#Experiencia").hide();
        $("#Formacion").hide();
        $("#Cursos").hide();
        $("#Informatica").hide();
        $("#SituacionLaboral").hide();
    });
    $("#btnSituacionLaboral").click(() => {
        $("#SituacionLaboral").show();
        $("Datos").hide
        $("#Experiencia").hide();
        $("#Formacion").hide();
        $("#Cursos").hide();
        $("#Informatica").hide();
        $("#OtrosDatos").hide();
    });
})