let pedidos = [];
let valorAperitivo = 0;
document.querySelector(".valorAperitivos").innerHTML = "R$" + valorAperitivo + ",00";
function quantidade(IdElemento, operacao, valor) {
    const elemento = document.getElementById(IdElemento);
    let quantidadeAtual = parseInt(elemento.textContent.trim());
    const valorExiste = pedidos.find(pedido => pedido.aperitivo === IdElemento);
    if (operacao === '+') {
        quantidadeAtual++;
        if(valorExiste){
            valorExiste.quantidade = quantidadeAtual;
            valorExiste.valorTotal = valor * quantidadeAtual;
            
        }
        else{    
            pedidos.push({
                aperitivo: IdElemento,
                quantidade: quantidadeAtual,
                valorUnitario: valor,
                valorTotal: valor * quantidadeAtual,
            });
        }
        valorAperitivo += valor;
    } else if (operacao === '-' && quantidadeAtual > 0) {
        quantidadeAtual--;
        if(valorExiste){
            valorExiste.quantidade = quantidadeAtual;
            valorExiste.valorTotal = valor * quantidadeAtual;
        }
        valorAperitivo -= valor;
    }
    document.querySelector(".valorAperitivos").innerHTML = "R$" + valorAperitivo + ",00";
    elemento.textContent = quantidadeAtual;
    sessionStorage.setItem(IdElemento, quantidadeAtual.toString());
}

function finalizarPedido(){
    sessionStorage.setItem("pedidos", JSON.stringify(pedidos));
}