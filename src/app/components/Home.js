import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    render() {
        // can add additional parts for dynamic data in {}
        // let test = "";
        // if (true) {
        //     test = <p>Hello!</p>;
        // }

        // to use props
        // this.props

        // when looping, don't forget to let react track it with key    

        let text = "here goes!";
        return (
            <div>
                <p>Hi {this.props.name}!</p>
                <div>
                    <ul>
                        {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr />
                {this.props.children}
            </div>
        );
    }
}


// setting certain types for each props (type checking)
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};