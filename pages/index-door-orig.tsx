import { useEffect, useState } from 'react'
import LaneModel from '../model/lane'
import Lane from '../components/Lane'
import { useRouter } from 'next/router'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
    const router = useRouter()

    const [lane, setLane] = useState<LaneModel>()
    console.log('lane')
    console.log(lane)


    // Present door must be less than total number of doors function. 
    useEffect(() => {
        const doors = +router.query.doors 
        const hasPresent = +router.query.temPresente

        const qtdeDoorsValida = doors >= 3 && doors <= 100
        const temPresenteValido = hasPresent >= 1 && hasPresent <= doors


        setValido(qtdeDoorsValida && temPresenteValido)
        }, [doors, router.query.doors, router.query.temPresente])


  async function carregarQuestao(idLane: number) {
    const resp = fetch(`${BASE_URL}/products/rational/v1/m3/lane/${idLane}`)
    const json = resp.json()
    const newLane = LaneModel.criarUsandoObjeto(json)
    console.log("newLane")
    console.log(newLane)
    setLane(newLane)
  }

  return lane ? (
    <Lane
    valor={lane} />
  ) : false
}

