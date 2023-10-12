$("document").ready(function(){
    $("#menuBtn").click(function(){
        $(".nav ul").toggleClass("showNav")
        $(this).toggleClass("fa-times")
    })
})