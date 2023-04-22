
import projetos from './mocks/projetos.js';

// console.log(projetos[0].nomeProjeto);
projetos.forEach(projeto => {
  new Projeto(projeto);
})

class Projeto {
  constructor(item) {
    this.self = this;
    this.artigo = projeto.querySelector('[data-projeto-artigo]');
    this.botao = projeto.querySelector('[data-projeto-btn]');
    this.btnFechar = projeto.querySelector('[data-projeto-fechar]');

    this.thumb = item.thumb;
    this.titulo = item.nomeProjeto;
    this.descricao = item.descricao;

    [this.botao, this.btnFechar].forEach(element => {
      element.addEventListener('click', () => {
        this.showArtigo();
      })
    })
  }

  showArtigo() {
    this.artigo.classList.toggle('artigo--ativo');
  }
}

let projetosContainer = document.querySelector('[data-projetos-lista]');
let projetosItens = projetosContainer.querySelectorAll('[data-projetos-lista-item]');

projetosItens.forEach((projeto) => {
  new Projeto(projeto);
});

// let projetobtn = document.querySelector('[data-projetos-btn]');
// let projetoArtigo = document.querySelector('[data-projeto-artigo]');

// projetobtn.addEventListener('click', (e) => {
//   projetoArtigo.classList.toggle('artigo--ativo');
// })
