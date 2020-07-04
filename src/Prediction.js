import React, { Component } from "react";
import "./Prediction.css";

class Prediction extends Component {
    render() {
        return (
            <div className="inner-ball">
                <div className={`${this.props.fade ? "triangle" : ""}`}>
                    <span>{this.props.result}</span>
                </div>
            </div>
        );
    }
}

export default Prediction;
