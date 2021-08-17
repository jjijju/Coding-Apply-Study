import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { connect } from 'react-redux';
import '../style/Detail.scss';

let Box = styled.div`
    padding: 20px;
`;

let Title = styled.h4`
    font-size: 25px;
    color: ${(props) => props.color};
`;

function Detail(props) {
    let [show, setShow] = useState(true);
    let [input, setInput] = useState('');

    const [tab, setTab] = useState(0);
    const [animation, setAnimation] = useState(false);

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
    let item = props.product.find((c) => c.id === parseInt(id));

    useEffect(() => {
        let arr = localStorage.getItem('viewitem');
        arr = arr === null ? [] : JSON.parse(arr);

        arr.push(id);
        arr = new Set(arr);
        arr = [...arr];

        localStorage.setItem('viewitem', JSON.stringify(arr));
    }, []);

    return (
        <>
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
                        <Info stock={props.stock} />
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                // props.setStock([9, 10, 11]);
                                props.dispatch({ type: 'add', payload: { id: item.id, name: item.title, quan: 1 } });
                                history.push('/cart');
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

                <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link
                            eventKey="link-0"
                            onClick={() => {
                                setAnimation(false);
                                setTab(0);
                            }}
                        >
                            Active
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            eventKey="link-1"
                            onClick={() => {
                                setAnimation(false);
                                setTab(1);
                            }}
                        >
                            Option 2
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <CSSTransition in={animation} classNames="trans" timeout={500}>
                    <TabContent tab={tab} setAnimation={setAnimation} />
                </CSSTransition>
            </div>
        </>
    );
}

function TabContent(props) {
    useEffect(() => {
        props.setAnimation(true);
    });

    if (props.tab === 0) {
        return <div>0번 내용</div>;
    } else if (props.tab === 1) {
        return <div>1번 내용</div>;
    } else if (props.tab === 2) {
        return <div>2번 내용</div>;
    }
}

function Info({ stock }) {
    return <p>재고 : {stock[0]}</p>;
}

function binder(state) {
    return {
        state: state.reducer,
        alert: state.reducer2,
    };
}

export default connect(binder)(Detail);
