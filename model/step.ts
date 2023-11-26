export default class StepModel {
    #value: string
    #selected: boolean

    constructor(value: string, selected: boolean) {
        this.#value = value
        this.#selected = selected
    }

    static active(value: string) {
        return new StepModel(value, true)
    }
    
    static inactive(value: string) {
        return new StepModel(value, false)
    }

    get value() {
        return this.#value
    }

    get selected() {
        return this.#selected
    }


    static criarUsandoObjeto(obj: StepModel): StepModel {
        return new StepModel(obj.value, obj.selected)
    }

    paraObjeto() {
        return {
            value: this.#value,
            selected: this.#selected
        }
    }
}