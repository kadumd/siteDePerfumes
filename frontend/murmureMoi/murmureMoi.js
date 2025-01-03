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