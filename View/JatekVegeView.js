class JatekVegeView{

    constructor(szuloElem){
        this.szuloElem = szuloElem;
        this.#htmlFeltolt();
        this.gomb = $(".reset");
        this.gomb.on("click", ()=>{
            this.#esemeny("reset");
        });
    }

    #htmlFeltolt(){
        let txt = `<h2>Ennyi van még felkapcsolva: Nyertél</h2><button class="reset">Reset</button>`;
        this.szuloElem.html(txt);
    }

    #esemeny(nev) {
        const esemeny = new CustomEvent(nev, { detail: this });
        window.dispatchEvent(esemeny);
    }

}export default JatekVegeView