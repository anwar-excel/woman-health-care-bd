import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import './Home.css';


const Home = () => {
    const [dieases, setDieases] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDieases(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="diease">
                {
                    dieases.slice(0, 3).map(diease => <Service
                        diease={diease}
                    ></Service>)
                }

            </div>
        </div>
    );
};

export default Home;
