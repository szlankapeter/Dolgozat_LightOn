class Model {
  #allapot;
  #allapotLista = [];

  constructor() {
    this.#allapot = true;
    this.#allapotLista = ["", "", "", "", "", "", "", "", ""];
    this.listFel();
  }

  setAllapot(index) {
    switch (index) {
      case 2:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 3] = !this.#allapotLista[index + 3];
        break;
      case 3:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        this.#allapotLista[index + 3] = !this.#allapotLista[index + 3];
        break;
      case 5:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 3] = !this.#allapotLista[index + 3];
        break;
      case 6:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        break;
      default:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        this.#allapotLista[index + 3] = !this.#allapotLista[index + 3];
        break;
    }
  }

  getAllapot() {
    return this.#allapotLista;
  }

  listFel() {
    for (let index = 0; index < this.#allapotLista.length; index++) {
      if (Math.floor(Math.random() * 11) > 2) {
        this.#allapotLista[index] = false;
      } else {
        this.#allapotLista[index] = true;
      }
    }
    console.log(this.#allapotLista);
  }
}
export default Model;
