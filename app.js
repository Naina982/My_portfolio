var navbar= document.getElementById("navbar")

var sticky= navbar.offsetTop;

window.onscroll= function(){
myfunction();
}
function myfunction(){
    // if(window.pageYOffset>= sticky)
    if(window.scrollY>20)
    {
        navbar.classList.add("sticky")
        // navbar.style.background="black";
    }
    else{
        navbar.classList.remove("sticky");
                // navbar.style.background="none";

    }

    if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
}


// slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
// navbar toggle

// const navToggle= document.querySelector(".nav-toggle")
// const links= document.querySelector(".menu")

// navToggle.addEventListener("click", function(){
//     links.classList.toggle("show-links");
   
// })


// typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Competative Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: ["Web Developer",  "Competative Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
// });



