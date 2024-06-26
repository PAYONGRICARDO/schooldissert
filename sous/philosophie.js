


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

const root = document.documentElement;
let dark = true;
let toggle_theme = document.querySelectorAll(".toggle-theme");
// toggle_theme.forEach(e => {

// })

function Changetheme() {
    
    if(dark){

        dark=false;
        root.style.setProperty("--theme-color-page","#fff");
        root.style.setProperty("--sombre-them","#0f172a");
        root.style.setProperty("--color-text","#333");
        root.style.setProperty("--shadow","rgb(0,0,0,0.4)");
        root.style.setProperty("--color-hover","#cccccc86");
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



// la barre de recherche

let input = document.querySelector("input");
let valeur = document.querySelectorAll(".valeur");
let error = document.getElementById('error')

input.addEventListener("input",(e)=>{
    let searchValue = e.target.value.toLocaleUpperCase();
    valeur.forEach((probleme) =>{
      let title = probleme.querySelector("h2");
      if (title.textContent.toLocaleUpperCase().indexOf(searchValue)>=0) {
         probleme.style.display = "block";
      }else{
        probleme.style.display = "none";
      }
    })

    // for(let i=0;i<valeur.length;i++){
    //     let title = valeur[i].querySelector("h2");
    //     // if (title.textContent.toLocaleUpperCase().indexOf(searchValue)>=0) {
    //     //     console.log(title);
    //     //     valeur[i].style.display="block";
    //     //     console.log(valeur[i]);
            
    //     // }else{
    //     //     valeur[i].style.display = "none"
    //     // }
    // }
})


  // Ajouter active sur les sous barre de recherche

  let titre_theme = document.querySelectorAll(".titre_theme");

   
  titre_theme.forEach((es)=>{
    let addSearch = es.querySelector(".addSearch");
    addSearch.addEventListener("click",()=>{
        es.classList.remove("active")
    })
    let removeSearch = es.querySelector(".remove");
    removeSearch.addEventListener("click",()=>{
        es.classList.add("active")
    })
  })


  valeur.forEach((pb)=>{
    let searchActeur = pb.querySelector("input");
    let boxs = pb.querySelectorAll(".box");
    searchActeur.addEventListener("input",(ez)=>{
       let barreValue = ez.target.value.toLocaleUpperCase();
       boxs.forEach((box)=>{
        let titre_acteur = box.querySelector("h3");
        if (titre_acteur.textContent.toLocaleUpperCase().indexOf(barreValue)>=0) {
            box.style.display = "block";
        }else{
            box.style.display = "none"
        }
        
       })
    })
})
  
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