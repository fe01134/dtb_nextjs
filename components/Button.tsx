import * as React from 'react';
import MuiButton from '@mui/joy/Button';
import ButtonModel from "../model/resourcehighlight"

interface ButtonProps {
    value: ButtonModel
    onChange: (newResourceHighligt: ButtonModel) => void
}

export default function Button(props: ButtonProps) {
    const resourcehighlight = props.value
    console.log ("Button component")
    console.log ("Button id", resourcehighlight.id)
    console.log ("Button value", resourcehighlight.value)

    function renderButton() {
            return (
                <>
                 <MuiButton variant="solid">Hello world</MuiButton>;  
                </>
            )
    }


    return (
        <div>
            {renderButton()} 
        </div>
    )
}