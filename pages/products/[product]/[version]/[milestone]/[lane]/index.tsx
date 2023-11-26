import { useRouter } from 'next/router'
import Lane from '../../../../../../components/Lane'
import LaneModel from '../../../../../../model/lane'
import { updateLanes, createLanes } from "../../../../../../functions/lanes";
import { useEffect, useState } from 'react'
import styles from "../../../styles/Game.module.css";

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()

   // Check that product is valid
  const [doors, setToLane] =  useState([])
  const product = router.query.product
  const version = router.query.version
  const milestone = router.query.milestone
  const laneID = router.query.laneID
  const id = +router.query.id
  console.log(product)
  console.log(version)
  console.log(milestone)
  console.log(laneID)
  console.log(id)


  const [lanes, setLanes] = useState([])


  // Present door must be less than total number of doors function. 
  useEffect(() => {
    const id = router.query.id 
    console.log('id')
    console.log(id)

    setToLane(createLanes(id, product, steps: StepModel[1], selected:boolean))
    }, [router?.query])

    }

  function renderLanes() {
      console.log("renderlanes")
      return  doors.map(door => {
        return <Lane key={lane.id} value={door}  />
      })  
  }

  // Return error message or render doors only if a valid value is provided. 
  return (
    <div id = {styles.game} >
              <div className ={styles.doors}>
                {renderLanes() }
              </div>
    </div>
  )
}
