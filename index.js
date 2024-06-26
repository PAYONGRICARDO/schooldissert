
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
        root.style.setProperty("--shadow","#000");
        root.style.setProperty("--color-hover","#524f4f63")
        toggle_theme.forEach(btn => {
            btn.innerHTML = `<ion-icon name="sunny-outline"></ion-icon>`
        })
    }
}

var typed = new Typed('.text2', {

    strings: [
    'Nous vous proposons . . . ',
    'Des citations philosophique .',
    'Des citations littéraire .',
    'Une méthodologie litteraire .',
    'Une méthodologie philosophique .',
    'Des arguments litteraire .',
    'Des arguments philosophique .',
    ],
    typeSpeed: 130,
    backSpeed: 130,
    loop:true,
    fadeOut:true,
    fadeOutClass:'typed-fade-out',
    fadeOutDelay:300
});

  
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



