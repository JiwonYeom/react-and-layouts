import React from "react";
import { render } from "react-dom";
import {Router, Route} from "react-router"
import createBrowserHistory from 'history/createBrowserHistory'

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

const customHistory = createBrowserHistory();
class App extends React.Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route exact path="/" component={Root}/>
                    <Route path="/user" component={User} />
                    <Route path="/home" component={Home} />
                </div>
            </Router>
        )
    }
}
// className instead of class
// no comments within JSX!

render(<App/>, window.document.getElementById("app"));