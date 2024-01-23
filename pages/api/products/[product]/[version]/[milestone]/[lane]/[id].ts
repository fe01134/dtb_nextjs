import lanes from '../../../../../bankOfLanes'

// Use URL http://localhost:3000/api/products/rational/v1/m3/24/306
// Works returns a single lane with all it's steps for a specific product version

export default function lanesById(req, res) {

    const productSelecionado = req.query.product
    console.log("productSelecionado")
    console.log(productSelecionado)

    const versionSelecionado = req.query.version
    console.log("versionSelecionado")
    console.log(versionSelecionado)

    const milestoneSelecionado = req.query.milestone
    console.log("milestoneSelecionado")
    console.log(milestoneSelecionado)

    const idSelecionado = req.query.id
    console.log("idSelecionado")
    console.log(idSelecionado)
    console.log(lanes[0].id)
    
    const unicaQuestaoOuNada = lanes.filter(lane => lane.id === idSelecionado.toString())
    console.debug("unicaQuestaoOuNada")
    console.debug(unicaQuestaoOuNada)
   

    //  If a value is not null they return the object else return 204
    if (unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        console.log(questaoSelecionada.paraObjeto())
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        console.log("204 error")
        res.status(204).send()
    }
}


