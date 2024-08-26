import { FaRegListAlt } from "react-icons/fa";
import { Col, Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import { BsCheck2All } from "react-icons/bs";
import { useEffect } from "react"
import Aos from "aos";

const Services = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


    return (
      <div className="text-center text-white">
        {/* <FaRegListAlt/> */}

        <Container className="">
            <Row  xs={12}><div className="text-center text-white ">
            <h1>Services</h1></div>
                <p className="text-center">We offer the full spectrum of services to help organizations work better!!</p>
            </Row>

            ------------
            <Row className="justify-content-center text-center mt-5 ">
                

                <Col sm={12} xs={12} md={6} lg={6}>
                    {/* ----------------Row1------------- */}
                <Row sm={12} className='mt-5 '>
                    <Col sm={2} xs={4} md={2} className='align-self-center inline-flex'>
                        <BsCheck2All className="fs-2   p-2 w-75 h-75"style={{color:"#f44366"}}/>
                    </Col>

                  <Col data-aos="fade-up ">
                    <h2 className="text-left ">mehrab</h2>
                    <h3 >We build houses in the Scandinavian style</h3>
                    <p >Our main aim is to build both a reliable and modern house in the Scandinavian style. Your comfort and security matters for us.</p>
                  </Col>
                </Row>

                {/* ----------Row2 --------------- */}
                <Row sm={12} className='mt-5 '>
                    <Col sm={2} xs={4} md={2} className='align-self-center inline-flex'>
                    <BsCheck2All className="fs-2  p-2 w-75 h-75"style={{color:"#f44366"}}/>

                    </Col>


                  <Col data-aos="fade-up">
                    <h4 className="textgreen  mb-3 px-3 py-1  border rounded-5">Harum esse qui</h4>
                    <h3>We build houses in the Scandinavian style</h3>
                    <p>Our main aim is to build both a reliable and modern house in the Scandinavian style. Your comfort and security matters for us.</p>
                  </Col>
                </Row>
                {/* ----------Row3 --------------- */}
                <Row sm={12} className='mt-5 '>
                <Col sm={2} xs={4} md={2} className='align-self-center inline-flex'>
                    <BsCheck2All className="fs-2   p-2 w-75 h-75"style={{color:"#f44366"}}/>

                    </Col>


                  <Col data-aos="fade-up">
                    <h4 className="textgreen  mb-3 px-3 py-1  border rounded-5">About us</h4>
                    <h3>We build houses in the Scandinavian style</h3>
                    <p>Our main aim is to build both a reliable and modern house in the Scandinavian style. Your comfort and security matters for us.</p>
                  </Col>
                </Row>
                {/* ------------Row4--------------- */}
                <Row sm={12} className='mt-5 '>
                <Col sm={2} xs={4} md={2} className='align-self-center inline-flex'>
                    <BsCheck2All className="fs-2   p-2 w-75 h-75"style={{color:"#f44366"}}/>

                    </Col>
                    
                  <Col data-aos="fade-up">
                    <h4 className="textgreen  mb-3 px-3 py-1   border rounded-5">About us</h4>
                    <h3>We build houses in the Scandinavian style</h3>
                    <p>Our main aim is to build both a reliable and modern house in the Scandinavian style. Your comfort and security matters for us.</p>
                  </Col>
                </Row>
                
                </Col>


                <Col  sm={12} lg={6} >
                    <div>
                        <img className='img-fluid shadow-lg' src="src\assets\img\team1.jpg" alt="our services"style={{height:"700px"}} thumbnail />
                    </div>
                
                
                </Col>

                

            </Row>
        </Container>
      </div>
      

    )
  }
  
  export default Services