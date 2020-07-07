import React, { Component } from "react";
import "./App.css";

class Prediction extends Component {
    render() {
        return (
            <div className="inner-ball">
                <div className={`${this.props.fade ? "triangle" : ""}`}>
                    <span hidden={!this.props.fade}>{this.props.result}</span>
                </div>
            </div>
        );
    }
}

export default Prediction;
