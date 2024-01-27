import Lane from '../../components/Lane'
import LaneModel from '../../model/lane'
import StepModel from '../../model/step'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

    const l1 = new LaneModel(400, "Health", [
        StepModel.inactive(700, "Imports Data"),
        StepModel.inactive(701, "Cleans Data"),
        StepModel.inactive(702, "Creates Notebook"),
        StepModel.active(702, "Trains Model")
    ], true)

  return(
    <div style={{display: "flex"}}>   
      <Lane 
        value={l1}
        onChange={(l1) => console.log("on change")}
      ></Lane> 
    </div>

  ) 
}