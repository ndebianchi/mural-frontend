// Abre e fecha Nav Mobile

function openNav() {
  document.getElementById("mobileSidebar").style.transform = "translateX(0)";
}

function closeNav() {
  document.getElementById("mobileSidebar").style.transform = "translateX(-100%)";
}


// Muda senha para texto
function mostrarSenha() {
  var x = document.getElementById("senha");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}