import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faFileCode, faObjectUngroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
function home() {
    return (
        <div>
            <div className="Home">
            <div className="HomeContent">
                <h1>
                    I Am Piyush The
                    <span 
                    className="TxtType"
                    data-wait="3000"
                    data-words='["UI/UX Developer", "Mobile Application Developer" ]'>
                    </span>
                    {/* <p className="lead">I specialize in React JS, React Native and Angular</p> */}
                    <p><Link to="/work" className="Btn-light">View Work</Link></p>
                </h1>
            </div>
            </div>
            <section className="TextCenter PY-2">
                <div class="HomeContainer">
                    <h2 className="SectionTitle"> I specialize In</h2>
                    <div className="BottomLine"></div>
                    <p className="lead">
                        Creating Digital MasterPieces and UI/UX layouts for websites and Mobile Applications
                    </p>
                    <div className="Specials">
                      <div>
                        <FontAwesomeIcon  className="fas" icon={ faFileAlt } size="2x"/>
                        <h3>Concepting</h3>
                        <p></p>
                      </div>
                      <div>
                      <FontAwesomeIcon  className="fas" icon={ faFileCode } size="2x"/>
                        <h3>UI/UX</h3>
                        <p></p>
                      </div>
                      <div>
                      <FontAwesomeIcon  className="fas" icon={ faObjectUngroup } size="2x"/>
                        <h3>Visula Design</h3>
                        <p></p>
                      </div>
                      <div>
                      <FontAwesomeIcon  className="fas" icon={ faThumbsUp } size="2x"/>
                        <h3>Interaction</h3>
                        <p></p>
                      </div>
                    </div>
               </div>
            </section>
        </div>
    )
}

export default home
