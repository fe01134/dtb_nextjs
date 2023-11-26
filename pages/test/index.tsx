import Lane from '../../components/Lane'
import LaneModel from '../../model/lane'
import StepModel from '../../model/step'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

    const l1 = new LaneModel("400","Health", [
        StepModel.inactive('Imports Data'),
        StepModel.inactive('Cleans Data'),
        StepModel.inactive('Creates Notebook'),
        StepModel.active('Trains Model')
    ], true)

  return(
    <div style={{display: "flex"}}>   <Lane value={l1}  />
    </div>

  ) 
}