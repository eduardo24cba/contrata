function changeColor(){
    let ser = document.getElementById("servicios");
    let nav = document.querySelector("nav");
                
    if(ser.getBoundingClientRect().top < nav.getBoundingClientRect().height){
        if(nav.getAttribute("class").includes("navbarTheme"))return;
            nav.classList.remove("navbarTransparent");
            nav.classList.add("navbarTheme");
        }
    else{
        if(nav.getAttribute("class").includes("navbarTransparent"))return;
            nav.classList.remove("navbarTheme");
            nav.classList.add("navbarTransparent");
    }
}
window.addEventListener("scroll", changeColor);
