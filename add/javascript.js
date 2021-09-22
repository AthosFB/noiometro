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
let nota = 0
function cabo() {
    if (som[0].checked) { // 1
        nota += 1
    }
    else {
        nota -= 1
    }
    if (bune[0].checked) { // 2
        nota += 1
    }
    else {
        nota -= 1
    }
    if (laco[0].checked) { // 3
        nota += 1
    }
    else {
        nota -= 1
    }
    if (juli[0].checked) { // 4
        nota += 1
    }
    else {
        nota -= 1
    }
    if (fun[0].checked) { // 5
        nota += 1
    }
    else {
        nota -= 1
    }
    cont.innerHTML = ""
    resp.innerHTML = `<p>Parabéns Você é Um nóia ${nota}</p><img src="${fotonoia}" alt="Nóia" id="fot"><p>${sobrenoia}</p>`
    resp.style.backgroundColor = "#888888"
    resp.style.width = "1200px"
    resp.style.borderRadius = "10px"
    resp.style.margin = "auto"
    resp.style.textAlign = "center"
    fot.style.height = "500px"
}