const perfumeDeExibição = document.querySelector(".suporte-de-perfume")
const titulo = document.querySelector(".titulo")
const texto = document.querySelector(".texto")
const flor = document.querySelector(".flor-que-foi-usada")
const moldura1 = document.querySelector(".suporte-de-perfume-baixo1")
const moldura2 = document.querySelector(".suporte-de-perfume-baixo2")
const moldura3 = document.querySelector(".suporte-de-perfume-baixo3")
const moldura4 = document.querySelector(".suporte-de-perfume-baixo4")

function troca1 (){
    perfumeDeExibição.src = "../imgs/frame1.png"
    titulo.textContent = "Morelle Noire"
    titulo.style.left = 215 + "px"
    texto.textContent = "Un parfum saisissant pour ceux qui ont été soudainement frappés par la mort. Aussi surprenant que la mort ellemême, ce parfum s'adresse à ceux qui souhaitent partager la souffrance du défunt."
    flor.src = "../imgs/flower1.png"
}
moldura1.addEventListener("click", troca1)



function troca2 (){
    perfumeDeExibição.src = "../imgs/frame2.png"
    titulo.textContent = "Laurier des montagnes"
    titulo.style.left = 195 + "px"
    texto.textContent = "La mort fait tomber tous ceux qui ont une haute estime d’euxmêmes. Ce parfum était destiné à ceux qui, ayant des maisons au sommet des montagnes, décédaient dans des lieux modestes."
    flor.src = "../imgs/flower2.png"
}
moldura2.addEventListener("click", troca2)



function troca3 (){
    perfumeDeExibição.src = "../imgs/frame3.png"
    titulo.textContent = "Muguet"
    titulo.style.left = 235 + "px"
    texto.textContent = "Le muguet est un bonbon à double tranchant : beau pour ceux qui sont assez sages pour l'admirer avec respect, mais mortel pour les imbéciles qui le consomment sans le mériter."
    flor.src = "../imgs/flower3.png"
}
moldura3.addEventListener("click", troca3)



function troca4 (){
    perfumeDeExibição.src = "../imgs/frame4.png"
    titulo.textContent = "Digitale pourprée"
    titulo.style.left = 210 + "px"
    texto.textContent = "Un parfum subtil et silencieux pour ceux qui veulent qu'on ne se souvienne pas de leur visage, mais plutôt de la ruse de leurs actes."
    flor.src = "../imgs/flower4.png"
}
moldura4.addEventListener("click", troca4)




const naissance = Array.from(document.querySelectorAll("#Naissance"))
const biographie = Array.from(document.querySelectorAll("#Biographie"))
const vanites = Array.from(document.querySelectorAll("#Vanites"))
const murmureMoi = Array.from(document.querySelectorAll("#Murmure-moi"))

naissance.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("../audios/violino.mp3").play()
    })
})

biographie.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("../audios/prowler-sound-effect_6bXErot.mp3").play()
    })
})

vanites.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("../audios/jaws-theme_TDORPKA (1).mp3").play()
    })
})

murmureMoi.forEach(div=>{
    div.addEventListener("mouseover",()=>{
        new Audio("../audios/dbd-ost-michael-myers-sounds-fin-mal-interieur-3_geQnBkX.mp3").play()
    })
})