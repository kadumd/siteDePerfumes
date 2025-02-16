const http = require("http")
const fs = require("fs")


const logados = {}

const servidor = http.createServer((pedido, resposta) => {
    console.log(pedido.url)

    switch (pedido.url) {
        case '/':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./frontend/index.html'));
            break

        case '/main.css':
            resposta.writeHead(200, { "Content-Type": "text/css" });
            resposta.end(fs.readFileSync('./frontend/main.css'));
            break

        case '/script.js':
            resposta.writeHead(200, { "Content-Type": "text/javascript" });
            resposta.end(fs.readFileSync('./frontend/script.js'));
            break

        //biographie ===============================================================================================================

        case '/biographie.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./frontend/biographie/biographie.html'));
            break

        case '/biographie.css':
            resposta.writeHead(200, { "Content-Type": "text/css" });
            resposta.end(fs.readFileSync('./frontend/biographie/biographie.css'));
            break

        case '/biographie.js':
            resposta.writeHead(200, { "Content-Type": "text/javascript" });
            resposta.end(fs.readFileSync('./frontend/biographie/biographie.js'));
            break

        //vanites ===============================================================================================================

        case '/vanites.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./frontend/vanités/vanites.html'));
            break

        case '/vanites.css':
            resposta.writeHead(200, { "Content-Type": "text/css" });
            resposta.end(fs.readFileSync('./frontend/vanités/vanites.css'));
            break

        case '/vanites.js':
            resposta.writeHead(200, { "Content-Type": "text/javascript" });
            resposta.end(fs.readFileSync('./frontend/vanités/vanites.js'));
            break

        //murmure moi ==============================================================================================================

        case '/murmureMoi.html':
            resposta.writeHead(200, { "Content-Type": "text/html" });
            resposta.end(fs.readFileSync('./frontend/murmureMoi/murmureMoi.html'));
            break

        case '/murmureMoi.css':
            resposta.writeHead(200, { "Content-Type": "text/css" });
            resposta.end(fs.readFileSync('./frontend/murmureMoi/murmureMoi.css'));
            break

        case '/murmureMoi.js':
            resposta.writeHead(200, { "Content-Type": "text/js" });
            resposta.end(fs.readFileSync('./frontend/murmureMoi/murmureMoi.js'));
            break


        //chat =====================================================================================================================
        case '/conversa.json':
            resposta.writeHead(200, { "Content-Type": "application/json" });
            resposta.end(fs.readFileSync('./frontend/murmureMoi/conversa.json'));
            break

        case '/envio':
            pedido.on("data", (body) => {
                const valor = JSON.parse(body)
                let dados = JSON.parse(fs.readFileSync('./frontend/murmureMoi/conversa.json'))

                dados.push(valor)
                fs.writeFileSync('frontend/murmureMoi/conversa.json', JSON.stringify(dados))

                resposta.writeHead(200, { "Content-Type": "application/json" });
                resposta.end(JSON.stringify("oi"));
            })
            break

        //audios ===================================================================================================================
        //==========================================================================================================================

        //audio do header
        case '/audios/violino.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/violino.mp3'));
            break

        case '/audios/prowler-sound-effect_6bXErot.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/prowler-sound-effect_6bXErot.mp3'));
            break

        case '/audios/jaws-theme_TDORPKA%20(1).mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/jaws-theme_TDORPKA.mp3'));
            break

        case '/audios/jaws-theme_TDORPKA.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/jaws-theme_TDORPKA.mp3'));
            break

        case '/audios/dbd-ost-michael-myers-sounds-fin-mal-interieur-3_geQnBkX.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/dbd-ost-michael-myers-sounds-fin-mal-interieur-3_geQnBkX.mp3'));
            break
        //=====================================
        //audio dos perfumes no index
        case '/audios/creeper.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/creeper.mp3'));
            break
        case '/audios/suspense-sound-effect-imovie.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/suspense-sound-effect-imovie.mp3'));
            break
        case '/audios/paranormal-horror-sound-effect-1-vol-003-172827.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/paranormal-horror-sound-effect-1-vol-003-172827.mp3'));
            break
        case '/audios/eerie-monster-breath-sound-6-vol-004-169084.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/eerie-monster-breath-sound-6-vol-004-169084.mp3'));
            break
        case '/audios/horror-sound-monster-snort-189930.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/horror-sound-monster-snort-189930.mp3'));
            break


        //falta olhar esse
        case '/audios/keyboard-typing.mp3':
            resposta.writeHead(200, { "Content-Type": "audio/mpeg" });
            resposta.end(fs.readFileSync('./frontend/audios/keyboard-typing.mp3'));
            break

        //imagens ==================================================================================================================
        //==========================================================================================================================

        case '/imgs/bg.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/bg.png'));
            break

        case '/imgs/chat.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/chat.png'));
            break

        case '/imgs/Imagem-de-Seta-PNG-1024x873.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/Imagem-de-Seta-PNG-1024x873.png'));
            break

        case '/imgs/loader.gif':
            resposta.writeHead(200, { "Content-Type": "image/gif" });
            resposta.end(fs.readFileSync('./frontend/imgs/loader.gif'));
            break

        //frames============
        case '/imgs/frame1.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/frame1.png'));
            break

        case '/imgs/frame2.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/frame2.png'));
            break

        case '/imgs/frame3.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/frame3.png'));
            break

        case '/imgs/frame4.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/frame4.png'));
            break

        //flower============
        case '/imgs/flower1.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/flower1.png'));
            break

        case '/imgs/flower2.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/flower2.png'));
            break

        case '/imgs/flower3.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/flower3.png'));
            break

        case '/imgs/flower4.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/flower4.png'));
            break

        //perfumes========
        case '/imgs/perfumes1.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/perfumes1.png'));
            break

        case '/imgs/perfumes2.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/perfumes2.png'));
            break

        case '/imgs/perfumes3.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/perfumes3.png'));
            break

        case '/imgs/perfumes4.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/perfumes4.png'));
            break

        case '/imgs/perfumes5.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/perfumes5.png'));
            break

        case '/imgs/perfumes6.png':
            resposta.writeHead(200, { "Content-Type": "image/png" });
            resposta.end(fs.readFileSync('./frontend/imgs/perfumes6.png'));
            break
    }
})

servidor.listen(3000)
//node --watch API/index.js