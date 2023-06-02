import React from 'react';
import Header from "./components/UI/header/Header";
import StartScreen from "./components/UI/startScreen/StartScreen";
import Works from "./components/UI/works/Works";
import ApproachDescr from "./components/UI/approachDescr/ApproachDescr";


const App = () => {
    return (
        <div>
            <Header/>
            <StartScreen/>
            <Works/>
            <ApproachDescr/>
        </div>
    );
};

export default App;