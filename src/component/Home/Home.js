import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import Meal from '../Meal/Meal';

const Home = () => {
    const [meals , setMeals] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => setMeals(data.categories))
    },[])
    return (
        <Container>
               <Row xs={1} md={2} className="g-4 mt-5">
                {
                    meals.map(meal => <Meal  key={meal.idCategory} meal ={meal} ></Meal>)
                }            
                
            </Row>

        </Container>
         

    );
};

export default Home;
// d-flex flex-wrap justify-content-between gap-3 mt-5