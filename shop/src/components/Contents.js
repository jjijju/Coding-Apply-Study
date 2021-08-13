import React from 'react';
import { useHistory } from 'react-router-dom';

function Contents({ camera }) {
    let history = useHistory();

    return (
        <>
            {camera.map((item, index) => (
                <div
                    className="col-md-4"
                    key={index}
                    onClick={() => {
                        history.push('/detail/' + item.id);
                    }}
                >
                    <img src={item.image} alt={item.title} width="100%" />
                    <h4>{item.title}</h4>
                    <p>
                        {item.content} & {item.price}
                    </p>
                </div>
            ))}
        </>
    );
}

export default Contents;
