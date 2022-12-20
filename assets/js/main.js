const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){

    $(".nav-link").click(function(){
        var gato = this.hash

        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top
            },
            1500
        )
    })

})


$(function(){

    $(window).scroll(function(){
        if ($('#menu').offset().top > 300){
            $('#menu').addClass('bg-dark');
        } else {
            $('#menu').removeClass('bg-dark');
        }
    });



    $('.card-title').click(function(){
        $('.card-text').toggle()
    })



})