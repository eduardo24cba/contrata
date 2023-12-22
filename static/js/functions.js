const navbar = document.querySelector("nav");
const servicios = document.getElementById("servicios");
const nosotros = document.getElementById("nosotros");
const clientes = document.getElementById("clientes");
const contacto = document.getElementById("contacto");


function applyFunctions(){
    checkSection();
                
    /*if(servicios.getBoundingClientRect().top < navbar.getBoundingClientRect().height){
        if(navbar.getAttribute("class").includes("navbarTheme"))return;
            navbar.classList.remove("navbarTransparent");
            navbar.classList.add("navbarTheme");
        }
    else{
        if(navbar.getAttribute("class").includes("navbarTransparent"))return;
            navbar.classList.remove("navbarTheme");
            navbar.classList.add("navbarTransparent");
    }
    */
}
function removeClass(links){
    links.forEach((e)=> {if(e.getAttribute("class").includes("active"))e.classList.remove("active")});
}
function checkSection(){
    let links = document.querySelectorAll(".navbar-nav a");
    let size = navbar.getBoundingClientRect().height + 30;
    if(servicios.getBoundingClientRect().top < size && servicios.getBoundingClientRect().bottom > 10){
        if(links[0].getAttribute("class").includes("active"))return;
        removeClass(links);
        links[0].classList.add("active");
    }else if(nosotros.getBoundingClientRect().top < size && nosotros.getBoundingClientRect().bottom > 10){
            if(links[1].getAttribute("class").includes("active"))return;
            removeClass(links);
            links[1].classList.add("active");
    }else if(clientes.getBoundingClientRect().top < size && clientes.getBoundingClientRect().bottom > 10){
            if(links[2].getAttribute("class").includes("active"))return;
            removeClass(links);
            links[2].classList.add("active");
        }
        else if(contacto.getBoundingClientRect().top < size && contacto.getBoundingClientRect().bottom > 10){
            if(links[3].getAttribute("class").includes("active"))return;
            removeClass(links);
            links[3].classList.add("active");
        }
    else{
        removeClass(links);
    }
}
function checkFunctions(){
    //if(servicios.getBoundingClientRect().top < navbar.getBoundingClientRect().height && !navbar.getAttribute("class").includes("navbarTheme")){navbar.classList.remove("navbarTransparent");navbar.classList.add("navbarTheme");}
    checkSection();
    console.log("caso 4")
}
window.addEventListener("scroll", applyFunctions);
window.addEventListener("load", checkFunctions)
