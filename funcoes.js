function esconder() {

    //document.getElementById("conteudoLista").style = "display: none;";
    //document.getElementById("lista").style = "background-color: rgb(121, 126, 123);";
}

function mostrar() {

    //document.getElementById("conteudoLista").style = "display: block;";
}

function informacaoShow(eu) {

    eu.parentNode.getElementsByClassName("gavetaUp")[0].style = "display: none;";
    eu.parentNode.getElementsByClassName("gavetaDown")[0].style = "display: block;";
    eu.parentNode.getElementsByClassName("informacao")[0].style = "height: 100%;";
    eu.parentNode.getElementsByClassName("texto")[0].style = "overflow-y: auto;";
}

function informacaoHide(eu) {

    eu.parentNode.getElementsByClassName("gavetaDown")[0].style = "display: none;";
    eu.parentNode.parentNode.getElementsByClassName("informacao")[0].style = "height: 10%;";
    eu.parentNode.parentNode.getElementsByClassName("gavetaUp")[0].style = "display: block;";
    eu.parentNode.getElementsByClassName("texto")[0].style = "overflow: none;";
}


function opensinopse(eu) {
    document.getElementsByClassName("sinopseTexto")[0].style = "display:block;";
    /*alert(eu.parentNode.id);*/
    document.getElementsByClassName("sinopseDescricao")[0].innerHTML = livros[eu.parentNode.id].sinopse;
    let imagem = eu.parentNode.getElementsByClassName("imagem")[0].innerHTML;
    document.getElementsByClassName("sinopseImg")[0].innerHTML = imagem;

}

function closesinopse() {
    document.getElementsByClassName("sinopseTexto")[0].style = "display:none;";
    document.getElementsByClassName("sinopseDescricao")[0].innerHTML = "";
}

function procurar() {

    let input = document.getElementById("procurar").value;
    input = input.toLowerCase();

    let livrosDiv = document.getElementsByClassName("livro");
    let esconderEstilos = document.getElementsByClassName("estilos");

    for (var i = 0; i < livrosDiv.length; i++) {

        if (!livrosDiv[i].innerHTML.toLowerCase().includes(input)) {
            livrosDiv[i].style.display = "none";
        } else {
            livrosDiv[i].style.display = "block";
        }
    }

    var controlo, todos = 0;

    for (let index = 0; index < nomeEstilos.length; index++) {
        controlo = 0;

        for (contador = 0; contador < quantidade[index]; contador++) {
            if (livrosDiv[todos].style.display == "none") {
                //alert(livrosDiv[contador].className);
                controlo++;
            }
            todos++;
        }

        if (controlo == quantidade[index]) {
            //alert(imgEstilo[index]);
            esconderEstilos[index].style.display = "none";
        } else {
            esconderEstilos[index].style.display = "block";
        }
    }
}