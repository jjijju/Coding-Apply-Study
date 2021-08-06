import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Data from './mock/data.json';

import Menu from './components/Menu';
import Main from './components/Main';
import Detail from './components/Detail';

function App() {
    let [state, setState] = useState(Data);
    const [stock, setStock] = useState([10, 11, 12]);

    return (
        <div className="App">
            <Menu />

            <Switch>
                <Route exact path="/" render={() => <Main product={state} />} />
                <Route path="/detail/:id" render={() => <Detail product={state} stock={stock} setStock={setStock} />} />
            </Switch>
        </div>
    );
}

export default App;
