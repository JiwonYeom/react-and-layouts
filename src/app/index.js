import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
// got a component
    render() {      
        let user = {
            name: "Jamie",
            hobbies: ["Reading","Running","Play Music"]
        };
        return (        // JSX begins. Remember one component, one root element
            <div className="container">
                <div className="row">      
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">      
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"JW"} age={27} user={user}>
                            <p>test children prop</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}
// className instead of class
// no comments within JSX!

render(<App/>, window.document.getElementById("app"));