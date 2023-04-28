import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem a, modi debitis iste officiis nemo fugiat sint et necessitatibus neque! Ipsa sint optio quod beatae vitae officiis quo delectus.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;