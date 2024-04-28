$(window).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 1,
        nav:true,
        dots: false,
    })

    $("button.donate").click(function(){
        $("#pricing section.top ul").css("display", 'flex')
    })

    $("#pricing section.top ul li a.button").click(function(){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        })
    })

    // qna sub,it
    $("#qna form").on("submit", function (e) {
        e.preventDefault();

        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Your message has been sent successfully",
        })

        var data = $(this).serialize();
        $.ajax({
            type: $(this).method,
            url: $(this).action,
            data: data,
            dataType: "dataType",
            success: function (response) {
              
            }
            
        });
    })
})