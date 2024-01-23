import Layout from "components/Layout";
import NavbarModel from 'model/navbar'

// Passes data using navbar model structure with values in parethesis.
const n1 = new NavbarModel("400","Health",true)


function About() {
  return (
    <Layout>
      <h1>I am about page</h1>
    </Layout>
  )
}


export default About;