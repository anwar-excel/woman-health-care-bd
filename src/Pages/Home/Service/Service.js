import React from 'react';

const Service = (props) => {
    const { img, name, description } = props.diease;
    return (
        <div>
            <img src={img} alt="" />

            <h2>{name}</h2>
            <p>{description}</p>

        </div>
    );
};

export default Service;