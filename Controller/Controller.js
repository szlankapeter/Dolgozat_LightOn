import Model from "../Model/Model.js";
import Field_view from "../View/Field_view.js";

class Controller{

    constructor(){
        
        
        const MODEL = new Model();
        new Field_view($(".jatekter"), MODEL.getAllapot());
        $(window).on("valt", (event)=>{
            MODEL.setAllapot(event.detail.getIndex());
            event.detail.szinBeallit(MODEL.getAllapot()[event.detail.getIndex()]);
            new Field_view($(".jatekter"), MODEL.getAllapot());
        })
    }

    



}export default Controller