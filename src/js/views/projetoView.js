class ProjetoView {
  constructor(container) {
    this.view = document.querySelector(container);
  }

  render(projeto) {
    this.criaThumbArtigo(projeto);
  }

  criaThumbArtigo(projeto) {
    const projetoListaItem = document.createElement('li');
    projetoListaItem.dataset.projetosListaItem = '';
    projetoListaItem.dataset.animation = '';
    projetoListaItem.classList.add('projetos__item');

    const projetoThumb = document.createElement('img');
    projetoThumb.src = `./assets/projetos/${projeto.thumb}`;
    projetoThumb.width = projetoThumb.width;
    projetoThumb.height = projetoThumb.height;
    projetoThumb.classList.add('projetos__imagem');

    projetoThumb.alt = `Logo do projeto ${projeto.nomeProjeto}`

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

    // const projetoArtigo = this.criaConteudoArtigo(projeto);

    projetoBtn.addEventListener('click', () => {
      let projetoArtigo = this.criaConteudoArtigo(projeto)
      this.showArtigo(projetoArtigo);
    });

    projetoIntro.append(
      projetoTitulo
      , projetoTxt
      , projetoBtn
      // , projetoArtigo
    );
    projetoListaItem.append(projetoThumb, projetoIntro);

    return this.view.appendChild(projetoListaItem);
  }

  criaConteudoArtigo(projeto) {
    // Artigo
    const artigo = document.querySelector('[data-projeto-artigo]');
    artigo.innerHTML = '';

    const artigoGeral = document.createElement('div');
    artigoGeral.classList.add('artigo__geral');

    const artigoContainer = document.createElement('div');
    artigoContainer.classList.add('artigo__container');

    const artigoMidia = document.createElement('video');
    artigoMidia.src = `./assets/projetos/${projeto.video}`;
    artigoMidia.controls = true;
    artigoMidia.muted = true;

    artigoMidia.classList.add('artigo__midia');

    const artigoTitulo = document.createElement('h4');
    artigoTitulo.classList.add('artigo__titulo');

    const artigoTxt = document.createElement('p');
    artigoTxt.classList.add('artigo__txt');

    const artigoTecnologiasTitulo = document.createElement('h4');
    artigoTecnologiasTitulo.classList.add('artigo__titulo');

    const artigoListaTecnologias = document.createElement('ul');
    artigoListaTecnologias.classList.add('artigo__lista', 'artigo__lista--tecnologia');

    // Tecnologias do Artigo
    projeto.tecnologias.forEach(tecnologia => {
      const artigoItem = document.createElement('li');
      const artigoTecnologia = document.createElement('img');
      artigoTecnologia.classList.add('artigo__tecnologia');
      
      artigoTecnologia.src = tecnologia.imagem;
      artigoTecnologia.width = '50';
      artigoTecnologia.height = '50';
      artigoTecnologia.loading = 'lazy';
      artigoTecnologia.alt = tecnologia.texto;

      artigoItem.appendChild(artigoTecnologia);
      artigoListaTecnologias.appendChild(artigoItem);
    });

    const artigoLista = document.createElement('ul');
    artigoLista.classList.add('artigo__lista');

    projeto.infos.forEach(info => {
      const artigoInfo = document.createElement('li');
      artigoInfo.classList.add('artigo__item');
      artigoInfo.textContent = info;

      artigoLista.appendChild(artigoInfo);
    });

    const artigoLinks = document.createElement('div');
    artigoLinks.classList.add('artigo__links');

    const artigoFechar = document.createElement('span');
    artigoFechar.dataset.projetoFechar = '';
    artigoFechar.classList.add('artigo__fechar');

    artigoTitulo.textContent = `${projeto.nomeProjeto}`;
    artigoTxt.textContent = `${projeto.txt}`;
    artigoFechar.textContent = `X`;

    artigoFechar.addEventListener('click', () => {
      this.showArtigo(artigo);
    });

    artigoTecnologiasTitulo.textContent = 'Tecnologias';

    artigoContainer.append(
      artigoTitulo
      , artigoTxt
      , artigoTecnologiasTitulo
      , artigoListaTecnologias
      , artigoLista
      , artigoFechar
    );
    artigoGeral.append(artigoMidia, artigoContainer);

    const artigoLinksExternos = this.criaBotoes(projeto.links);

    artigo.append(artigoGeral, artigoLinksExternos);

    return artigo;
  }

  criaBotoes(links) {

    const containerBotoes = document.createElement('div');
    containerBotoes.classList.add('artigo__botoes');

    const linksExterno = [];
    Object.keys(links).forEach(key => {
      const link = document.createElement('a');
      link.classList.add('artigo__botao');
      link.setAttribute('target', '_blank');
      link.textContent = key;
      link.href = links[key];

      link.getAttribute('href') != '' ? linksExterno.push(link) : '';
        
      //console.log(key, links[key]);
    });

    linksExterno.forEach(link => {
      containerBotoes.append(link);
    })

    return containerBotoes;
  }

  showArtigo(artigo) {
    artigo.classList.toggle('artigo--ativo');
    document.body.classList.toggle('ativo');
  }
}

export default ProjetoView;