import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Contents from './Contents';

function Main({ product }) {
    return (
        <>
            <Jumbotron className="background">
                <h1>20% Season OFF</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or
                    information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <div className="container">
                <div className="row">
                    <Contents camera={product} />
                </div>
            </div>
        </>
    );
}

export default Main;
