
import { useEffect, useState } from 'react'
import Lane from '../../components/Lane'
import LaneModel from '../../model/lane'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])


  async function carregarIdsDasQuestoes() {
    console.debug("call web services API")
    const resp = await fetch(`http://localhost:3000/api/products/rational/products`)
    console.log(resp.json)
    const idsDasQuestoes = await resp.json()
    console.debug("idsDasQuestoes")
    console.debug(idsDasQuestoes)
    setIdsDasQuestoes(idsDasQuestoes)
  }


useEffect(() => {
  console.debug("useEffect called")
  carregarIdsDasQuestoes()
}, [])

return(
  <div style={{display: "flex"}}> 
  
  </div>
) 
}