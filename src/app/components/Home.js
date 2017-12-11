import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.age = props.age;
    }

    //declare function
    onMakeOlder(){
        // without .bind, this here will refer to the button instead of class
        // this.onMakeOlder.bind(this) == ()=> this.onMakeOlder()
        this.age +=3;
        console.log(this.age); // you will see that it is getting incremented. But the state has not changed.
    }

    render() {
        return (
            <div>
                <p>Hi {this.props.name}!, your age is {this.age}</p>
                <hr/>
                <button onClick={()=> this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
            </div>
        );
    }
}


// setting certain types for each props (type checking)
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
};