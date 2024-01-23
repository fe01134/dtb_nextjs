import styles from '../styles/Lane.module.css'
import ProductModel from '../model/product'
import Lane from '../Lane'
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
    const changeSelection = e => props.onChange(product.alternarSelecao())  
    const abrir = e => {
        e.stopPropagation()
        props.onChange(product.abrir())
    }

    function renderSteps() {
  
        return product.lanes.map((lane, i) => {
            console.log ("product map i", {i})
            return (
                <Lane
                    key={`${product.id}-${i}`}
                    value={lane}
                > {product.id} `${product.id}`</Lane>
            )
        })
        
    }

    return (
        <div className={styles.product}>
            {product.id}
            {product.description}
            {renderSteps()} 
        </div>
    )
}