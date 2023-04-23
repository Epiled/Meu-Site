class ProjetoView {
  constructor(container) {
    this.view = document.querySelector(container);
  }

  render(projeto) {
    const projetoListaItem = document.createElement('li');
    projetoListaItem.dataset.projetosListaItem = '';
    projetoListaItem.classList.add('projetos__item');

    const projetoThumb = document.createElement('img');
    projetoThumb.src = `./assets/projetos/${projeto.thumb}`;
    projetoThumb.width = projetoThumb.width;
    projetoThumb.height = projetoThumb.height;
    projetoThumb.classList.add('projetos__imagem');

    const projetoIntro = document.createElement('div');
    projetoIntro.classList.add('projetos__intro');

    const projetoTitulo = document.createElement('h3');
    projetoTitulo.classList.add('projetos__titulo');

    const projetoTxt = document.createElement('p');
    projetoTxt.classList.add('projetos__txt');

    const projetoBtn = document.createElement('button');
    projetoBtn.classList.add('projetos__btn');

    projetoTitulo.textContent = `${projeto.nomeProjeto}`;
    projetoTxt.textContent = `${projeto.descricao}`;
    projetoBtn.textContent = `Leia mais...`;

    const artigo = document.createElement('article');
    artigo.dataset.projetoArtigo = '';
    artigo.classList.add('artigo');

    const artigoContainer = document.createElement('div');
    artigoContainer.classList.add('artigo__container');

    const artigoMidia = document.createElement('img');
    artigoMidia.src = `./assets/projetos/${projeto.video}`;
    artigoMidia.width = artigoMidia.width;
    artigoMidia.height = artigoMidia.height;
    artigoMidia.classList.add('artigo__midia');

    const artigoTitulo = document.createElement('h4');
    artigoTitulo.classList.add('artigo__titulo');

    const artigoTxt = document.createElement('p');
    artigoTxt.classList.add('artigo__txt');

    const artigoTecnologiasTitulo = document.createElement('h4');
    artigoTecnologiasTitulo.classList.add('artigo__titulo');

    const artigoListaTecnologias = document.createElement('ul');
    artigoListaTecnologias.classList.add('artigo__lista', 'artigo__lista--tecnologia');

    projeto.tecnologias.forEach(tecnologia => {
      const artigoItem = document.createElement('li');
      artigoItem.textContent = tecnologia;
      artigoListaTecnologias.appendChild(artigoItem);
    });

    const artigoLista = document.createElement('ul');
    artigoLista.classList.add('artigo__lista');

    projeto.infos.forEach(info => {
      const artigoInfo = document.createElement('li');
      artigoInfo.textContent = info;
      artigoLista.appendChild(artigoInfo);
    })

    const artigoLinks = document.createElement('div');
    artigoLinks.classList.add('artigo__links');

    const artigoFechar = document.createElement('span');
    artigoFechar.dataset.projetoFechar = '';
    artigoFechar.classList.add('artigo__fechar');

    artigoTitulo.textContent = `${projeto.nomeProjeto}`;
    artigoTxt.textContent = `${projeto.txt}`;
    artigoFechar.textContent = `X`;
    artigoTecnologiasTitulo.textContent = 'Tecnologias';

    [projetoBtn, artigoFechar].forEach(btn => {
      btn.addEventListener('click', () => {
        this.showArtigo(artigo);
      });
    });

    artigoContainer.append(
      artigoTitulo
      , artigoTxt
      , artigoTecnologiasTitulo
      , artigoListaTecnologias
      , artigoLista
      , artigoFechar
      );
    artigo.append(artigoMidia, artigoContainer);

    projetoIntro.append(projetoTitulo, projetoTxt, projetoBtn, artigo);
    projetoListaItem.append(projetoThumb, projetoIntro);

    this.view.appendChild(projetoListaItem);
  }

  showArtigo(artigo) {
    artigo.classList.toggle('artigo--ativo');
    document.body.classList.toggle('ativo');
  }

}

export default ProjetoView;