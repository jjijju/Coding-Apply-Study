import React from 'react';
import { Table } from 'react-bootstrap';
import { connect, useSelector, useDispatch } from 'react-redux';

function Cart(props) {
    let state = useSelector((state) => state.reducer);
    let dispatch = useDispatch();

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.quan}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch({ type: 'plus', payload: product.id });
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            dispatch({ type: 'minus', payload: product.id });
                                        }}
                                    >
                                        -
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            {props.alert ? (
                <div className="my-alert">
                    <p>지금 구매하시면 할인 20%</p>
                    <button
                        onClick={() => {
                            props.dispatch({ type: 'close' });
                        }}
                    >
                        닫기
                    </button>
                </div>
            ) : null}
        </>
    );
}

// function binder(state) {
//     return {
//         state: state.reducer,
//         alert: state.reducer2,
//     };
// }

// export default connect(binder)(Cart);
export default Cart;
