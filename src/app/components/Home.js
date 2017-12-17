import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            // set default value from props value
            homeLink: props.initialLinkName
        };
    }

    //declare function
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        }); // this will trigger re-rendering of UI

        // without .bind, this here will refer to the button instead of class
        // this.onMakeOlder.bind(this) == ()=> this.onMakeOlder()
        // this.age +=3;
        // console.log(this.age); // you will see that it is getting incremented. But the state has not changed.

        /* 
        ReactJS uses the virtual DOM.
        DOM written in JavaScript to maximize performance. It updates only the changed state.
        ReactJS recreates virtual DOM, compare it with the OLD virtual DOM.
        It will re-render the changed part.
        */ 
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink);
    }

    //two-way binding
    onChangeInput(event) {
        this.setState({
            homeLink: event.target.value
        })

    }

    render() {
        return (
            <div>
                <p>Hi {this.props.name}!, your age is {this.state.age}</p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={()=> this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet}>Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} 
                    onChange={(event) => this.onChangeInput(event)} />
                <button onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            </div>
        );
    }
}


// setting certain types for each props (type checking)
Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    initialLinkName: PropTypes.string,
};