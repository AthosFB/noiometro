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
        tot -= 1
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
    if (validador != "n") {
        escolhe()
        cont.innerHTML = ""
        resp.innerHTML = `<p id="para">Parabéns Você é Um ${noia}</p><img src="${fotonoia}" alt="Nóia" id="fot"><p id="para">${sobrenoia} ${tot}</p>`
        resp.style.backgroundColor = "#888888"
        resp.style.width = "80%"
        resp.style.borderRadius = "10px"
        resp.style.margin = "auto"
        resp.style.textAlign = "center"
        fot.style.height = "500px"
        resp.style.font = "normal 40px txt"
        resp.style.padding = "30px"
        volt.innerHTML = '<input type="button" value="&lt;= Volt+ r" id="botvolt" onclick="clickvolt()">'
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
            case 28:
                noia = "Garibaldo"
                fotonoia = "noia/garibaldo.jpg"
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia, Na verdade vocês garibaldos não são noias, NÓIAS SÃO GARIBALDOS(50/50)"
                break
            case 27:
                noia = "Nóia Nóia"
                fotonoia = "noia/noia.jfif"
                sobrenoia = "Você quase o melhor nóia, e tem tudo para UM DIA ser o NÓIA DOS NÓIA (31/50)"
                break
            case 26:
                noia = "Lindu Nóia"
                fotonoia = "noia/lindinho.jpg"
                sobrenoia = "Você é um nóia definitivamente, talvez não tão completo mas atinjes muitos dos requisitos para ser um nóia (30/32)"
                break
            case 25:
                noia = "Anão Nóia"
                fotonoia = "noia/anao-noia.jpg"
                sobrenoia = "Quase, Você é tipo um nóia gerente (anão, (todo gerente é (anão))) você é bom mas nada mais (29/32)"
                break
            case 24:
                noia = "Cachorro Fumaça"
                fotonoia = "noia/cachorro-fumaça.jpg"
                sobrenoia = "MACONHERU, vai murre antes do natal, um nóia diferenciado (28/32)"
                break
            case 23:
                noia = "Nóia Armado"
                fotonoia = "noia/nóia-armado.jpg"
                sobrenoia = "Um nóia que perambula com um fuzil .50 nas kostas naipy GTA, já perdeu dois dedo por ser meio burro (27/32)"
                break
            case 22:
                noia = "Nóia Diferente"
                fotonoia = "noia/noia-cagado.jfif"
                sobrenoia = "Você é um nóia mas não tão bom, mas é um nóia, do tipo que rouba fio de posto de gasolina falido! (26/32)"
                break
            case 21:
                noia = "Rusbé"
                fotonoia = "noia/rusbe.jpg"
                sobrenoia = "Você é um Aspirante a nóia ou você é uma crianaça que deseja um dia ser um nóia ou é um nóia bem ruim mesmo. (25/32)"
                break
            case 20:
                noia = "Tipo de Tuê"
                fotonoia = "noia/matue-deep-web.jpg"
                sobrenoia = "Você é um Aspirante a nóia ou você é uma crianaça que deseja um dia ser um nóia ou é um nóia bem ruim mesmo. (24/32)"
                break
            case 19:
                noia = "Loirin Jusé"
                fotonoia = "noia/loro.jpg"
                sobrenoia = "Você é um Aspirante a nóia ou você é uma crianaça que deseja um dia ser um nóia ou é um nóia bem ruim mesmo. (23/32)"
                break
            case 18:
                noia = "Lucas Nóismo"
                fotonoia = "noia/lucas-noia.jpg"
                sobrenoia = "Você é um Aspirante a nóia ou você é uma crianaça que deseja um dia ser um nóia ou é um nóia bem ruim mesmo. (22/32)"
                break
            case 17:
                noia = "BoB Nóia"
                fotonoia = "bob-sponja-noia.jfif"
                sobrenoia = "Você é um Aspirante a nóia ou você é uma crianaça que deseja um dia ser um nóia ou é um nóia bem ruim mesmo. (21/32)"
                break
        }
    }
}
function clickvolt() {
    resp.innerHTML = ""
    volt.innerHTML = ""
    resp.style.width = "0px"
    resp.style.height = "0px"
    resp.style.backgroundColor = "#DDDDDD"
    cont.innerHTML = '<div id="musinoia"><h2>Ouça Esta Musica Para Responder o Formulário</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/zSE223XxUlo?start=79" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="musi"></iframe></div><form action=""><h2>Formul+ rio De N+ ia</h2><ol><li><label for="som1">Tem riskinho na Sombrançelha</label><input type="radio" name="sombran" id="som1" class="prime"><br><label for="som2">Num Tem riskinho na Sobrancelha</label><input type="radio" name="sombran" id="som2"><br><hr></li><li><label for="cert1">Gosta De Peaky Blinders</label><input type="radio" name="cert" id="cert1" class="prime"><br><label for="cert2">Num Gosta De Peaky Blinders</label><input type="radio" name="cert" id="cert2"><br><hr></li><li><label for="beck1">Fumas Um Beck!</label><input type="radio" name="beck" id="beck1" class="prime"><br><label for="beck2">Num Fumas Um Beck!</label><input type="radio" name="beck" id="beck2"><br><hr></li><li><label for="brink1">Tem Brinquin</label><input type="radio" name="brink" id="brink1" class="prime"><br><label for="brink2">Num Tem Brinquin</label><input type="radio" name="brink" id="brink2"><br><hr></li><li><label for="bune1">Usa Buné</label><input type="radio" name="bune" id="bune1" class="prime"><br><label for="bune2">Num Usa Buné</label><input type="radio" name="bune" id="bune2"><br><hr></li><li><label for="laco1">Usa Lacoste Ou tommy hilfiger</label><input type="radio" name="laco" id="laco1" class="prime"><br><label for="laco2">Num Usa Lacoste Ou tommy hilfiger</label><input type="radio" name="laco" id="laco2"><br><hr></li><li><label for="juli1">Usa Juliete</label><input type="radio" name="juli" id="juli1" class="prime"><br><label for="juli2">Num Usa Juliete</label><input type="radio" name="juli" id="juli2"><br><hr></li><li><label for="fun1">Ouve Funk ou Trap</label><input type="radio" name="fun" id="fun1" class="prime"><br><label for="fun2">Num Ouve Funk ou Trap</label><input type="radio" name="fun" id="fun2"><hr></li><li><label for="gta1">Joga GTA RP</label><input type="radio" name="gta" id="gta1" class="prime"><br><label for="gta2">Num Joga GTA RP</label><input type="radio" name="gta" id="gta2"><br><hr></li><li><label for="mot1">Tem ou Teria Uma Moto</label><input type="radio" name="mot" id="mot1" class="prime"><br><label for="mot2">Num Tem ou Num Teria Uma Moto</label><input type="radio" name="mot" id="mot2"><hr></li></ol><br><p id="zoanoia"></p><input type="button" value="Final+ zar" id="fim" onclick="cabo()"></form>'
}