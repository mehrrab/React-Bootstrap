import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import team from './Team';

const createCard =(team)=>{
    return(
        <Col key={team.id} >
        <Card className='p-2 shadow-lg '>
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