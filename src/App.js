import React from 'react';
import Header from "./components/UI/header/Header";
import StartScreen from "./components/UI/startScreen/StartScreen";
import Works from "./components/UI/works/Works";


const App = () => {
    return (
        <div>
            <Header/>
            <StartScreen/>
            <Works/>
        </div>
    );
};

export default App;