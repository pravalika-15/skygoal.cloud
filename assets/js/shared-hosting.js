$(document).ready(function() {
    $("#color_mode").on("change", function () {
        colorModePreview(this);
    })
});

function colorModePreview(ele) {
    if($(ele).prop("checked") == true){
        $("#hide11").text("₹1400");
        $("#hide22").text("₹4000");
        $("#hide33").text("₹8000");
        $("#hide1").text("₹1120");
        $("#hide2").text("/ Year");
        $("#hide3").text("₹3200");
        $("#hide4").text("/ Year");
        $("#hide5").text("₹6400");
        $("#hide6").text("/ Year");
        $("#image1").style.display = "none";
        $("#image2").style.display = "block";
        

    }
    else if($(ele).prop("checked") == false){
        $("#hide11").text("₹299");
        $("#hide22").text("₹499");
        $("#hide33").text("₹999");
        $("#hide1").text("₹240");
        $("#hide2").text("/ Month");
        $("#hide3").text("₹400");
        $("#hide4").text("/ Month");
        $("#hide5").text("₹800");
        $("#hide6").text("/ Month");
        // $("#image2").style.display = "none";
    }
}