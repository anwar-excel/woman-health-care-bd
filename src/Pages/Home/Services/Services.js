import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [dieases, setDieases] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDieases(data));
    }, [])
    return (
        <div>
            <div className="services">
                {
                    dieases.map(diease => <Service
                        diease={diease}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;