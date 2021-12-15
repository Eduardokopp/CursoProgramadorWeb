
// SCRIPTS CADASTRO DE QUESTOES


function validacaoQuestoes() {


    var nivel = document.getElementById("nivel").value
    if (nivel == "0") {
        alert("Selecione um nivel")
        return
    }

    var curso = document.getElementById("curso").value
    if (curso == "0") {
        alert("Selecione o curso")
        return
    }

    var disciplina = document.getElementById("disciplina").value
    if (disciplina == "0") {
        alert("Selecione um disciplina")
        return
    }

    var texto = document.getElementById("texto").value
    if (texto == "") {
        alert("Digite a questao")
        return
    }
    else{
        alert("PASSAMOS")
    }
  
}