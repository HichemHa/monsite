import React from 'react';
import './style.css';
import { Image, Container } from 'react-bootstrap';
import img from "./devloper.jpg"
import { Link } from "react-router-dom";
function About() {
    return (
        <div className="container-cc">
            <div className="content-header-cc">

                <div className="btn">
                    <i class="fas fa-arrow-circle-left"></i>
                </div>

                <h1 className="title-page">ABOUT ME</h1>
                <Link to="/projects">
                    <div className="btn">
                        <i class="fas fa-arrow-circle-right"></i>
                    </div>
                </Link>


            </div>

            <Container style={{ paddingTop: "20px", borderTop: "1px solid gray" }}>
                <Image src={img} width="480px" height="320px" style={{ marginTop: "10px", borderRadius: "5px", border: "1px solid gray" }} />
                <h2>
                    Hey, i'm Hichem ;)
                </h2>
                <h3>
                    Digital Marketeer / Developer living in Tunisia, Ar
                </h3>
            </Container>
        </div>
    )
}

export default About
