$(document).ready(()=>{
  

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
