window.onscroll= function(){
    myfunction();
}

var navbar= document.getElementById("navbar")
// var sticky= navbar.offsetTop;

function myfunction(){
    // if(window.pageYOffset>= sticky)
    if(window.scrollY>10)
    {
        navbar.classList.add("sticky")
        navbar.style.background="black";
    }
    else{
        navbar.classList.remove("sticky");
                navbar.style.background="none";

    }
}

// navbar toggle

const navToggle= document.querySelector(".nav-toggle")
const links= document.querySelector(".menu")

navToggle.addEventListener("click", function(){
    links.classList.toggle("show-links");
   
})