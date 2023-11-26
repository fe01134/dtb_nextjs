import styles from '../styles/Lane.module.css'
import LaneModel from '../model/lane'
import Step from './Step'

interface LaneProps {
    value: LaneModel
}

export default function Lane(props: LaneProps) {
    const lane = props.value
    console.log ("lane component")
    console.log (lane.id)
    console.log (lane.description)
    
    function renderSteps() {
        return lane.steps.map((step, i) => {
            return (
                <Step
                    key={`${lane.id}-${i}`}
                    value={step}
                > {lane.id} `${lane.id}`</Step>
            )
        })
    }

    return (
        <div className={styles.lane}>
            {lane.id}
            {lane.description}
            {renderSteps()}
        </div>
    )
}