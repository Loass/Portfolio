import React from 'react';
import Intro from './Intro/Intro'
import Competence from './Competence/Competence'
import Portfolio from './Portfolio/Portfolio'


import './Home.css'

function Home() {



    return(
        <div>
            <Intro />
            <Competence />
            <Portfolio />
        </div>
    )
}

export default Home;
