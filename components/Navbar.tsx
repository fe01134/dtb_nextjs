import NavbarModel from "../model/navbar"
import styles from '../styles/Step.module.css'

interface NavbarProps {
    value: NavbarModel
    onChange: (newNavbar: NavbarModel) => void
}

export default function Navbar(props: NavbarProps) {
    const navbar = props.value
    console.log ("navbar component")
    console.log ("navbar id", navbar.id)
    console.log ("navbar value", navbar.value)

    function renderSteps() {
            return (
                <>
                <nav className="navbar">
                <div className="container">
                  <div className="navbar-brand">
                    <a className="navbar-item" href="../">
                      <h1>Design Think Build </h1>
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                      <div className=" navbar-item">
                        <div className="control has-icons-left">
                          <input className="input is-rounded" type="email" placeholder="Search" />
                          <span className="icon is-left">
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                      </div>
                      <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                      {navbar.value}
                      </a>
                      <a className="navbar-item is-size-5 has-text-weight-semibold">
                        Examples
                      </a>
                      <a className="navbar-item is-size-5 has-text-weight-semibold">
                        Features
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
              </>

            )
    }


    return (
        <div>
            {renderSteps()} 
        </div>
    )
}