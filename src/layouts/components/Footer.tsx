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
                            <strong>       {footer.value} - Blog theme</strong> by <a href="https://gonzalojs.com">Gonzalo Gutierrez</a>. Based on the <a
                            href="http://jigsaw-blog-staging.tighten.co/">jigsaw-blog</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
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