$(document).ready(function(){
    $("#tab1").click(function(){
        $("#presentation").show();
        $("#menu").hide();
        $("#rien").hide();
        $("#presentation").addClass("active");
        $("#tab1").addClass("block");
    });
    $("#tab2").click(function(){
        $("#presentation").hide();
        $("#menu").show();
        $("#rien").hide();
        $("#menu").addClass("active");
        $("#tab2").addClass("block");
    });
    $("#tab3").click(function(){
        $("#presentation").hide();
        $("#menu").hide();
        $("#rien").show();
        $("#rien").addClass("active");
        $("#tab3").addClass("block");
    });
});