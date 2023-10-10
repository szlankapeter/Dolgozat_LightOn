import JatekVegeView from "./JatekVegeView.js";

class EredmenyView{

    constructor(szuloElem, egoLampa){
        this.szuloElem = szuloElem;
        this.egoLampa = egoLampa;
        this.#htmlFeltolt();
        this.#nyertE();
    }


    #htmlFeltolt(){
        let txt = "<h3>Eredmeny</h3>";
        txt += `<h2>Ennyi van még felkapcsolva: ${this.egoLampa}</h2>`;
        this.szuloElem.html(txt);
    }

    egoBeallit(ego){
        this.egoLampa = ego;
    }

    #nyertE(){
        if(this.egoLampa == 0){
          new JatekVegeView($("body"));
        }
        
      }

}export default EredmenyView