import React, { Component } from 'react';
import './App.css';

class Prediction extends Component {
	render() {
		return (
			<div className={`${this.props.result ? 'inner-ball answered' : 'inner-ball unanswered'}`}>
				{this.props.result ? (
					<div className={`${this.props.fade ? 'triangle' : ''}`}>
						<span hidden={!this.props.fade}>{this.props.result}</span>
					</div>
				) : (
					<span className="eight">8</span>
				)}
			</div>
		);
	}
}

export default Prediction;
