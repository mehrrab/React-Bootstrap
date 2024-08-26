// import videoBg from "../../assets/video/mainVideo.mp4"
import { Button, Col, Container, Row} from "react-bootstrap"
import React from "react"
import videoBg from "../../assets/video/mainVideo.mp4"

const Main = () => {
  return (
    <>
    <Container fluid >
        <section className="box ">
            <video src={videoBg} autoPlay muted loop class="back-video"></video>
            <div class="content" className="  fw-bold p-4 text-center  mb-5 pb-5 ">
             <img src="src\assets\img\ferrari.png" alt="ferariPng" className="fw-bold    pb-5"style={{height:"250px"}} />   
            <h1 className="h1MSH mt-4 p-sm-6 ">WELCOME TO KNIGHT STUDIO</h1>
            
            <div class="exBTN mt-5"><a href="#"class="a1" className="text-white text-decoration-none ">EXPLORE</a></div>
            </div>
        </section>

        {/* <Row className=" text-center">
            
            <div class="hero">
            <video autoPlay loop muted playsInline src={videoBg} class="back-video"></video>
            <nav></nav>
            <div className="content">
                <h1>KNIGHT STUDIO</h1>
                <a href="#">EXPLORE</a>
            </div>
            

        </div>
        </Row> */}
        
        
            
            {/* <div className="playvideo">
                <div className="overlay">

                </div>
            <video src={videoBg} className="video" autoPlay loop muted />
            </div> */}
            
        
              {/* <div class="hero">
                <div class="content">
                    <h1>knight stodio</h1>
                    <a href="#">explore</a>

                </div>

              </div> */}
    </Container>
    <div></div>
    <div></div>

    {/* <div className="text-center fw-bold text-white"><h1>Main</h1></div> */}
    <div></div>
    {/* <div className="main">
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
            <h1>WELCOME</h1>
            <p>to my site</p>
        </div>
    </div> */}


    {/* <div className="text-dark text-white text-center "><h1>Main</h1></div> */}
        {/* <Container fluid className="mt-5 p-0">
              <div className="playvideo">
                <div className="overlay">

                </div>
              <video src={videoBg} className="video" autoPlay loop muted />
              </div>          
           
                <div className="content">
                    <h1 className="display-1" data-aos="fade-up">PASSION</h1>
                    <h2 className="mb-5 display-1" data-aos="fade-up">FOR QUALITY</h2>
                    <a href="#about" class="btn-get-started scrollto"></a>

                    <Button className="rounded-5 btnstart fw-bold fs-5"  data-aos="fade-up">Get Started</Button>{' '}
                </div>
                <div>
                </div>
            </Container> */}


    {/* <div  className="hero container-fluid col-12 ">

                <video className="col-md-12" autoPlay loop muted playsInline class="back-video" >
                    <source src="../../src/assets/Video/mainVideo.mp4" type="video/mp4" />
                </video>

               

                <div className="content container-fluid mx-auto col-12">
                    <h1 className="col-12 col-md-12  mx-auto "> The Knight Studio</h1>
                    <a href="#">Explore</a>
                </div>

            </div> */}
   
    </>
  )
}

export default Main