import lanes from '../../../../../bankOfLanes'

//Use URL http://localhost:3000/api/products/rational/v1/m3/24/306

export default function questoesProId(req, res) {
    const idSelecionado = req.query.id
    console.log("idSelecionado")
    console.log(idSelecionado)
    console.log(lanes[0].id)
    const unicaQuestaoOuNada = lanes.filter(lane => lane.id === idSelecionado.toString())
    console.log("unicaQuestaoOuNada")
    console.log(unicaQuestaoOuNada)

    //  If a value is not null they return the object else return 204
    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        console.log(questaoSelecionada)
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        console.log("204 error")
        res.status(204).send()
    }
}


