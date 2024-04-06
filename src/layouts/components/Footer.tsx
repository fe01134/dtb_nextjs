import FooterModel from "../../../model/footer"

interface FooterProps {
    value: FooterModel
    onChange: (newFooter: FooterModel) => void
}

export default function Footer(props: FooterProps) {
    const footer = props.value
    console.log ("Footer component")
    console.log ("Footer id", footer.id)
    console.log ("Footer value", footer.value)

    function renderSteps() {
            return (
                <>
                    <footer className="footer">
                        <div className="content has-text-centered">
                        <p>
                            <strong>{footer.value} - Blog theme</strong>
                            
                        </p>
                        </div>
                    </footer>
                </>
            )
    }


    return (
        <div>
            {renderSteps()} 
        </div>
    )
}