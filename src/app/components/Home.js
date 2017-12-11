import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
    }

    //declare function
    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        }); // this will trigger re-rendering of UI

        // without .bind, this here will refer to the button instead of class
        // this.onMakeOlder.bind(this) == ()=> this.onMakeOlder()
        // this.age +=3;
        // console.log(this.age); // you will see that it is getting incremented. But the state has not changed.
    }

    render() {
        return (
            <div>
                <p>Hi {this.props.name}!, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={()=> this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}


// setting certain types for each props (type checking)
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
};