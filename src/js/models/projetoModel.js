class ProjetoModel {
  constructor(item) {
    this.self = this;
    this.thumb = item.thumb;
    this.nomeProjeto = item.nomeProjeto;
    this.descricao = item.descricao;
    this.tecnologias = item.tecnologias;
    this.txt = item.texto;
    this.infos = item.infos;
    this.links = item.links;
    this.video = item.video;
  }
}

export default ProjetoModel;