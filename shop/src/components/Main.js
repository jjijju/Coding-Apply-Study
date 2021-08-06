import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Contents from './Contents';
import axios from 'axios';

function Main({ product }) {
    const [state, setState] = useState(product);

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
                    <Contents camera={state} />
                </div>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        axios
                            .get('https://codingapple1.github.io/shop/data2.json')
                            .then((result) => {
                                setState([...state, ...result.data]);
                            })
                            .catch(() => {
                                console.log('❌');
                            });
                    }}
                >
                    더보기
                </button>
            </div>
        </>
    );
}

export default Main;
