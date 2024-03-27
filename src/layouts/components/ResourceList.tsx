import ResourceListModel from "../../../model/resourcelist"

interface ResourceListProps {
    value: ResourceListModel
    onChange: (newResourceList: ResourceListModel) => void
}

export default function ResourceList(props: ResourceListProps) {
    const resourcelist = props.value
    console.log ("ResourceList component")
    console.log ("ResourceList id", resourcelist.id)
    console.log ("ResourceList value", resourcelist.value)

    const selected = resourcelist.selected

    // OnChange returns a product and it calls component Lane to change it's color selection.
    const changeSelection = (e: any) => props.onChange(resourcelist.alternarSelecao())  
    const abrir = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.onChange(resourcelist.abrir())
    }

    function renderSteps() {
            return (
                <>
                    <section className="hero ">
                        <div className="hero-body">
                        <div className="container">

                            <section className="section">
                            <div className="columns is-variable is-8">
                                <div className="column is-5 is-offset-1 ">
                                <div className="content is-medium">
                                    <h2 className="subtitle is-5 has-text-grey">Column 1</h2>
                                    <h1 className="title has-text-black is-3">{resourcelist.id}</h1>
                                    <p className="has-text-dark">{resourcelist.value}</p>
                                </div>
                                </div>
                                <div className="column is-5">
                                <div className="content is-medium">
                                    <h2 className="subtitle is-5 has-text-grey">Column 2</h2>
                                    <h1 className="title has-text-black is-3">{resourcelist.id}</h1>
                                    <p className="has-text-dark">{resourcelist.value}</p>
                                </div>
                                </div>
                            </div>
                            </section>

                            <div className="is-divider"></div>


                        </div>
                        </div>
                    </section>
                </>
            )
    }


    return (
        <div>
            {renderSteps()} 
        </div>
    )
}