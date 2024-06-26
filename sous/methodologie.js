
const root = document.documentElement;
let dark = true;
let toggle_theme = document.querySelectorAll(".toggle-theme");

function Changetheme() {
    
    if(dark){

        dark=false;
        root.style.setProperty("--theme-color-page","#fff");
        root.style.setProperty("--sombre-them","#0f172a");
        root.style.setProperty("--color-text","#333");
        root.style.setProperty("--shadow","rgb(0,0,0,0.4)");
        root.style.setProperty("--color-hover","#cccccc86")
        toggle_theme.forEach(btn => {
            btn.innerHTML = `<ion-icon name="moon-outline"></ion-icon>`
        })
        

    }else{
        dark=true;
        root.style.setProperty("--theme-color-page","#0f172a");
        root.style.setProperty("--sombre-them","#fff");
        root.style.setProperty("--color-text","#ffffffe3");
        root.style.setProperty("--shadow","rgba(255, 255, 255, 0.8)");
        root.style.setProperty("--color-hover","#524f4f63")
        toggle_theme.forEach(btn => {
            btn.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`
        })
    }
}

const sous_etape = document.querySelector(".sous_etape");
let btn_toggle = document.querySelector(".btn-toggle");
 
function removeActive() {
    sous_etape.classList.toggle("active");
    btn_toggle.classList.toggle("active")
}

const sous_etape1 = document.querySelector(".sous_etape1");
let btn_toggle1 = document.querySelector(".btn-toggle1");
 
function removeActive1() {
    sous_etape1.classList.toggle("active");
    btn_toggle1.classList.toggle("active")
}

const sous_etape2 = document.querySelector(".sous_etape2");
let btn_toggle2 = document.querySelector(".btn-toggle2");
 
function removeActive2() {
    sous_etape2.classList.toggle("active");
    btn_toggle2.classList.toggle("active")
}

const sous_etape3 = document.querySelector(".sous_etape3");
let btn_toggle3 = document.querySelector(".btn-toggle3");
 
function removeActive3() {
    sous_etape3.classList.toggle("active");
    btn_toggle3.classList.toggle("active")
}

const sous_etape4 = document.querySelector(".sous_etape4");
let btn_toggle4 = document.querySelector(".btn-toggle4");
 
function removeActive4() {
    sous_etape4.classList.toggle("active");
    btn_toggle4.classList.toggle("active")
}

const sous_etape5 = document.querySelector(".sous_etape5");
let btn_toggle5 = document.querySelector(".btn-toggle5");
 
function removeActive5() {
    sous_etape5.classList.toggle("active");
    btn_toggle5.classList.toggle("active")
}

const sous_etape6 = document.querySelector(".sous_etape6");
let btn_toggle6 = document.querySelector(".btn-toggle6");
 
function removeActive6() {
    sous_etape6.classList.toggle("active");
    btn_toggle6.classList.toggle("active")
}

const sous_etape7 = document.querySelector(".sous_etape7");
let btn_toggle7 = document.querySelector(".btn-toggle7");
 
function removeActive7() {
    sous_etape7.classList.toggle("active");
    btn_toggle7.classList.toggle("active")
}

let titre = document.querySelectorAll(".titre");

window.addEventListener("scroll",()=>{
    titre.forEach((tit)=>{
        tit.classList.toggle("active",window.scrollY>0)
    })
})

let menu = document.querySelector(".menu");
    let sous_metho = document.querySelector(".metho");
    let sous_metho1 = document.querySelector(".metho1");
    let direct1 = document.querySelector(".direct1");
    let direct2 = document.querySelector(".direct2")
    let vitre = document.querySelector(".vitre");

    let toggle_menu = document.querySelector(".toggle_menu");
    
    toggle_menu.addEventListener("click",(es)=>{
        menu.classList.toggle("active");
        vitre.classList.toggle("active");
        es.stopPropagation()
    })
    menu.addEventListener("click",(e)=>{
        e.stopPropagation()
    })
    document.body.addEventListener("click",()=>{
        if (menu.className.includes("active") || vitre.className.includes("active")) {
            menu.classList.remove("active");
            vitre.classList.remove("active");
        }
    })
    function addActive() {
        sous_metho.classList.toggle("active")
        direct1.classList.toggle("active")
    }
    function addActive1() {
        direct2.classList.toggle("active")
        sous_metho1.classList.toggle("active")
    }

      
    let vitrine = document.querySelector(".vitrine");
    let modal = document.querySelector(".modal");
    let stops = document.querySelectorAll(".stop");
    stops.forEach((stop)=>{
        stop.addEventListener("click",(e)=>{
         e.stopImmediatePropagation()
        })
    })
    function AddModal() {
        modal.classList.add("active");
        vitrine.classList.add("active");
    }
    function removeModal() {
        modal.classList.remove("active");
        vitrine.classList.remove("active");
    }
    modal.addEventListener("click",(e)=>{
       e.stopImmediatePropagation()
    })
    document.body.addEventListener("click",()=>{
        if (modal.className.includes("active") || vitrine.className.includes("active") ) {
            modal.classList.remove("active");
            vitrine.classList.remove("active");
        }
    })
