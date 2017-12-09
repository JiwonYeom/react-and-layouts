import React from "react";
import { render } from "react-dom";

class App extends React.Component {
// got a component
    render() {      
        return (        // JSX begins. Remember one component, one root element
            <div className="container">
                <div className="row">      
                    <div className="col-xs-10 col-xs-offset-1">
                        <h1>Hello!</h1>
                    </div>
                </div>
            </div>
        );
    }
}
// className instead of class
// no comments within JSX!

render(<App/>, window.document.getElementById("app"));