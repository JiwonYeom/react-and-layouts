import React from "react";

export class Header extends React.Component {
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <ul className="navbar navbar-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}