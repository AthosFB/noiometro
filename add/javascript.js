let resp = window.document.getElementById("resp")
let cont = window.document.getElementById("conte")
let som = window.document.getElementsByName("sombran") // Boxes Radio
let bune = window.document.getElementsByName("bune") // Boxes Radio
let laco = window.document.getElementsByName("laco") // Boxes Radio
let juli = window.document.getElementsByName("juli") // Boxes Radio 
let fun = window.document.getElementsByName("fun") // Boxes Radio
let cert = window.document.getElementsByName("cert") // Boxes Radio
let beck = window.document.getElementsByName("beck") // Boxes Radio
let brink = window.document.getElementsByName("brink") // Boxes Radio
let zoa = window.document.getElementById("zoanoia")
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
        tot -= 1
    }
    else {
        validador = "n"
    }

    if (bune[0].checked) { // 2
        tot += 1
    }
    else if (bune[1].checked) {
        tot -= 2
    }
    else {
        validador = "n"
    }

    if (laco[0].checked) { // 3
        tot += 2
    }
    else if (laco[1].checked) {
        tot -= 2
    }
    else {
        validador = "n"
    }

    if (juli[0].checked) { // 4
        tot += 3
    }
    else if (juli[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }

    if (fun[0].checked) { // 5
        tot += 1
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
        tot -= 1
    }
    else {
        validador = "n"
    }

    if (brink[0].checked) { // 8
        tot += 3
    }
    else if (brink[1].checked) {
        tot -= 1
    }
    else {
        validador = "n"
    }
    if (validador != "n") {
        escolhe()
        cont.innerHTML = ""
        resp.innerHTML = `<p>Parabéns Você é Um ${noia}</p><img src="${fotonoia}" alt="Nóia" id="fot"><p>${sobrenoia} ${tot}</p>`
        resp.style.backgroundColor = "#888888"
        resp.style.width = "1200px"
        resp.style.borderRadius = "10px"
        resp.style.margin = "auto"
        resp.style.textAlign = "center"
        fot.style.height = "500px"
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
            case 17:
                noia = "Garibaldo"
                fotonoia = "noia/garibaldo.jpg"
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia (30/30)"
                break
            case 16:
                noia = "Nóia Nóia"
                fotonoia = "noia/noia.jfif"
                sobrenoia = "Você quase o melhor nóia, e tem tudo para UM DIA ser o NÓIA DOS NÓIA (29/30)"
                break
            case 15:
                noia = "Lindu Nóia"
                fotonoia = "noia/lindinho.jpg"
                sobrenoia = "Você é um nóia definitivamente, talvez não tão completo mas atinjes muitos dos requisitos para ser um nóia (28/30)"
                break
            case 14:
                noia = "Anão Nóia"
                fotonoia = "noia/anao-noia.jpg"
                sobrenoia = "Quase, Você é tipo um nóia gerente (anão, (todo gerente é (anão))) você é bom mas nada mais (27/30)"
                break
            case 13:
                noia = "Garibaldo"
                fotonoia = "noia/garibaldo.jpg"
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia (26/30)"
                break
            case 12:
                noia = "Garibaldo"
                fotonoia = "noia/garibaldo.jpg"
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia (25/30)"
                break
            case 11:
                noia = "Garibaldo"
                fotonoia = "noia/garibaldo.jpg"
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia (24/30)"
                break
            case 10:
                noia = "Garibaldo"
                fotonoia = "noia/garibaldo.jpg"
                sobrenoia = "Você é o nóia dos Nóia, e deve ser respeitado por qualquer Nóia (23/30)"
                break
        }
    }
}