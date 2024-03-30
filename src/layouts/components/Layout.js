
// Javascript example of passing data children tags from parent page tags.
import Navbar from "components/Navbar";
// import ActiveResource from "components/ActiveResource";
import NavbarModel from 'model/navbar'

// Passes data using navbar model structure with values in parethesis.
const n1 = new NavbarModel("400","Health",true)

const Layout = ({children}) =>
  <>
    <Navbar value={n1}></Navbar>

    { children }
  </>

export default Layout;