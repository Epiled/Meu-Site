class ProjetoModel {
  constructor(item) {
    this.self = this;
    // this.artigo = projeto.querySelector('[data-projeto-artigo]');
    // this.botao = projeto.querySelector('[data-projeto-btn]');
    // this.btnFechar = projeto.querySelector('[data-projeto-fechar]');
    this.thumb = item.thumb;
    this.nomeProjeto = item.nomeProjeto;
    this.descricao = item.descricao;
    this.tecnologias = item.tecnologias;
    this.txt = item.texto;
    this.infos = item.infos;
    this.links = item.links;
    this.video = item.video;

    // [this.botao, this.btnFechar].forEach(element => {
    //   element.addEventListener('click', () => {
    //     this.showArtigo();
    //   })
    // })
  }
}

export default ProjetoModel;