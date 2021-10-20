import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Service from '../Service/Service';
import Str from '../Str/Str';
import './Home.css';


const Home = () => {
    const [diseases, setDiseases] = useState([]);
    useEffect(() => {
        fetch('./home.json')
            .then(res => res.json())
            .then(data => setDiseases(data));
    }, [])
    return (
        <div id="home">
            <Banner></Banner>
            <div className="diease">
                {
                    diseases.slice(0, 3).map(disease => <Str
                        key={disease.id}
                        disease={disease}
                    ></Str>)
                }

            </div>
            <Doctors></Doctors>


        </div>
    );
};

export default Home;
