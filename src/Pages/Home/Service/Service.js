import React from 'react';

const Service = (props) => {
    // const { name, description } = props.dis;
    const { name, description } = props.disease;
    return (
        <div id="service">


            <h2>{name}</h2>
            <p>{description}</p>
            <button>Book {name.toLowerCase()}</button>

        </div>
    );
};

export default Service;