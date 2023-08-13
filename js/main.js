function validarFormulario() {
    var idade = document.getElementById("idade").value;

    if (idade < 18) {
        alert("Você precisa ter pelo menos 18 anos para se cadastrar.");
        return false;
    }

    return true;
}

function autoResize() {
    this.style.height = 'auto'; // Redefine a altura para auto 
    this.style.height = this.scrollHeight + 'px'; // Ajusta a altura com base no conteúdo 
  }

  window.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    textarea.addEventListener('input', autoResize);
  });