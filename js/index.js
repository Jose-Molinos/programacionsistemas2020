$(document).ready(() => {
    $.ajax({
        url: 'https://www.el-tiempo.net/api/json/v2/provincias/36',
        success: function (response) {
           console.log(response);
            $('#tiempo').text(response.today.p)
        },
        error: function (err) {
            console.log(err);
            

        }

    });

})