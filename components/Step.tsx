import styles from '../styles/Step.module.css'
import StepModel from "../model/step";

interface StepProps {
    value: StepModel
//    onChange: (newStep: StepModel) => void
}

export default function Step(props: StepProps) {

    const step_props  = props.value
    const selected = step_props.selected
    console.log("Step Component")
    console.log(step_props.selected)
    console.log(step_props.value)
    console.log(styles)
    
    // OnChange returns a new step and it calls component Door to change it's color selection.
    //const changeSelection = e => props.onChange(step.alternateSelection())  
    //const abrir = e => {
    //    e.stopPropagation()
    //    props.onChange(step.open())
    //}

    function renderSteps(){
        return (           
        
            <div className={styles.step}>
                {step_props.value}
            </div>
        )
    }
    
    return (
            <div className={styles.area}>
                <div className={`${styles.letter} ${selected}`}>
                    {step_props.value ? 
                        renderSteps(): 
                        step_props.selected ? <Presente></Presente>: false
                    }
                </div>
            </div>

    )
}