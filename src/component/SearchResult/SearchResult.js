import React from 'react';
import { Card } from 'react-bootstrap';

const SearchResult = ({searchMeal}) => {
    const {strArea, strCategory, strInstructions , strMealThumb,strMeal} = searchMeal
    return (         
        <div className='col border  rounded g-3 ms-3 shadow bg-body'>
            <Card.Img variant="top" className='h-50 mt-3 rounded' src={strMealThumb} />
            <Card.Body>
            <Card.Title>{strMeal}</Card.Title>
            <Card.Text>
                <p>{strInstructions.slice(0,100)}</p>
            </Card.Text>
            </Card.Body>
        </div>
  
            
    );
};

export default SearchResult;