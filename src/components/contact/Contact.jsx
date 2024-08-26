import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineMobile } from "react-icons/ai";






export const Contact = () => {

    // useEffect(()=>{
    //     AOS.init({duration:2000})
    // },[])

    return (
        <Container className='mt-5'>
          <Row>
            <Col sm={4} >
            <Row className='w-100'>
            <Row className='  mx-auto gx-4'>
              
                <Col md={4} className=' mx-auto text-center pt-2 '><IoLocationOutline className='textgreen fs-3 rounded-circle bg-light p-1 text-dark' style={{width:'40', height:"40"}}/></Col>
                <Col md={8}><h4>Location:</h4><p className='mt-2'>A108 Adam Street, New York, NY 535022</p></Col>
            </Row>
            <Row className='  mx-auto gx-4'>
            <Col md={4}className=' mx-auto text-center pt-2 '><AiOutlineMail className='textgreen fs-3 rounded-circle bg-light p-1 text-dark' style={{width:'40', height:"40"}}/></Col>
            <Col md={8}><h4>Email:</h4><p className='mt-2'>info@example.com</p></Col>
            </Row>

            <Row className='  mx-auto gx-4'>
            <Col md={4}className=' mx-auto text-center pt-2 '><AiOutlineMobile className='textgreen fs-3 rounded-circle bg-light p-1 text-dark' style={{width:'40', height:"40"}}/></Col>
                <Col md={8}><h4>Call:</h4><p className='mt-2'>+1 5589 55488 55s</p></Col>
            </Row>

          </Row>
          
            </Col>
            <Col sm={8} data-aos="fade-right">
                <Form>
                    <Row>
                        <Col SM={6}>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="Your Email" className='rounded-0 p-2' />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                     <Form.Control type="text" placeholder="Subject"  className='rounded-0 p-2'/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                     <Form.Control as="textarea"placeholder="your message" rows={4}  className='rounded-0 p-2'/>
                    </Form.Group>

                    <Row className="mb-5 mx-auto algn-item-center" style={{width:150}}>
                        <div type="submit"  className='rounded-pill px-3 py-2  btnSend '>Send Message</div>
                    </Row>

                </Form>
            </Col>
          </Row>
          
          
        </Container>
        
      );
  
}
export default Contact
