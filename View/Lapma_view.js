class Lampa_view {
    constructor(szuloElem, index, szin) {

        this.szuloElem = szuloElem;
        this.index = index;
        this.szin = szin;
        this.elem = null;
        this.#kiir();
        this.elem = szuloElem.children("div:last-child");;
        this.gomb= $("button");
        this.elem.on("click", () => {
            this.#esemeny("valt");
        });

        if (szin=="sarga") {
            this.elem.css("background-color", "orange");
        } else {
            this.elem.css("background-color", "green");
        }
    }

    getIndex() {
        return this.index;
    }

    #kiir() {
        let txt = `<div class="elem"><p></p></div>`;
        this.szuloElem.append(txt);
    }

    szinBeallit(allapot) {
        if (allapot == true) {
            this.elem.css("background-color", "orange");
        } else {
            this.elem.css("background-color", "green");
        }
    }

    #esemeny(nev) {
        const esemeny = new CustomEvent(nev, { detail: this });
        window.dispatchEvent(esemeny);
    }
} export default Lampa_view