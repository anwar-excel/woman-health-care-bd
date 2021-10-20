import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css';


const Home = () => {
    const [diseases, setDiseases] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDiseases(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="diease">
                {
                    diseases.slice(0, 3).map(disease => <Service
                        key={disease.id}
                        disease={disease}
                    ></Service>)
                }

            </div>

        </div>
    );
};

export default Home;
