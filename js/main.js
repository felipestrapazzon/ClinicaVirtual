function validarFormulario() {
    var idade = document.getElementById("idade").value;

    if (idade < 18) {
        alert("Você precisa ter pelo menos 18 anos para se cadastrar.");
        return false;
    }

    return true;
}