import lanes from '../bankOfLanes'

// Use URL http://localhost:3000/api/products
// Works returns all lanes with all it's steps

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
    
    //const unicaQuestaoOuNada = lanes.filter(lane => lane.id === idSelecionado.toString())
    //console.debug("unicaQuestaoOuNada")
    //console.debug(unicaQuestaoOuNada)
   

    //  If there are lanes returns all of them or else return 204 
    if (lanes.length >= 1 ) {
        res.status(200).json(lanes.map(lane => lane.paraObjeto()))
        console.log("return all lanes in products list")
    } else {
        console.log("204 error no lanes")
        res.status(204).send()
    }
}


