const menuBotao = document.querySelector("[data-menu-hamburguer]");
const menuBarra = document.querySelector("[data-menu-barra]");

menuBotao.addEventListener("click", function() {
  document.documentElement.classList.toggle("menu__ativo");
  menuBarra.classList.toggle("menu__navegacao--aberto");
});

document.documentElement.onclick = function (event) {
  if (event.target === document.documentElement) {
    document.documentElement.classList.toggle("menu__ativo");
    menuBarra.classList.toggle("menu__navegacao--aberto");
  }
};