const botonMenu = document.querySelector('.boton-menu-lateral');
const menuLateral = document.querySelector('.cont-menus');

botonMenu.addEventListener('click', () => {
  menuLateral.classList.toggle('llave')
});
