$(document).ready(()=>{
    //var nombre=prompt("Introduce tu nombre: ");
   // $("#nombre").text(nombre)//

    $("#btnFormacion").click(()=>{
        $("#formacion").show();
        $("#experiencia").hide();
        $("#otros").hide();
    });
    $("#btnExperiencia").click(()=>{
        $("#experiencia").show();
      $("#formacion").hide();
      $("#otros").hide();
    });
    $("#btnOtros").click(()=>{
        $("#experiencia").hide();
      $("#formacion").hide();
      $("#otros").show();
    });
})
