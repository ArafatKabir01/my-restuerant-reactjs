import React from 'react';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';

const Search = () => {
    return (
        <div>
            <Container >
                <InputGroup className="mb-3 mt-5   ">
                    <FormControl
                    placeholder="Search Food"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <Button  variant="outline-secondary" id="button-addon2">
                    Search
                    </Button>
                </InputGroup>
            </Container>
        </div>
    );
};

export default Search;