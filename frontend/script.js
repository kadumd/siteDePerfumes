const div = document.querySelector(".tela-de-carregamento")
const primeiro = document.querySelector(".background-do-carregamento2")
const segundo = document.querySelector(".background-do-carregamento")
const pgn = document.querySelector(".pagina-onde-estou")

function tela () {
    setTimeout(() => {
        div.style.display = "none"
        pgn.style.webkitFilter = "drop-shadow(10px 0 5px black)";
    }, 2000);
}

tela()

const perfumes1 = document.querySelector("#perfumes1")
const perfumes2 = document.querySelector("#perfumes2")
const perfumes3 = document.querySelector("#perfumes3")
const perfumes4 = document.querySelector("#perfumes4")
const perfumes5 = document.querySelector("#perfumes5")
const perfumes6 = document.querySelector("#perfumes6")

perfumes1.addEventListener("click", ()=>{
    new Audio("./audios/violino.mp3").play()
})
perfumes2.addEventListener("click", ()=>{
    new Audio("./audios/creeper.mp3").play()
})
perfumes3.addEventListener("click", ()=>{
    new Audio("./audios/suspense-sound-effect-imovie.mp3").play()
})
perfumes4.addEventListener("click", ()=>{
    new Audio("./audios/paranormal-horror-sound-effect-1-vol-003-172827.mp3").play()
})
perfumes5.addEventListener("click", ()=>{
    new Audio("./audios/eerie-monster-breath-sound-6-vol-004-169084.mp3").play()
})

perfumes6.addEventListener("click", ()=>{
    new Audio("./audios/horror-sound-monster-snort-189930.mp3").play()
})



//parte das paginas-------------------------------------------------------------------------------------------------------
const naissance = Array.from(document.querySelectorAll("#Naissance"))
const biographie = Array.from(document.querySelectorAll("#Biographie"))
const vanites = Array.from(document.querySelectorAll("#Vanites"))
const murmureMoi = Array.from(document.querySelectorAll("#Murmure-moi"))

naissance.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("./audios/violino.mp3").play()
    })
})

biographie.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("./audios/prowler-sound-effect_6bXErot.mp3").play()
    })
})

vanites.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("./audios/jaws-theme_TDORPKA.mp3").play()
    })
})

murmureMoi.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("./audios/dbd-ost-michael-myers-sounds-fin-mal-interieur-3_geQnBkX.mp3").play()
    })
})