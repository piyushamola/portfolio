import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import './footer.scss'

function footer() {
    return (
        <footer className="Main-Footer">
            <div className="Footer-Content Footer-Container">
                <p>Copyright &copy; 2020. All Rights Reserved</p>
                <div className="Social">
                <FontAwesomeIcon  className="fab" icon={ faFacebook } size="2x"/>
                <FontAwesomeIcon  className="fab" icon={ faLinkedin } size="2x"/>
                <FontAwesomeIcon  className="fab" icon={ faInstagram } size="2x"/>
                </div>
            </div>
        </footer>
    )
}

export default footer
