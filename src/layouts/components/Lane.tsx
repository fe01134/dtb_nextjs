import styles from '../../styles/Lane.module.css';
import LaneModel from '../../../model/lane';
import Step from './Step';
import * as React from 'react';
import "@emotion/styled";



interface LaneProps {
    value: LaneModel
    onChange: (newLane: LaneModel) => void
}

export default function Lane(props: LaneProps) {
    const lane = props.value
    console.log ("Component lane ID")
    console.log ( lane.id)
    console.log ("lane description", lane.description)


    const selected = lane.selected


    // OnChange returns a lane and it calls component Lane to change it's color selection.
    const changeSelection = (e: any) => props.onChange(lane.alternarSelecao())  
    const abrir = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.onChange(lane.abrir())
    }

    function renderSteps() {
  
        return lane.steps.map((step, i) => {
            console.log ("lane map i", {i})
            console.log ("lane map stetp ", {step})
            return (
                <div key={`${step.id}-${i}`} >
                    
                    <Step 
                        key={`${step.id}-${i}`} 
                        value={step} 
                        onChange={(step) => console.log ("lane map onChange step") } ></Step>
                    
                 </div>
            )
        })
        
    }

    return (
        <div className={styles.lane} onClick={changeSelection}>
            {lane.id}
            {lane.description}
            {renderSteps()} 
        </div>
    )
}