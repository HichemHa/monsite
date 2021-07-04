import React from 'react';
import './style.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
function Skills() {
    return (
        <div className="container-cc" >
            <div className="content-header-cc" >
                <Link to="/projects">
                    <div className="btn">
                        <i class="fas fa-arrow-circle-left"></i>
                    </div>
                </Link>
                <h1 className="title-page">SKILLS</h1>

                <Link to="/">
                    <div className="btn">
                        <i class="fas fa-arrow-circle-right"></i>
                    </div>
                </Link>

            </div>
            <div style={{ height: "75%", borderTop: "1px solid gray", padding: "58px" }}>
                {/* <p>compeyance</p> */}
                <ul className="skils-lists" style={{}}>
                    <li className="skills" style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>

                    </li>
                    <li className="skills" style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>
                    </li>
                    <li className="skills" style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>
                    </li>


                    <li className="skills" style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>

                    </li>
                </ul>
                <ul className="skils-lists" >
                    <li className="skills" style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>
                    </li>
                    <li className="skills" style={{
                        backgroundImage: `url("https://ichi.pro/assets/images/max/724/1*Ipg_guKJO2MwacQ_3amxGw.jpeg")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>
                    </li>

                    <li className="skills" style={{
                        backgroundImage: `url("https://www.easy-micro.org/images/logiciels/web-frameworks/bootstrap-stack.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>
                    </li>
                    <li className="skills" style={{
                        backgroundImage: `url("https://docs.ovh.com/ca/fr/hosting/installer-manuellement-wordpress/images/3125.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>
                    </li>
                </ul>
                <ul className="skils-lists" >
                    <li className="skills" style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px"
                    }}>
                    </li>

                    <li className="skills" style={{
                        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "150px",
                    }}>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
