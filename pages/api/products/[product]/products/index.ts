import products from '../../../bankOfProducts'

// Use URL http://localhost:3000/api/products/rational/products
// Works returns all products with all it's steps set to null

export default function productsById(req, res) {

    const productSelecionado = req.query.product
    console.log("API called with product")
    console.log(productSelecionado)

    const versionSelecionado = req.query.version
    console.log("API called with version selected")
    console.log(versionSelecionado)

    const milestoneSelecionado = req.query.milestone
    console.log("milestoneSelecionado")
    console.log(milestoneSelecionado)

    const idSelecionado = req.query.id
    console.log("idSelecionado")
    console.log(idSelecionado)
    console.log(products[0].id)
    
    //const unicaQuestaoOuNada = products.filter(product => product.id === idSelecionado.toString())
    //console.debug("unicaQuestaoOuNada")
    //console.debug(unicaQuestaoOuNada)
   

    //  If there are products returns all of them or else return 204 
    if (products.length >= 1 ) {
        res.status(200).json(products.map(product => product.paraObjeto()))
        console.log("Returns products - product name -  products")
    } else {
        console.log("204 error no products")
        res.status(204).send()
    }
}


