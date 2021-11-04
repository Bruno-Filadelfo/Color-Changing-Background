function yellow() {
  limpar();
  document.getElementById("titulo").classList.add('yellow');
}

function green() {
  limpar();
  document.getElementById("titulo").classList.add('green');
}

function blue() {
  limpar();
  document.getElementById("titulo").classList.add('blue');
}

function red() {
  limpar();
  document.getElementById("titulo").classList.add('red');
}

function limpar() {
  document.getElementById("titulo").classList.remove('yellow');
  document.getElementById("titulo").classList.remove('green');
  document.getElementById("titulo").classList.remove('blue');
  document.getElementById("titulo").classList.remove('red');
  document.getElementById("titulo").classList.remove('black');
} 


function mostrarTelefone() {
  document.getElementById("telefone").style.display = "block";
}

