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
    if (mot[0].checked) { // 10
        tot += 3
    }
    else if (mot[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }
    if (cast[0].checked) { // 11
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
        resp.innerHTML = `<p id="para">Parabéns Você é Um ${noia}</p><img src="${fotonoia}" alt="Nóia" id="fot"><p id="para">${sobrenoia} ${tot}</p>
        <hr>  <a href="index.html" id="botvolt">Volt+ r</a>`
        resp.style.backgroundColor = "#888888"
        resp.style.width = "80%"
        resp.style.height = "100%"
        resp.style.borderRadius = "10px"
        resp.style.margin = "auto"
        resp.style.textAlign = "center"
        resp.style.position = "relative"
        fot.style.height = "500px"
        resp.style.font = "normal 3em txt"
        resp.style.padding = "1em"
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
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia, Na verdade vocês garibaldos não são noias, NÓIAS SÃO GARIBALDOS(51/51)"
                break
            case 27: // 2
                noia = "Nóia Nóia"
                fotonoia = "noia/noia.jfif"
                sobrenoia = "Você quase o melhor nóia, e tem tudo para UM DIA ser o NÓIA DOS NÓIA (50/51)"
                break
            case 26: // 3
                noia = "Lindu Nóia"
                fotonoia = "noia/lindinho.jpg"
                sobrenoia = "Você é um nóia definitivamente, talvez não tão completo mas atinjes muitos dos requisitos para ser um nóia (49/51)"
                break
            case 25: // 4
                noia = "Anão Nóia"
                fotonoia = "noia/anao-noia.jpg"
                sobrenoia = "Quase, Você é tipo um nóia gerente (anão, (todo gerente é (anão))) você é bom mas nada mais (48/51)"
                break
            case 24: // 5
                noia = "Cachorro Fumaça"
                fotonoia = "noia/cachorro-fumaça.jpg"
                sobrenoia = "MACONHERU, vai murre antes do natal, um nóia diferenciado (47/51)"
                break
            case 23: // 6
                noia = "Nóia Armado"
                fotonoia = "noia/noia-armado.jfif"
                sobrenoia = "Um nóia que perambula com um fuzil .50 nas kostas naipy GTA, já perdeu dois dedo por ser meio burro (46/51)"
                break
            case 22: // 7
                noia = "Nóia Diferente"
                fotonoia = "noia/noia-cagado.jfif"
                sobrenoia = "Você é um nóia mas não tão bom, mas é um nóia, do tipo que rouba fio de posto de gasolina falido! (45/51)"
                break
            case 21: // 8
                noia = "Rusbé"
                fotonoia = "noia/rusbe.jpg"
                sobrenoia = "Você é um Aspirante a nóia ou você é uma crianaça que deseja um dia ser um nóia ou é um nóia bem ruim mesmo. (44/51)"
                break
            case 20: // 9
                noia = "Tipo de Tuê"
                fotonoia = "noia/matue-deep-web.jpg"
                sobrenoia = "Tuê um nóia, mas é mei estranho (tipo MaTuê), Tu num come doce só sal. (43/51)"
                break
            case 19: // 10
                noia = "Loirin Jusé"
                fotonoia = "noia/loro.jpg"
                sobrenoia = "C gosta da Marijuana Né? (42/51)"
                break
            case 18: // 11
                noia = "Lucas Nóismo"
                fotonoia = "noia/lucas-noia.jpg"
                sobrenoia = "FoDa, vc é nóia mas é gente boa! S2 (41/51)"
                break
            case 17: // 12
                noia = "BoB Nóia"
                fotonoia = "noia/bob-sponja-noia.jfif"
                sobrenoia = "Logo Como, Bobson Nóia! (40/51)"
                break
            case 16: // 13
                noia = "Todo Nicolas Cagezinho"
                fotonoia = "noia/cage.jfif"
                sobrenoia = "Num Uso Mais Crack, qué dize 3, 4 vezes no ano só! (39/51)"
                break
            case 15: // 14
                noia = "Pozer"
                fotonoia = "noia/poze.jpg"
                sobrenoia = "Nem tenho comentário, tu é u poze, mas uma versão deformada dele! (38/51)"
                break
            case 14: // 15
                noia = "Limador"
                fotonoia = "noia/liminha.jfif"
                sobrenoia = "Tu é Um nóia Gaymer! (37/51)"
                break
            case 13: // 16
                noia = "Sidoka"
                fotonoia = "noia/sidoka.jpg"
                sobrenoia = "KKK o maluco acha que é nóia msm, melhore (vc é um nóia mei bosta)! (36/51)"
                break
            case 12: // 17
                noia = "Nóia Prata"
                fotonoia = "noia/anao-prateado.png"
                sobrenoia = "Verdade ANÃO Prata, é isso -> (35/51)"
                break
            case 11: // 18
                noia = "Kualy"
                fotonoia = "noia/qualy.jpg"
                sobrenoia = "U Maluco é u Qualy KKKK, Mt foda (mas n é nóia top:() (34/51)"
                break
            case 10: // 19
                noia = "Monark"
                fotonoia = "noia/monark.jpg"
                sobrenoia = "Ma -  Co - Hha (As unicas sílabas que esse ser conhece). (33/51)"
                break
            case 9: // 20
                noia = "Dentuço"
                fotonoia = "noia/dente.jpg"
                sobrenoia = "F pra esse nóia ai, nóia malomé. (32/51)"
                break
            case 8: // 21
                noia = "Luca Hype"
                fotonoia = "noia/lucahype.jpg"
                sobrenoia = "Ta tentando ser nóia bom, mas é meio fraquinho comparado com Garibaldo de Kualy dade. (31/51)"
                break
            case 7: // 22
                noia = "Nóia Assustado"
                fotonoia = "noia/noia-assustado.jpg"
                sobrenoia = "Ta Assustado Nóia? Tu tem que desasustar para ser um bom nóia. (30/51)"
                break
            case 6: // 23
                noia = "NogNóia"
                fotonoia = "noia/nognoia.jfif"
                sobrenoia = "Tu é (quase) um nóia engraçado. (29/51)"
                break
            case 5: // 24
                noia = "Day Trader"
                fotonoia = "noia/day-trader.jpg"
                sobrenoia = "KKKK nóia day trader, nóia tem manha de fazer dinheiro. (28/51)"
                break
            case 4: // 25
                noia = "Igor 3k"
                fotonoia = "noia/igao.jfif"
                sobrenoia = "É malomé esse nóia ai, quase nada de nóia mas da pro gasto. (27/51)"
                break
            case 3: // 26
                noia = "Spvic de Boina"
                fotonoia = "noia/spvic.jfif"
                sobrenoia = "Tipo o leon traper, é meio leon e meio traper. (26/51)"
                break
            case 2: // 27
                noia = "Poze Gordo"
                fotonoia = "noia/poze-gordo.jpg"
                sobrenoia = "É o Poze, Mas é gordo, sla, um pouco (quase nada nóia). (25/51)"
                break
            case 1: // 28
                noia = "Igão"
                fotonoia = "noia/igão-noia.jpg"
                sobrenoia = "Acalme-se, Acalme-se, vc n é nóia, continmua tentado. (24/51)"
                break
            case 0: // 29
                noia = "Pulissa Nóia"
                fotonoia = "noia/Pulissa.jpg"
                sobrenoia = "É, nóia você não é mas não ta TÃO ruim, a daqui uns anos quem sabe você vira um!(23/51)"
                break

            case -1: // 30
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(22/51)"
                break
            case -2: // 31
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(21/51)"
                break
            case -3: // 32
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(20/51)"
                break
            case -4: // 33
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(19/51)"
                break
            case -5: // 34
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(18/51)"
                break
            case -6: // 35
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(17/51)"
                break
            case -7: // 36
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(16/51)"
                break
            case -8: // 37
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(15/51)"
                break
            case -9: // 38
                noia = ""
                fotonoia = "noia/."
                sobrenoia = "(14/51)"
                break
            case -10: // 39
                noia = ""
                fotonoia = "noia/.jpg"
                sobrenoia = "(13/51)"
                break
            case -11: // 40
                noia = ""
                fotonoia = "noia/"
                sobrenoia = "(12/51)"
                break
            case -12: // 41
                noia = ""
                fotonoia = "noia/"
                sobrenoia = "(11/51)"
                break
    

            case -13: // 42
                noia = "Predella (msm)"
                fotonoia = "noia/predenoia.jpg"
                sobrenoia = "Nóia Num É (10/51)"
                break
            case -14: // 43
                noia = "Pessoa Estranha"
                fotonoia = "noia/pessoa-estranha.jfif"
                sobrenoia = "Vc só é estranho msm, mt estranho! (9/51)"
                break
            case -15: // 44
                noia = "Num Sei"
                fotonoia = "noia/sla.jfif"
                sobrenoia = "Sla O que vc é ninguém sabe. (8/51)"
                break
            case -16: // 45
                noia = "Felps"
                fotonoia = "noia/felps.jfif"
                sobrenoia = "Uma Pessoa Que Joga uns Joguinho Online. (Nem Um Pouco Nóia) (7/51)"
                break
            case -17: // 46
                noia = "Cara Estranho"
                fotonoia = "noia/predenoia.jpg"
                sobrenoia = "Vc é uma vergonha VAZA, n é nada de mais (6/51)"
                break
            case -18: // 47
                noia = "Bosta"
                fotonoia = "noia/bolsolinha.jpg"
                sobrenoia = "Vc é uma vergonha VAZA, n é nada de mais (5/51)"
                break
            case -19: // 48
                noia = "Orochinho"
                fotonoia = "noia/orochi.png"
                sobrenoia = "Vc é o oposto de um nóia, vc é um orochi no máximo Joga Rp (4/51)"
                break
            case -20: // 49
                noia = "Sério? kkk"
                fotonoia = "noia/serio.jpg_large"
                sobrenoia = "Ta longe de ser nóia (3/50)"
                break
            case -21: // 50
                noia = "Rei"
                fotonoia = "noia/roberto.jpg"
                sobrenoia = "É, num foi dessa vez mas tem gente menos nóia q vc (2/51)"
                break
            case -22: // 51
                noia = "Normal?"
                fotonoia = "noia/normal.jpg"
                sobrenoia = "Esquece Vc n é NEM um Poico Nóia, Disiti :( (1/51)"
                break
        }
    }
}