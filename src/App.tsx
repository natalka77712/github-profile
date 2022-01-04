import React from 'react';
import { ErrorTooltip } from './components/error-tooltip/error-tooltip';
import Header from "./components/header/header";
import ProfilePage from "./components/profile-page/profile-page";

function App() {
    return (
        <div className="app">
            <ErrorTooltip/>
            <Header/>
            <ProfilePage/>
        </div>
    );
}

export default App;
