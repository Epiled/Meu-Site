import projetos from "./mocks/projetos.js";
import ProjetoController from "./controllers/projetoController.js";
import ProjetoModel from "./models/projetoModel.js";
import ProjetoView from "./views/projetoView.js";
import { animacao } from "./revelAnimation.js";

projetos.map(projeto => {
  const model = new ProjetoModel(projeto);
  const view = new ProjetoView('[data-projetos-lista]');
  const controller = new ProjetoController(model, view);
  controller.updateView()
});

animacao.atualizaLista();
animacao.initAnimaton();
