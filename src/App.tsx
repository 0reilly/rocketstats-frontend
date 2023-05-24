import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './Home';
import Site from './Site';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:domain" element={ <Site /> } />
                <Route path="/" element={ <Home /> } />
            </Routes>
        </Router>
    );
};

export default App;
