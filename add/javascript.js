let resp = window.document.getElementById("resp")
let cont = window.document.getElementById("conte")
let som = window.document.getElementsByName("sombran") // Boxes Radio
let bune = window.document.getElementsByName("bune") // Boxes Radio
let laco = window.document.getElementsByName("laco") // Boxes Radio
let juli = window.document.getElementsByName("juli") // Boxes Radio 
let fun = window.document.getElementsByName("fun") // Boxes Radio
let noia = " " // Nome Do Nóia
let fotonoia = " " // Foto Do Nóia
let sobrenoia = " " // Descrição do Nóia
let validador = " "
let cima = 0
let baixo = 0
function cabo() {
    if (som[0].checked) { // 1
        cima += 1
    }
    else if (som[1].checked) {
        baixo += 1
    }
    else {
        validador = "n"
    }

    if (bune[0].checked) { // 2
        cima += 1
    }
    else if (bune[1].checked) {
        baixo += 1
    }
    else {
        validador = "n"
    }

    if (laco[0].checked) { // 3
        cima += 1
    }
    else if (laco[1].checked) {
        baixo += 1
    }
    else {
        validador = "n"
    }

    if (juli[0].checked) { // 4
        cima += 1
    }
    else if (juli[1].checked) {
        baixo += 1
    }
    else {
        validador = "n"
    }

    if (fun[0].checked) { // 5
        cima += 1
    }
    else if (fun[1].checked) {
        baixo += 1
    }
    else {
        validador = "n"
    }
    cont.innerHTML = ""
    resp.innerHTML = `<p>Parabéns Você é Um nóia ${noia}</p><img src="${fotonoia}" alt="Nóia" id="fot"><p>${sobrenoia}</p>`
    resp.style.backgroundColor = "#888888"
    resp.style.width = "1200px"
    resp.style.borderRadius = "10px"
    resp.style.margin = "auto"
    resp.style.textAlign = "center"
    fot.style.height = "500px"
}