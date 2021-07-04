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
            {/* <div className="content-info">
                <div className="content-text">
                    <h2>
                        What is Lorem Ipsum?
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <img src={img} width="300px" />
            </div> */}
            <Container style={{ paddingTop: "20px", borderTop: "1px solid gray" }}>
                {/* <Row>
                    <Col sm={8}>
                        <div className="content-text">
                            <h2>
                                What is Lorem Ipsum?
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <img src={img} width="390px" />
                    </Col>
                </Row> */}
                <Image src={img} width="480px" height="320px" style={{ marginTop: "10px",borderRadius:"5px", border:"1px solid gray"}}  />
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
