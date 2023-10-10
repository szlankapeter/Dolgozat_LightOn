class Model{

    #allapot;
    #allapotLista=[];

    constructor(){
        this.#allapot = true;
        this.#allapotLista = ["", "", "", "", "", "", "", "", ""];
        this.listFel();
    }

    setAllapot(index){
        this.#allapotLista[index] = !this.#allapotLista[index];
    }


    getAllapot(){
        return this.#allapotLista;
    }

    listFel(){
        for (let index = 0; index < this.#allapotLista.length; index++) {
            if(Math.floor(Math.random() * 11) > 2)
            {
                this.#allapotLista[index] = false;
            }else{
                this.#allapotLista[index] = true;
            }
            
        }
        console.log(this.#allapotLista);
    }

}export default Model