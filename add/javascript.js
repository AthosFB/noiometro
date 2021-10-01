let resp = window.document.getElementById("resp")
let volt = window.document.getElementById("volt")
let cont = window.document.getElementById("conte")
let som = window.document.getElementsByName("sombran") // Boxes Radio
let bune = window.document.getElementsByName("bune") // Boxes Radio
let laco = window.document.getElementsByName("laco") // Boxes Radio
let juli = window.document.getElementsByName("juli") // Boxes Radio 
let fun = window.document.getElementsByName("fun") // Boxes Radio
let cert = window.document.getElementsByName("cert") // Boxes Radio
let beck = window.document.getElementsByName("beck") // Boxes Radio
let brink = window.document.getElementsByName("brink") // Boxes Radio
let gta = window.document.getElementsByName("gta") // Boxes Radio
let mot = window.document.getElementsByName("mot") // Boxes Radio
let cast = window.document.getElementsByName("cast") // Boxes Radio
let zoa = window.document.getElementById("zoanoia")
let para = window.document.getElementById("para")
let noia = " " // Nome Do Nóia
let fotonoia = " " // Foto Do Nóia
let sobrenoia = " " // Descrição do Nóia
let validador = " " // Pra ver Se Ta Tudo Completado
let tot = 0
function cabo() {
    if (som[0].checked) { // 1
        tot += 1
    }
    else if (som[1].checked) {
        tot -= 2
    }
    else {
        validador = "n"
    }

    if (bune[0].checked) { // 2
        tot += 2
    }
    else if (bune[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }

    if (laco[0].checked) { // 3
        tot += 2
    }
    else if (laco[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }

    if (juli[0].checked) { // 4
        tot += 4
    }
    else if (juli[1].checked) {
        tot -= 4
    }
    else {
        validador = "n"
    }

    if (fun[0].checked) { // 5
        tot += 6
    }
    else if (fun[1].checked) {
        tot -= 4
    }
    else {
        validador = "n"
    }

    if (cert[0].checked) { // 6
        tot += 1
    }
    else if (cert[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }

    if (beck[0].checked) { // 7
        tot += 5
    }
    else if (beck[1].checked) {
        tot -= 5
    }
    else {
        validador = "n"
    }

    if (brink[0].checked) { // 8
        tot += 3
    }
    else if (brink[1].checked) {
        tot -= 2
    }
    else {
        validador = "n"
    }
    if (gta[0].checked) { // 9
        tot += 1
    }
    else if (gta[1].checked) {
        tot -= 0
    }
    else {
        validador = "n"
    }
    if (mot[0].checked) { // 9
        tot += 3
    }
    else if (mot[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }
    if (cast[0].checked) { // 9
        tot += 0
    }
    else if (cast[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }
    if (validador != "n") {
        escolhe()
        cont.innerHTML = ""
        resp.innerHTML = `<p id="para">Parabéns Você é Um ${noia}</p><img src="${fotonoia}" alt="Nóia" id="fot"><p id="para">${sobrenoia} ${tot}</p>`
        resp.style.backgroundColor = "#888888"
        resp.style.width = "80%"
        resp.style.height = "100%"
        resp.style.borderRadius = "10px"
        resp.style.margin = "0px 0px 50px 150px"
        resp.style.textAlign = "center"
        fot.style.height = "500px"
        resp.style.font = "normal 40px txt"
        resp.style.padding = "30px"
        volt.innerHTML = '<a href="index.html" id="botvolt"><= Volt+ r</a>'
    }
    else {
        zoa.innerText = "Completa os Bagui Aí O Nóia"
        zoa.style.font = "normal 30px noia"
        zoa.style.backgroundColor = "#888888"
        zoa.style.padding = "20px"
        zoa.style.borderRadius = "10px"
        zoa.style.textAlign = "center"
        validador = ""
    }
    function escolhe() {
        switch (tot) {
            case 28: // 1
                noia = "Garibaldo"
                fotonoia = "noia/garibaldo.jpg"
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia, Na verdade vocês garibaldos não são noias, NÓIAS SÃO GARIBALDOS(50/50)"
                break
            case 27: // 2
                noia = "Nóia Nóia"
                fotonoia = "noia/noia.jfif"
                sobrenoia = "Você quase o melhor nóia, e tem tudo para UM DIA ser o NÓIA DOS NÓIA (49/50)"
                break
            case 26: // 3
                noia = "Lindu Nóia"
                fotonoia = "noia/lindinho.jpg"
                sobrenoia = "Você é um nóia definitivamente, talvez não tão completo mas atinjes muitos dos requisitos para ser um nóia (48/50)"
                break
            case 25: // 4
                noia = "Anão Nóia"
                fotonoia = "noia/anao-noia.jpg"
                sobrenoia = "Quase, Você é tipo um nóia gerente (anão, (todo gerente é (anão))) você é bom mas nada mais (47/50)"
                break
            case 24: // 5
                noia = "Cachorro Fumaça"
                fotonoia = "noia/cachorro-fumaça.jpg"
                sobrenoia = "MACONHERU, vai murre antes do natal, um nóia diferenciado (46/50)"
                break
            case 23: // 6
                noia = "Nóia Armado"
                fotonoia = "noia/noia-armado.jfif"
                sobrenoia = "Um nóia que perambula com um fuzil .50 nas kostas naipy GTA, já perdeu dois dedo por ser meio burro (45/50)"
                break
            case 22: // 7
                noia = "Nóia Diferente"
                fotonoia = "noia/noia-cagado.jfif"
                sobrenoia = "Você é um nóia mas não tão bom, mas é um nóia, do tipo que rouba fio de posto de gasolina falido! (44/50)"
                break
            case 21: // 8
                noia = "Rusbé"
                fotonoia = "noia/rusbe.jpg"
                sobrenoia = "Você é um Aspirante a nóia ou você é uma crianaça que deseja um dia ser um nóia ou é um nóia bem ruim mesmo. (43/50)"
                break
            case 20: // 9
                noia = "Tipo de Tuê"
                fotonoia = "noia/matue-deep-web.jpg"
                sobrenoia = "Tuê um nóia, mas é mei estranho (tipo MaTuê), Tu num come doce só sal. (42/50)"
                break
            case 19: // 10
                noia = "Loirin Jusé"
                fotonoia = "noia/loro.jpg"
                sobrenoia = "C gosta da Marijuana Né? (41/50)"
                break
            case 18: // 11
                noia = "Lucas Nóismo"
                fotonoia = "noia/lucas-noia.jpg"
                sobrenoia = "FoDa, vc é nóia mas é gente boa! S2 (40/50)"
                break
            case 17: // 12
                noia = "BoB Nóia"
                fotonoia = "noia/bob-sponja-noia.jfif"
                sobrenoia = "Logo Como, Bobson Nóia! (39/50)"
                break
            case 16: // 13
                noia = "Todo Nicolas Cagezinho"
                fotonoia = "noia/cage.jfif"
                sobrenoia = "Num Uso Mais Crack, qué dize 3, 4 vezes no ano só! (38/50)"
                break
            case 15: // 14
                noia = "Pozer"
                fotonoia = "noia/poze.jpg"
                sobrenoia = "Nem tenho comentário, tu é u poze, mas uma versão deformada dele! (37/50)"
                break
            case 14: // 15
                noia = "Limador"
                fotonoia = "noia/liminha.jfif"
                sobrenoia = "Tu é Um nóia Gaymer! (36/50)"
                break
            case 13: // 16
                noia = "Sidoka"
                fotonoia = "noia/sidoka.jpg"
                sobrenoia = "KKK o maluco acha que é nóia msm, melhore (vc é um nóia mei bosta)! (35/50)"
                break
            case 12: // 17
                noia = "Nóia Prata"
                fotonoia = "noia/anao-prateado.png"
                sobrenoia = "Verdade ANÃO Prata, é isso -> (34/50)"
                break
            case 11: // 18
                noia = "Kualy"
                fotonoia = "noia/qualy.jpg"
                sobrenoia = "U Maluco é u Qualy KKKK, Mt foda (mas n é nóia top:() (34/50)"
                break
            case 10: // 17
                noia = "Monark"
                fotonoia = "noia/monark.jpg"
                sobrenoia = "Ma -  Co - Hha (As unicas sílabas que esse ser conhece) (33/50)"
                break
            case 9: // 18
                noia = "Dentuço"
                fotonoia = "noia/dente.jpg"
                sobrenoia = "F pra esse nóia ai, nóia malomé. (32/50)"
                break
            case 9: // 18
                noia = "Luca Hype"
                fotonoia = "noia/lucahype.jpg"
                sobrenoia = "Ta tentando ser nóia bom, mas é meio fraquinho comparado com Garibaldo (32/50)"
                break

            case -21: // 48
                noia = "Sério? kkk"
                fotonoia = "noia/serio.jpg_large"
                sobrenoia = "Ta longe de ser nóia (3/50)"
                break
            case -21: // 49
                noia = "Rei"
                fotonoia = "noia/roberto.jpg"
                sobrenoia = "É, num foi dessa vez mas tem gente menos nóia q vc (2/50)"
                break
            case -22: // 50
                noia = "Normal?"
                fotonoia = "noia/normal.jpg"
                sobrenoia = "Esquece Vc n é NEM um Poico Nóia, Disiti :( (1/50)"
                break
        }
    }
}