import React from 'react';
import AskQuestion from '../AskQuestion/AskQuestion';
import Exparts from "../Exparts.js/Exparts"
import Services from "../Services/Services"
import Banner from "../Banner/Banner"
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services ></Services>
            <Exparts></Exparts>
           <AskQuestion></AskQuestion>
        </div>
    );
};

export default Home;