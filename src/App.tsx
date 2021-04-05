import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import DemoView from './views/Demo/DemoView';
import DemoSecondView from './views/DemoSecond/DemoSecondView';

const App: FunctionComponent = () => {
    return (
        <div className="h-100">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <DemoView />
                    </Route>
                    <Route path="/demosecond">
                        <DemoSecondView />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
