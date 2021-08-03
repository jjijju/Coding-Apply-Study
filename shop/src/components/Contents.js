import React from 'react';

const Contents = ({ camera }) => {
    return (
        <>
            {camera.map((item, index) => (
                <div className="col-md-4" key={index}>
                    <img src={item.image} alt={item.title} width="100%" />
                    <h4>{item.title}</h4>
                    <p>
                        {item.content} & {item.price}
                    </p>
                </div>
            ))}
        </>
    );
};

export default Contents;
