import Navbar from "components/Navbar";
import NavbarModel from 'model/navbar'

// Passes data using navbar model structure with values in parethesis.
const n1 = new NavbarModel("400","Health",true)

// Creates a local component within this page and passes data within its element tag name MyTest
const MyTest = (props) => {

    return(
        <>
        <h1>My Test Component </h1>
        {props.children}
        </>
    )

}

// Using children notation. Creates a local component within this page and passes data within its element tag name MyTest
const MyTest2 = ({children}) => {

    return(
        <>
        <h1>Using children notation for local Component </h1>
        {children}
        </>
    )

}

function About() {
  return (
    
    <>
    <Navbar value={n1}> </Navbar>
    <h1>I am about page. </h1>

    <MyTest>
        <h1>Hello There. </h1>
        <h1>Hi There </h1>
    </MyTest>

    <MyTest2>
        <h1>hello children reference. </h1>
    </MyTest2>
    </>
  )
}


export default About;