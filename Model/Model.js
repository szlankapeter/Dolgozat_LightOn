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
      case 0:
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        this.#allapotLista[index + 3] = !this.#allapotLista[index + 3];
        break;
      case 1:
        this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        this.#allapotLista[index + 3] = !this.#allapotLista[index + 3];
        break;
      case 2:
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
      case 7:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        break;
      case 8:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        this.#allapotLista[index] = !this.#allapotLista[index];
        break;
      default:
        this.#allapotLista[index - 3] = !this.#allapotLista[index - 3];
        this.#allapotLista[index - 1] = !this.#allapotLista[index - 1];
        this.#allapotLista[index] = !this.#allapotLista[index];
        this.#allapotLista[index + 3] = !this.#allapotLista[index + 3];
        this.#allapotLista[index + 1] = !this.#allapotLista[index + 1];
        break;
    }
  }

  getAllapot() {
    return this.#allapotLista;
  }

  setEgo() {
    let ego = 0;
    for (let i = 0; i < this.#allapotLista.length; i++) {
      if (this.#allapotLista[i]) {
        ego++;
      }
    }
    return ego;
  }



  listFel() {
    for (let index = 0; index < this.#allapotLista.length; index++) {
      if (Math.floor(Math.random() * 11) > 2) {
        this.#allapotLista[index] = true;
      } else {
        this.#allapotLista[index] = false;
      }
    }
  }
}
export default Model;
