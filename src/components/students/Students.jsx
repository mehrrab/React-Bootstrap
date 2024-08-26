import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import team from '../team/Team';
import { Container } from 'react-bootstrap';
import Aos from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { useEffect } from 'react';

const createCard =(team)=>{
  useEffect(()=>{
    Aos.init({duration:3000})
},[])

  

    return(
        <>
        <div>
          
          
          <Container>
            <Row>
            <Col key={team.id} data-aos="fade-up" >
          
          <Card className='p-2 shadow-lg'>
          {/* 100px160 */}
            <Card.Img variant="top" src={team.imgUrl }style={{width:"100%", height:"20%"}} />
            
            <Card.Body>
              <Card.Title>
                  <h2 className='fw-bold'>{team.name}</h2> 
                  <h6>{team.job}</h6>
              </Card.Title>
              <Card.Text>
                {team.email}
                <br />
                {team.phone}
  
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
            </Row>
          </Container>
        </div>
        </>
    )
}


const Team = () => {
  return (
    <Row xs={1} md={3} className="g-4 p-5  mt-5">
    {team.map(createCard)}
  </Row>

  
  )
}

export default Team