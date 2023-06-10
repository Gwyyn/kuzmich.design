import React from 'react';
import Header from "./components/header/Header";
import StartScreen from "./components/startScreen/StartScreen";
import Works from "./components/works/Works";
import ApproachDescr from "./components/approachDescr/ApproachDescr";
import Services from "./components/services/Services";
import WorkProcess from "./components/workProcess/WorkProcess";


const App = () => {
    return (
        <div>
            <Header/>
            <StartScreen/>
            <Works/>
            <ApproachDescr/>
            <Services/>
            <WorkProcess/>
        </div>
    );
};

export default App;