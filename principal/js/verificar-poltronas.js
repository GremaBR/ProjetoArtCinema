let poltronas = [];
let ingressos = 0;
document.querySelector(".ingressos").innerHTML = ingressos;
document.querySelector(".valorIngressos").innerHTML = "R$" + ingressos * 24 + ",00";
function VerificarPoltronas(name, id) {
    let poltrona = document.getElementById(id);
    if (poltrona.src.match("1f7e2.png")) {
        poltrona.src = "https://images.emojiterra.com/google/android-10/512px/1f535.png";
        poltronas.push(id);
        ingressos++;
        document.querySelector(".valorIngressos").innerHTML = "R$" + ingressos * 24 + ",00";
    } else {

        poltrona.src = "https://images.emojiterra.com/twitter/v14.0/512px/1f7e2.png";
        poltronas = poltronas.filter(idPoltrona => idPoltrona !== id);
        ingressos--;
        document.querySelector(".valorIngressos").innerHTML = "R$" + ingressos * 24 + ",00";
    }
    document.querySelector(".ingressos").innerHTML = ingressos;
}


function confirmarReserva(){
    sessionStorage.setItem("poltronas", JSON.stringify(poltronas));
}



