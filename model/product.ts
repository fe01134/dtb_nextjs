import LaneModel from "./lane"

export default class ProductModel {
    #id: number
    #description: string
    #version: string
    #milestone: string
    #lanes: LaneModel[]
    #selected: boolean

    constructor(id: number, description: string, version: string, milestone: string, lanes: LaneModel[],selected = false) {
        this.#id = id
        this.#description = description
        this.#lanes = lanes
        this.#selected = selected
    }

    static active(id: number, description: string, version: string, milestone: string, lanes: LaneModel[], selected = false) {
        return new ProductModel(id, description, version, milestone, lanes, selected )  
    }
    
    static inactive(id: number, description: string, version: string, milestone: string, lanes: LaneModel[], selected = false) {
        return new ProductModel(id, description,  version, milestone, lanes, selected ) 
    }

    desselected() {
        const selected = false
        return new ProductModel(this.id, this.description, this.version, this.milestone, this.lanes, this.selected )        
    }

    alternarSelecao() {
        const selected = !this.selected
        return new ProductModel(this.id, this.description, this.version, this.milestone, this.lanes,  this.selected )
    }

    abrir() {
        const aberta = true
        return new ProductModel(this.id, this.description, this.version, this.milestone, this.lanes, this.selected )
    }

    get id() {
        return this.#id
    }
    
    get description() {
        return this.#description
    }

    get version() {
        return this.#version
    }
    
    get milestone() {
        return this.#milestone
    }

    get lanes() {
        return this.#lanes
    }
    
    get selected() {
        return this.#selected
    }

    static criarUsandoObjeto(obj: ProductModel): ProductModel {
        const lanes = obj.lanes.map(lane => LaneModel.criarUsandoObjeto(lane))
        return new ProductModel(obj.id, obj.description, obj.version, obj.milestone, lanes, obj.selected)
    }
    
    embaralharRespostas(): ProductModel {
        let respostasEmbaralhadas = (this.#lanes)
        return new ProductModel(this.#id, this.#description, this.#version, this.#milestone, respostasEmbaralhadas, this.#selected)
    }

    paraObjeto() {
        return {
            id: this.#id,
            description: this.#description,
            lanes: this.#lanes.map(lane => lane.paraObjeto()),
            selected: this.#selected
        }
    }
}