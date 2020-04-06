/* _____________________________________________________________
  Alteração no posicionaento da div "mobileSidebar" para efeito
  de deslizar uma vez que se encontrava fora da área do display.
*/

function openNav() { // Abre Nav (width vira 250px)
  document.getElementById("mobileSidebar").style.transform = "translateX(0)";
}
function closeNav() { // Fecha Nav (width vira 0)
  document.getElementById("mobileSidebar").style.transform = "translateX(-100%)";
}


/* _____________________________________________________________
  Controla exibição e inibição da div "background-modal" sempre 
  que a função for chamada, fechando também quem a chamou
*/
let modalToHide = false;
function toggleBackgroundModal(modal = false) {
  // Verifica envio de modal para inibição apóes fechamento
  if (modal !== false){
    modalToHide = modal;
  }

  // Verifica se "background-modal" está oculto.
  //  - Se sim: exiba.
  //  - Se não: esconda.
  let display = document.getElementById('background-modal').style.display;
  if (display == "none" || display == ""){
    document.getElementById('background-modal').style.display = 'block';
  } else {
    document.getElementById('background-modal').style.display = "none";

    // Verifica se existe modal aberto para inibir junto do background
    if (modalToHide !== false){
      document.getElementById(modalToHide).style.display = "none";
    }
  }
}


/* _____________________________________________________________
  Controla exibição e inibição da div "profile-dropdown" sempre 
  que a função for chamada
*/

function profileDropdown() {
  // Habilita visualização do background do modal
  toggleBackgroundModal('profile-dropdown');

  // Verifica se "profile-dropdown" está oculto.
  //  - Se sim: exiba.
  //  - Se não: esconda.
  let display = document.getElementById('profile-dropdown').style.display;
  if (display == "none" || display == ""){
    document.getElementById('profile-dropdown').style.display = 'block';
  } else {
    document.getElementById('profile-dropdown').style.display = "none";
  }
}


/* _____________________________________________________________
  Controla exibição e inibição da div "modais" sempre 
  que a função for chamada
*/

function openModal(texto) {
  // Habilita visualização do background do modal
  toggleBackgroundModal('open-modal');

  // Atribui conteúdo ao modal
  document.getElementById('open-modal').innerHTML = '<h1>' + texto + '</h1>';
  

  // Verifica se "modais" está oculto.
  //  - Se sim: exiba.
  //  - Se não: esconda.
  let display = document.getElementById('open-modal').style.display;
  if (display == "none" || display == ""){
    document.getElementById('open-modal').style.display = 'block';
  } else {
    document.getElementById('open-modal').style.display = "none";
  }
}

