$(document).ready(function(){
    $(window).scroll(function(){
        // sticky user_navBar on scroll script
        if(this.scrollY > 20){
            $('.user_navBar').addClass("sticky");
        }else{
            $('.user_navBar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.user_navBar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/user_navBar script
    $('.menu-btn').click(function(){
        $('.user_navBar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        autoplay: true,
        lazyLoad: true,
        loop: true,
        smartSpeed: 800,

        responsive: {
            0:{
                items: 1,
                autoplayTimeOut: 7000,
                // nav: false
            },
            600:{
                items: 2,
                autoplayTimeOut: 7000,
                // nav: false
            },
            1000:{
                items: 3,
                autoplayTimeOut: 7000,
                // nav: false
            }
        }
    });
});

$('#sendMail').click(function () {
    if($("#FName").val() == ''){
        $("#msg").removeClass("alert-success")
        $("#msg").addClass("alert-danger")
        $("#msg").text("Enter Name");
        $("#msg").show();
        setTimeout(function () {
            $("#msg").empty();
            $("#msg").hide();
        }, 2000);
        return;
    }
    if($("#email").val() == ''){
        $("#msg").removeClass("alert-success")
        $("#msg").addClass("alert-danger")
        $("#msg").text("Enter Email");
        $("#msg").show();
        setTimeout(function () {
            $("#msg").empty();
            $("#msg").hide();
        }, 2000);
        return;
    }
    if($("#subject").val() == ''){
        $("#msg").removeClass("alert-success")
        $("#msg").addClass("alert-danger")
        $("#msg").text("Enter Subject");
        $("#msg").show();
        setTimeout(function () {
            $("#msg").empty();
            $("#msg").hide();
        }, 2000);
        return;
    }
    if($("#Message").val() == ''){
        $("#msg").removeClass("alert-success")
        $("#msg").addClass("alert-danger")
        $("#msg").text("Enter Message");
        $("#msg").show();
        setTimeout(function () {
            $("#msg").empty();
            $("#msg").hide();
        }, 2000);
        return;
    }
    $("#msg").removeClass("alert-danger")
    $("#msg").addClass("alert-success")
    $("#msg").text("Message send successfully");
    $("#msg").show();
    setTimeout(function () {
        $("#msg").empty();
        $("#msg").hide();
        $("#FName").val('');
        $("#email").val('');
        $("#subject").val('');
        $("#Message").val('');
    }, 2000);
});
 