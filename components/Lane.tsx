import styles from '../styles/Lane.module.css'
import LaneModel from '../model/lane'
import Step from './Step'
import * as React from 'react'
import "@emotion/styled"



interface LaneProps {
    value: LaneModel
    onChange: (newLane: LaneModel) => void
}

export default function Lane(props: LaneProps) {
    const lane = props.value
    console.log ("Component lane")
    console.log ("lane id", lane.id)
    console.log ("lane description", lane.description)

    const selected = lane.selected

    // OnChange returns a lane and it calls component Lane to change it's color selection.
    const changeSelection = e => props.onChange(lane.alternarSelecao())  
    const abrir = e => {
        e.stopPropagation()
        props.onChange(lane.abrir())
    }

    function renderSteps() {
  
        return lane.steps.map((step, i) => {
            console.log ("lane map i", {i})
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