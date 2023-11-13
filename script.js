let menuVisible = false;

//Función que oculta o muestra el menu
function menu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}


//funcion para que cuando le de click a alguna opcion del menú se oculte automaticamente
function ClickOpcionesMenu() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}