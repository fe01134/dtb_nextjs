import StepModel from "./step"

export default class LaneModel {
    #id: string
    #description: string
    #steps: StepModel[]
    #selected: boolean

    constructor(id: string, description: string, steps: StepModel[],selected = false) {
        this.#id = id
        this.#description = description
        this.#steps = steps
        this.#selected = selected
    }

    static active(id: string, description: string, steps: StepModel[], selected = false) {
        return new LaneModel(id, description, steps, selected )  
    }
    
    static inactive(id: string, description: string, steps: StepModel[], selected = false) {
        return new LaneModel(id, description, steps, selected ) 
    }

    desselected() {
        const selected = false
        return new LaneModel(this.id, this.description, this.steps, this.selected )        
    }

    alternarSelecao() {
        const selected = !this.selected
        return new LaneModel(this.id, this.description, this.steps,  this.selected )
    }

    abrir() {
        const aberta = true
        return new LaneModel(this.id, this.description, this.steps, this.selected )
    }

    get id() {
        return this.#id
    }
    
    get description() {
        return this.#description
    }

    get steps() {
        return this.#steps
    }
    
    get selected() {
        return this.#selected
    }

    static criarUsandoObjeto(obj: LaneModel): LaneModel {
        const steps = obj.steps.map(step => StepModel.criarUsandoObjeto(step))
        return new LaneModel(obj.id, obj.description, steps, obj.selected)
    }
    
    embaralharRespostas(): LaneModel {
        let respostasEmbaralhadas = (this.#steps)
        return new LaneModel(this.#id, this.#description, respostasEmbaralhadas, this.#selected)
    }

    // IF there are no steps set the value to null for them otherwise map them.
    paraObjeto() {
        return {
            id: this.#id,
            description: this.#description,
            steps: this.#steps ? (this.#steps.map(step => step.paraObjeto())): null,
            selected: this.#selected
        }
    }
}
