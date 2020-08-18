import React from 'react';
import GlobalStyles from "./index.css";
import {AnimatedImg, Wrapper} from "./components";

const App = () => {
    return (
        <Wrapper>
            <GlobalStyles/>
            <AnimatedImg />
        </Wrapper>
    )
}

export default App;
