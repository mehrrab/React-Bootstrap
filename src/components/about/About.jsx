import { Col, Container } from "react-bootstrap"
import {Row} from "react-bootstrap"
import Image from 'react-bootstrap/Image';
import { Helmet } from "react-helmet-async"
import { RiTeamFill } from "react-icons/ri";
import { FaTeamspeak } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { useEffect } from "react";

import AOS from 'aos';
// import "aos/dist/aos.css"
import "../../../node_modules/aos/dist/aos.css"


const About = () => {
    useEffect(()=>{
        AOS.init({duration:2000})
    },[])
  return (
    <>
    <Helmet>
        <title>About Us</title>
    </Helmet>

        <Container className="pb-5 ">
                <Row  xs={12}><div className="text-center text-white  pt-4">
                <h2>ABOUT US</h2></div>
                {/* <p className="text-center">Magnam dolores commodi suscipit eius consequatur</p> */}
                </Row>

        <Row className="justify-content-center text-center mt-5 ">
                <Col  sm={12} lg={6} className='pe-lg-5'>
                <div class="justify-content-center mt-5">
                <Image className='img-fluid shadow-lg' src="src\assets\img\team3.jpg" style={{height:"600px"}} thumbnail />
                </div>
                
                </Col>

            <Col sm={12} xs={12} md={6} lg={6}>
                {/* ------------row 1-------------- */}
                <Row sm={12} className='mt-5 bg-dark'>
                  <Col data-aos="fade-down">
                    <h4 className="borderColor  mb-3 px-3 py-1  border border-danger rounded-5" style={{color:"#f44366"}}>About us</h4>
                    <h3>We build houses in the Scandinavian style</h3>
                    <p>Our main aim is to build both a reliable and modern house in the Scandinavian style. Your comfort and security matters for us.</p>
                  </Col>
                </Row>
                {/* -------------row 2------------------- */}
                <Row className='my-4 space-evenly ' gap={5} data-aos="fade-up">
                    <Col sm={2} xs={4} md={2} className='align-self-center inline-flex'>
                    <RiTeamFill className='fs-2 border rounded-circle p-2 w-75 h-75 bordericon' style={{color:'#f44366'}}/>
 
                     </Col>
                    <Col sm={10} xs={8}  md={10} className=' inline-flex' style={{maxWidth:"400px"}}>
        
                     <h4 class="title">Our Team</h4>
                        <p class="description">Our diverse team of artists ensures that we have the right fit for every project, bringing it to life with creativity and sophistication.</p>
                    </Col>
                </Row>
                {/* ------------row 3 ------------------- */}
                <Row sm={12} className="bg-dark">
                    <Col  sm={2} xs={4} md={2} xxs={2} className=' align-self-center ' >
                        {/* <div style={{color:'#c3a476'}}><GiStairsGoal  className='fs-2 border rounded-circle p-2 w-75 h-75 bordericon' /></div> */}
                          <div style={{color:'#f44366'}} >
                            <FaTeamspeak className="fs-2 border  rounded-circle p-2 w-75 h-75 " />
                            </div>  
                        </Col>
                        
                        <Col sm={10} xs={8}  md={10} className=' inline-flex' style={{maxWidth:"400px"}}>
                        
                            <h4 class="title">Our Intent</h4>
                            <p class="description">The two curators strive to create exquisite products that bring comfort, beauty, and sophistication into your space. All pieces in the collection are handcrafted from premium materials, ensuring quality that you deserve.</p>
                        </Col>
                    </Row>
                    {/* --------------row 4------------------ */}
                <Row sm={12} data-aos="fade-up" className='mt-4'>
                    <Col  xs={4} sm={2} md={2}className='align-self-center'>
                        <div style={{color:'#f44366'}}><IoCarSport  className='fs-2 border rounded-circle  p-2  w-75 h-75 bordericon' /></div>
                        
                    </Col>
                    <Col  xs={8} sm={10} md={10} className=' inline-flex' style={{maxWidth:"400px"}}>
                            <h4 class="title">Explore</h4>
                            <p class="description">At <span style={{color:"#f44366"}}>knight</span> Hospitality & Home, we believe that comfort and design go hand in hand. We strive to bring the perfect balance of both to create exceptional spaces that leave a lasting impression.</p>
                    </Col>
                </Row>
                
            </Col>
        </Row>
        </Container>
    </>
    
  )
}

export default About