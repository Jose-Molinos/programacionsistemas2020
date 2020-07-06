$(document).ready(()=>{
    $.ajax({
        url: "https://www.el-tiempo.net/api/json/v2/home";
        success:function (response){
           console.log(response);
        },
        eeror:function (err) {
            console.error();  
        }
        
        
    });

})