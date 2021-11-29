import React from 'react';
import Intro from './Intro/Intro';
import Competence from './Competence/Competence';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';


import './Home.css'

function Home() {



    return(
        <div>
            <Intro />
            <Competence />
            <Portfolio />
            <Contact />
        </div>
    )
}

export default Home;
