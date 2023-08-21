let animaveis = '';

window.addEventListener('scroll', initAnimaton);

function initAnimaton() {
  const alturaDeAtivacao = window.innerHeight * .8;

  animaveis.forEach((item, i, lista) => {
    const itemPosicao = item.getBoundingClientRect().top;
    let controleAnimacao = itemPosicao <= alturaDeAtivacao;

    if (controleAnimacao && i != 0) {
      lista[i - 1].onanimationstart = () => {
        atualizaEstado();
        item.dataset.complete = 'true';
      }

      if (lista[i - 1].dataset.complete) {
        atualizaEstado()
      }

      lista[i].onanimationend = () => {
        item.dataset.complete = 'true';
      }

      lista[i - 1].onanimationend = () => {
        item.dataset.complete = 'true';
      }

    } else if (controleAnimacao) {
      atualizaEstado()
    }
  });
}

function atualizaLista() {
  animaveis = document.querySelectorAll('[data-animation]');
}

function atualizaEstado() {
  item.classList.add('active');
  item.style.animationDelay = `${1 / 10}s`;
}

atualizaLista();
initAnimaton();

export const animacao = {
  atualizaLista,
  initAnimaton
};