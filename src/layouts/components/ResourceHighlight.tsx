import ResourceHighlightModel from "../../../model/resourcehighlight"

interface ResourceHighlightProps {
    value: ResourceHighlightModel
    onChange: (newResourceHighligt: ResourceHighlightModel) => void
}

export default function ResourceHighlight(props: ResourceHighlightProps) {
    const resourcehighlight = props.value
    console.log ("ResourceHighlight component")
    console.log ("ResourceHighlight id", resourcehighlight.id)
    console.log ("ResourceHighlight value", resourcehighlight.value)


    const selected = resourcehighlight.selected

    // OnChange returns a product and it calls component Lane to change it's color selection.
    const changeSelection = (e: any) => props.onChange(resourcehighlight.alternarSelecao())  
    const abrir = (e: { stopPropagation: () => void }) => {
        e.stopPropagation()
        props.onChange(resourcehighlight.abrir())
    }


    function renderResourceHighlight() {
            return (
                <>
                      <section className="hero ">
        <div className="hero-body">
          <div className="container">

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">May 25, 2023</h2>
                    <h1 className="title">Getting Started</h1>
                    <p>This is a starter template for creating a beautiful, customizable blog with minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="is-divider"></div>

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">May 25, 2023</h2>
                    <h1 className="title">Getting Started</h1>
                    <p>This is a starter template for creating a beautiful, customizable blog with minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>
                </>
            )
    }


    return (
        <div>
            {renderResourceHighlight()} 
        </div>
    )
}