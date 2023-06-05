


let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");


window.addEventListener("scroll" , () => {
    header.classList.toggle("shadow " , window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};
window.onscroll = () => {
    navbar.classList.removee("active");

}

//darkmode / light mode

let  darkmode = document.querySelector("#darkmode");

darkmode.onclick=() => {
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon" , "bx-sun");
        darkmode.body.classList.add("active");

    }
    else {
        darkmode.classList.replace("bx-sun" , "bx-moon");
        darkmode.body.classList.remove("active");

    }
}
