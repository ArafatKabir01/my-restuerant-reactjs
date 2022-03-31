import React, { useEffect, useState } from 'react';
import { Button, CardGroup, Container, FormControl, InputGroup } from 'react-bootstrap';
import SearchResult from '../SearchResult/SearchResult';

const Search = () => {
    const [searchResult , setSearchResult] = useState('')
    const [seacrhMeals , setSearchMeals] = useState([])
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSearchMeals(data.meals))
    },[searchResult])


    const searchItem = e =>{
        setSearchResult(e.target.value)
    }
    return (
        <div>
            <Container >
                <InputGroup onChange={searchItem} className="mb-3 mt-5   ">
                    <FormControl
                    
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button onClick={searchItem} variant="outline-secondary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
                <div className='container'>
                <div className=' row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center '>
                    {
                        seacrhMeals.map(searchMeal => <SearchResult key={searchMeal.idMeal} searchMeal={searchMeal}></SearchResult>)

                    }
                </div>
                </div>
              
            </Container>
        </div>
    );
};

export default Search;