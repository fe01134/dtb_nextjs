import styles from '../styles/Step.module.css'
import StepModel from "../model/step"
import Presente from "./Present"
import Button from '@mui/material/Button'

interface StepProps {
    value: StepModel
    onChange: (newStep: StepModel) => void
}

export default function Step(props: StepProps) {

    const step  = props.value
    const selected = step.selected
    console.log("Step Component")
    console.log("     selected", step.selected)
    console.log("     value", step.value)
    console.log("     styles", styles)

    // OnChange returns a new step and it calls component Door to change it's color selection.
    //const changeSelection = e => props.onChange(step_props.alternarSelecao())  
    //const abrir = e => {
    //    e.stopPropagation()
    //    props.onChange(step_props.abrir())
    //}

    function renderSteps(){

        return (           
            <div className={styles.step}>
                {step.value}
            </div>
        )
    }


    return (
            <div className={styles.area}>
                <div className={`${styles.letter} ${selected}`}>
                    {step.value ? 
                        renderSteps(): 
                        step.selected ? <Button>{step.value}</Button>: false
                    }
                </div>
            </div>

    )

}