import React from 'react'
import Section from '../../Section'
import {homeObjOne, homeObjTwo, homeObjThree} from './Data'

function Home() {
    return (
        <>
            <Section {...homeObjOne}/>
            <Section {...homeObjTwo}/>
            <Section {...homeObjThree}/>
        </>
    )
}

export default Home;
