$(document).ready(()=>{
    var fecha="hoy";
    $.ajax({
        url:'https://www.el-tiempo.net/api/json/v2/provincias/36',
        success:function (response) {
            console.log(response);
            $('#tiempo').text(response.today.p)
            $('#selectDaySpan').text("mañana")
            fecha="mañana"
        },
        error:function(err) {
            console.log(err);
        }
    });
    $('#selectDay').click((e)=>{
        e.preventDefault();
        $.ajax({
            url:'https://www.el-tiempo.net/api/json/v2/provincias/36',
            success:function (response) {
                console.log(response);
                if(fecha=="hoy"){
                    $('#tiempo').text(response.today.p)
                }else{
                    $('#tiempo').text(response.tomorrow.p)
                }
                
                $('#selectDaySpan').text("hoy")
                fecha="hoy";
            },
            error:function(err) {
                console.log(err);
            }
        });
    })


})