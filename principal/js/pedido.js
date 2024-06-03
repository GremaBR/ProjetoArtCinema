
const filmeInfos = JSON.parse(sessionStorage.getItem("filme"));
const poltronasSelecionadas = JSON.parse(sessionStorage.getItem("poltronas"));
const aperitivosSelecionados = JSON.parse(sessionStorage.getItem("pedidos"));
let valorTotal = 0;

function exibirFilmes(){
    document.querySelector(".movie-info #movie-title").innerHTML = filmeInfos.nome;
    document.querySelector(".movie-info #movie-classification").innerHTML = filmeInfos.classificacao;
    document.querySelector(".movie-info #movie-lang").innerHTML = filmeInfos.idioma;
}

function exibirHorario(){
    document.querySelector("#showtime-time").innerHTML = filmeInfos.horario;
}

function exibirPoltronas(){
    let poltronas = "";
    poltronasSelecionadas.forEach(poltrona => {
        poltronas += `<li> ${poltrona}</li>`;
    });
    document.querySelector("#selected-seats").innerHTML = poltronas;
}

function exibirAperitivos(){
    let aperitivos = "";
    let valores = "";
    let quantidade = "";
    aperitivosSelecionados.forEach(aperitivo => {
        aperitivos += `<li>${aperitivo.quantidade}  ${aperitivo.aperitivo.split("-").join(" ")} R$${aperitivo.valorTotal},00  </li>`;
        valorTotal += aperitivo.valorTotal;
    });
    document.querySelector("#food-items").innerHTML = aperitivos;
}

function exibirValorTotal(){
    document.querySelector("#total-price").innerHTML = "R$" + valorTotal + ",00";
}

function exibirTotalIngressos(){
    document.querySelector("#seats-price").innerHTML = poltronasSelecionadas.length +" R$" + poltronasSelecionadas.length * 24 + ",00";
    valorTotal += poltronasSelecionadas.length * 24;
}


function exibirInfos(){
    exibirFilmes();
    exibirHorario();
    exibirPoltronas();
    exibirAperitivos();
    exibirTotalIngressos();
    exibirValorTotal();
}

exibirInfos();

