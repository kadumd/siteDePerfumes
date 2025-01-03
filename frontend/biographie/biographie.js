let div = document.querySelector(".texto");
let texto = "Toutes les fleurs se fanent et meurent, c'est pourquoi nous veillons à ce que le parfum soit aussi bon qu'au moment de leur floraison";

function escrever(tex, di) {
  var chars = tex.split(''); // Divide o texto em um array de caracteres
  var index = 0; // Inicializa um índice para acompanhar o progresso da escrita
  new Audio('../audios/keyboard-typing.mp3').play()
  var typer = setInterval(function() {
    if (index >= chars.length) { // Verifica se todos os caracteres foram escritos
      clearInterval(typer); // Se sim, limpa o intervalo para parar de escrever
      return;
    }
    
    di.innerHTML += chars[index]; // Adiciona o próximo caractere ao conteúdo do elemento HTML
    index++; // Incrementa o índice para avançar para o próximo caractere
  }, 100); // Intervalo de 100 milissegundos entre cada caractere (ajustável)
}

escrever(texto, div);



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