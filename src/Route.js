import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
// import Home from './components/home';
import Portfolio from './components/portfolio';
// import Signup from './components/signup';
// import Signin from './components/signin';

// import Chat from './components/chat';

import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Portfolio} />
                    {/* <Route exact path="/about" component={About} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/chat" component={Chat} /> */}
                    
                </div>
            </Router>
        )
    }
}

export default Routers;