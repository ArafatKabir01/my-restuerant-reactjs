import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Meal = ({meal}) => {
   
    console.log(meal)
    return (
        <div className='col'>
            {/* <CardGroup className='w-75'>
            <Card className='d-grid ' style={{ width: '18rem' }}>
            <Card.Img variant="top" className='w-80 h-75' src={meal.strCategoryThumb} />
            <Card.Body>
            <Card.Text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus provident, id quis assumenda libero. Sapiente, aut</p>
            </Card.Text>
            <Button variant="primary">See Deteils</Button>
            </Card.Body>
        </Card>
            </CardGroup> */}
   
  {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" className='w-80 h-75' src={meal.strCategoryThumb} />
        <Card.Body>
          <Card.Title>{meal.strCategory}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
        </div>

    );
};

export default Meal;