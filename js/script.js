function abrir() {
    var pagamento = document.orcamento.inputPagamento.value;
    
    if (pagamento == "Cartão de débito") {
        document.getElementById('cartao').style.display = "block";
        document.orcamento.numero.required = true;
        document.orcamento.codigo.required = true;
        document.orcamento.vencimento.required = true;
        document.orcamento.numero.focus()

        document.getElementById('pix').style.display = "none";
    } else if (pagamento == "Pix") {
        document.getElementById('pix').style.display = "block";
        document.getElementById('cartao').style.display = "none";
        document.orcamento.numero.required = false;
        document.orcamento.codigo.required = false;
        document.orcamento.vencimento.required = false;
    }
}


function somente_numero(e) {
    tecla = (window.event)?event.keyCode:e.which;

    if ((tecla >= 48 && tecla <= 57) || (tecla>=96 && tecla <= 105) || (tecla == 8) || (tecla == 37) || (tecla == 39) || (tecla == 46) ){
        return true;
    }
    else{
        return false;
    }
}

function telefone(obj){
    if(obj.value.length == 0){
        obj.value += "("
    }
    else if(obj.value.length == 3){
        obj.value += ")"
    }
    else if(obj.value.length == 9){
        obj.value += "-"
    }
}

function cartao(obj) {
    comprimento = obj.value.length
    if (comprimento == 4) {
        obj.value += " ";
    } else if (comprimento == 9) {
        obj.value += " ";
    } else if (comprimento == 14) {
        obj.value += " ";
    }
}

function salto(campo,digito) {
    if (campo == "numero") {
        if(digito.length==19) {
            document.orcamento.cod.focus()
        }
    }

    if (campo == "cod") {
        if(digito.length==3) {
            document.orcamento.vencimento.focus()
        }
    }
}

function data(obj) {
    comprimento = obj.value.length;
    if (comprimento == 2) {
        obj.value += "/";
    }
}

function notificacao() {
    nome = document.orcamento.nome.value;
    alert(`Seu pedido foi efetuado!, ${nome}!`)
    window.location = 'index.html';
    return false
}