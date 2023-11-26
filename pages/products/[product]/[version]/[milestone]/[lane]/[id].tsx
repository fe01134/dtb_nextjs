import { useRouter } from 'next/router'
import Lane from '../../../../../../components/Lane'
import LaneModel from '../../../../../../model/lane'
import { useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()
  const product = router.query.product
  console.log('product')
  console.log(product)
  const version = router.query.version
  const milestone = router.query.milestone
  const laneID = router.query.laneID
  const id = +router.query.id
  console.log(product)
  console.log(version)
  console.log(milestone)
  console.log(laneID)
  console.log(id)


  const [lane, setLane] = useState<LaneModel>()
  console.log('lane')
  console.log(lane)

  const fetchData = async () => {
    const res = await fetch(BASE_URL+`/products/${product}/${product}/${milestone}/${lane}/${id}`)
    const data = await res.json()
    const newLane = LaneModel.criarUsandoObjeto(data)
    setLane(newLane)
}

  return lane ? (
    <div style={{display: "flex"}}>
          <Lane
        value={lane} />
              </div>
      ) : <div>Nothing here for you</div>
}
