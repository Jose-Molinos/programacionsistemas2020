$(document).ready(()=>{
    $.ajax({
        url: "https://www.el-tiempo.net/api/json/v2/home",
        success:function (response){
           console.log(response);
        },
        error:function (err) {
            console.error();  
        }
        
        
    });

})