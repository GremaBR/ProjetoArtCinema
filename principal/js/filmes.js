let horarios = document.getElementsByClassName("horarios");

function nomeFilme(){
    let nome = document.querySelector(".descricao h1").innerHTML;
    return nome;
}

function classificacao(){
    let classificacao = document.querySelector(".classificacao h3").innerHTML;
    return classificacao;
}

function horarioSessao(event){
    let horario = event.innerHTML;
    return horario;
}

function idioma(event){
    let idioma = event.parentElement.getAttribute("data-tipoFilme");
    return idioma;
}

function criarFilme(event){
    const filme = {
        nome: nomeFilme(),
        classificacao: classificacao(),
        idioma: idioma(event),
        horario: horarioSessao(event),
    }
    return filme;
}

Array.from(horarios).forEach(horario => {
    horario.addEventListener("click", function (){
        const filme = criarFilme(this);
        sessionStorage.setItem("filme",JSON.stringify(filme));
    });
});