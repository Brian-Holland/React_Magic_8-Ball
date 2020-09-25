import React, { Component } from 'react';
import Prediction from './Prediction';
import './App.css';

class Ball extends Component {
	static defaultProps = {
		answers: [
			'As I see it, yes.',
			'Ask again later.',
			'Better not\n tell you now.',
			'Cannot predict now.',
			'Concentrate \nand ask again.',
			'Don’t count on it.',
			'It is certain.',
			'It is decidedly so.',
			'Most likely.',
			'My reply is no.',
			'My sources say no.',
			'Outlook not so good.',
			'Outlook good.',
			'Reply hazy, try again.',
			'Signs point to yes.',
			'Very doubtful.',
			'Without a doubt.',
			'Yes.',
			'Yes – definitely.',
			'You may rely on it.'
		]
	};

	constructor(props) {
		super(props);
		this.state = { answer: '', shaking: false, fade: false };
		this.shake = this.shake.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	shake() {
		this.setState({ fade: false });

		const result = this.props.answers[Math.floor(Math.random() * this.props.answers.length)];

		this.setState({ shaking: true });

		setTimeout(() => {
			this.setState({ answer: result, fade: true });
		}, 1000);

		setTimeout(() => {
			this.setState({ shaking: false });
		}, 1000);
	}

	handleKeyDown(e) {
		if (e.key === 'Enter') {
			this.shake();
		}
	}

	render() {
		return (
			<div>
				<h1>Magic 8-Ball</h1>
				<div className="BallShake">
					<div className={`Ball-container ${this.state.shaking && 'shaking'}`}>
						<Prediction result={this.state.answer} fade={this.state.fade} />
					</div>

					<div className="question">
						<input
							type="text"
							placeholder="Ask a question"
							onKeyDown={this.handleKeyDown}
							disabled={this.state.shaking}
						/>
						<button onClick={this.shake} disabled={this.state.shaking}>
							{this.state.shaking ? 'Shaking...' : 'Shake'}
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Ball;
