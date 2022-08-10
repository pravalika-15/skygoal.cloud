$(document).ready(function() {
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
});

function colorModePreview(ele) {
    if($(ele).prop("checked") == true){
        $("#hide1").text("₹1120");
        $("#hide2").text("/ Year");
        $("#hide3").text("₹3200");
        $("#hide4").text("/ Year");
        $("#hide5").text("₹6400");
        $("#hide6").text("/ Year");
    }
    else if($(ele).prop("checked") == false){
        $("#hide1").text("₹240");
        $("#hide2").text("/ Month");
        $("#hide3").text("₹400");
        $("#hide4").text("/ Month");
        $("#hide5").text("₹800");
        $("#hide6").text("/ Month");
    }
}