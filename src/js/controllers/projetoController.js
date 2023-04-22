class ProjetoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  updateView() {
    this.view.render(this.model);
  }
}

export default ProjetoController;