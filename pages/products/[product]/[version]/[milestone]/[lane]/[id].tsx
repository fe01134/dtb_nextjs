import { useRouter } from 'next/router'
import LaneModel from '../../../../../../model/lane'
import { useEffect, useState } from 'react'

// Test using URL http://localhost:3001/products/rational/v1/m3/24/306

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()
  const product = router.query.product
  console.log('product')
  console.log(product)
  const version = router.query.version
  const milestone = router.query.milestone
  const laneID = router.query.laneID
  const id = router.query.id
  console.log(product)
  console.log(version)
  console.log(milestone)
  console.log(laneID)
  console.log(id)

  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<LaneModel>()


  async function carregarIdsDasQuestoes() {
    console.log("carregarIdsDasQuestoes")
    //const resp = await fetch(`BASE_URL/api/${product}/${version}/${milestone}/${lane}/${id}`)
    const resp = await fetch(`BASE_URL/api/products`)   
    console.log('resp')
    console.log(resp.body)
    const idsDasQuestoes = await resp.json()
    console.log('ids landes')
    console.log(idsDasQuestoes)
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    console.log("carregarQuestao")
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`)
    const json = await resp.json()
    const newLane = LaneModel.criarUsandoObjeto(json)
    setLane(newLane)
  }

  useEffect(() => {
    carregarIdsDasQuestoes()
  }, [])


  const [lane, setLane] = useState<LaneModel>()
  console.log('lane')
  console.log(lane)

  const fetchData = async () => {
    console.log("fetchData")
    const res = await fetch(BASE_URL+`/api/${product}/${version}/${milestone}/${lane}/${id}`)
    console.log('res')
    console.log(res)
    const data = await res.json()
    console.log('data')
    console.log(data)
    const newLane = LaneModel.criarUsandoObjeto(data)
    setLane(newLane)
}

  return lane ? (
    <div style={{display: "flex"}}>
    fetchData
              </div>
      ) : <div>Nothing here for you</div>
}
