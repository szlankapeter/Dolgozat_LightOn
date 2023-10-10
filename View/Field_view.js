import Lampa_view from "./Lapma_view.js";

class Field_view {
  constructor(szuloElem, allapotLista) {
    szuloElem.empty();
    for (let i = 0; i < 9; i++) {
      if (allapotLista[i] == true) {
        new Lampa_view(szuloElem, i, "sarga");
      } else {
        new Lampa_view(szuloElem, i, "zold");
      } 
    }
  }
}
export default Field_view;
