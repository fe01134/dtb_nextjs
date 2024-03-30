import Lane from '../components/Lane'
import LaneModel from '../../../model/lane'
import StepModel from '../../../model/step'

//const BASE_URL = 'http://localhost:3000/api'


export default function Home() {

    const l1 = new LaneModel(401,"Health", [
        StepModel.inactive(1, 'Imports Data'),
        StepModel.inactive(2, 'Cleans Data'),
        StepModel.inactive(3, 'Creates Notebook'),
        StepModel.active(4, 'Trains Model')
    ], true)

  return(
    <div style={{display: "flex"}}>   
      <Lane 
        value= {l1}
        onChange= {l1 => l1}
        />
    </div>
  ) 


}