$(document).ready(()=>{
    
    $("#btnFormacion").click(()=>{
        $("#Formacion").show()
        $("#Experiencia").hide();
        $("#Otros").hide();
    })
    $("#btnExperiencia").click(()=>{
        $("#Experiencia").show()
        $("#Formacion").hide();
        $("#Otros").hide();
    })
    $("#btnOtros").click(()=>{
        $("#Otros").show()
        $("#Formacion").hide();
        $("#Experiencia").hide();
    })
   
})

