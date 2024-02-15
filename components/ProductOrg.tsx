import styles from '../styles/Lane.module.css'
import ProductModel from '../model/productOrg'
import Lane from './Lane'
import * as React from 'react'
import "@emotion/styled"



interface ProductProps {
    value: ProductModel
    onChange: (newLane: ProductModel) => void
}

export default function Product(props: ProductProps) {
    const product = props.value
    console.log ("product component")
    console.log ("product id", product.id)
    console.log ("product description", product.description)

    const selected = product.selected

    // OnChange returns a product and it calls component Lane to change it's color selection.
    const changeSelection = (e: any) => props.onChange(product.alternarSelecao())  
    const abrir = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.onChange(product.abrir())
    }

    function renderSteps() {
  
        return product.lanes.map((lane, i) => {
            console.log ("product map i", {i})
            console.log ("product map i lane", {lane})
            return (
                <Lane
                    key={`${lane.id}-${i}`} 
                    value={lane}
                    onChange={(lane) => console.log("on change")}
                ></Lane>

                
            )
        })
        
    }

    return (
        <div className={styles.product} onClick={changeSelection}>
            {product.id}
            {product.description}
            {renderSteps()} 
        </div>
    )
}