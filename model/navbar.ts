export default class NavbarModel {
    #id: string
    #value: string
    #selected: boolean

    constructor(id: string, value: string, selected: boolean) {
        this.#id = id
        this.#value = value
        this.#selected = selected
    }

    static active(id:string, value: string) {
        return new NavbarModel(id, value, true)
    }
    
    static inactive(id:string, value: string) {
        return new NavbarModel(id, value, false)
    }

    get id() {
        return this.#id
    }

    get value() {
        return this.#value
    }

    get selected() {
        return this.#selected
    }

    alternarSelecao() {
        const selecionada = !this.selected
        return new NavbarModel(this.id, this.value, this.selected)
    }

    abrir() {
        const aberta = true
        return new NavbarModel(this.id, this.value, this.selected)
    }

    static criarUsandoObjeto(obj: NavbarModel): NavbarModel {
        return new NavbarModel(obj.id, obj.value, obj.selected)
    }

    paraObjeto() {
        return {
            id: this.#id,
            value: this.#value,
            selected: this.#selected
        }
    }
}