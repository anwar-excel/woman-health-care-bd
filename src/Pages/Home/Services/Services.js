import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [diseases, setDiseases] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDiseases(data));
    }, [])
    return (
        <div>
            <div className="services">
                {
                    diseases.map(disease => <Service
                        key={disease.id}
                        disease={disease}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;