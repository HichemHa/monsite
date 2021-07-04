import React from 'react';
import './style.css';
import { Image, Container, Row, Col } from 'react-bootstrap';
import p1 from "./demeure.png"
import p2 from './frine.png'
import p3 from "./bijoux.jpg"
import { Link } from "react-router-dom";
function Projects() {

    return (
        <div className="container-cc" >
            <div className="content-header-cc" >
                <Link to="/">
                    <div className="btn">
                        <i class="fas fa-arrow-circle-left"></i>
                    </div>
                </Link>
                <h1 className="title-page">PORJECTS</h1>

                <Link to="/skills">
                <div className="btn">
                    <i class="fas fa-arrow-circle-right"></i>
                </div>
                </Link>

            </div>
            <ul className="project-lists" style={{ borderTop: "1px solid gray" }}>
                <li className="porject" style={{
                    backgroundImage: `url("${p1}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}><a href="http://actu.demeures-caractere-renovation.com/">Demeure</a></li>
                <li className="porject" style={{
                    backgroundImage: `url("${p2}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}><a href="http://actu.entretien-silo-farine.com/">Farine</a></li>
                <li className="porject" style={{
                    backgroundImage: `url("${p3}")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}><a>E-silver Shop</a></li>
                <li className="porject" style={{
                    backgroundImage: `url("https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/100104261_279914393372364_3108041637662556160_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=Pe1vpUUposcAX_2E_oV&_nc_ht=scontent.ftun15-1.fna&oh=04ba0580934826e5b9867a6c533de24e&oe=60E7EB17")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}><a>CapBon palette</a></li>
                <li className="porject" style={{
                    backgroundImage: `url("https://tunisiatesol.org/wp-content/uploads/2021/04/TEsol.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}><a href="http://tunisiatesol.org/ ">Tunisie Tesoal</a></li>
                <li className="porject" style={{
                    backgroundImage: `url("https://wpshopmart.com/wp-content/uploads/2016/12/Electronic-Store-OpenCart-Template-1.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}><a>Techno Store</a></li>
            </ul>
        </div>
    )
}

export default Projects
