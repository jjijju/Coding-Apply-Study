import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../style/Detail.scss';

let Box = styled.div`
    padding: 20px;
`;

let Title = styled.h4`
    font-size: 25px;
    color: ${(props) => props.color};
`;

function Detail({ product, stock, setStock }) {
    let [show, setShow] = useState(true);
    let [input, setInput] = useState('');

    console.log('on');
    useEffect(() => {
        let timer = setTimeout(() => {
            setShow(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    let history = useHistory();
    let { id } = useParams();
    let item = product.find((c) => c.id === parseInt(id));

    return (
        <div className="container">
            <Box>
                <Title className="red">Detail</Title>
            </Box>

            {input}
            <input
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />

            {show ? (
                <div className="my-alert my-alert-red">
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>
            ) : null}
            <div className="row">
                <div className="col-md-6">
                    <img src={item.image} alt={item.title} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <Info stock={stock} />
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            setStock([9, 10, 11]);
                        }}
                    >
                        주문하기
                    </button>
                    &nbsp;
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            history.goBack();
                            // history.push('/');
                        }}
                    >
                        뒤로가기
                    </button>
                </div>
            </div>
        </div>
    );
}

function Info({ stock }) {
    return <p>재고 : {stock[0]}</p>;
}

export default Detail;
