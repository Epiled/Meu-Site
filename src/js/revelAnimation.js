const habilidades = document.querySelectorAll('[data-animation]');
const linha = document.querySelector('.linha');


window.addEventListener('scroll', initAnimaton);

function initAnimaton() {
  const alturaDeAtivacao = this.innerHeight * .8;

  habilidades.forEach((item, i, lista) => {
    const itemPosicao = item.getBoundingClientRect().top;
    let controleAnimacao = itemPosicao <= alturaDeAtivacao;

    if (controleAnimacao && i != 0) {
      lista[i - 1].onanimationstart = () => {
        item.classList.add('active');
        item.style.animationDelay = `${1 / 10}s`;
      }

      if (lista[i - 1].dataset.complete) {
        item.classList.add('active');
        item.style.animationDelay = `${1 / 10}s`;
      }

      lista[i - 1].onanimationend = () => {
        item.dataset.complete = 'true';
      }
    } else if (controleAnimacao) {
      item.classList.add('active');
      item.style.animationDelay = `${1 / 10}s`;
    }

  });
}