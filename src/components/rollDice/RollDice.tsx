import { Component } from "react";
import Die from "../dice/Die";

type Choices = "one" | "two" | "three" | "four" | "five" | "six";
interface IProps {}

interface IState {
	diceOne: Choices | string;
	diceTwo: Choices | string;
	rolling: boolean;
}

class RollDice extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			diceOne: "one",
			diceTwo: "two",
			rolling: false,
		};
		this.roll = this.roll.bind(this);
	}
	roll(): void {
		let choices: string[] = ["one", "two", "three", "four", "five", "six"];
		console.log("Roll");
		this.setState({
			diceOne: choices[Math.floor(Math.random() * 5)],
			diceTwo: choices[Math.floor(Math.random() * 5)],
			rolling: true,
		});
		setTimeout(() => this.setState({ rolling: false }), 1000);
	}
	render() {
		return (
			<div className="roll-dice">
				<div
					className={`die-container ${
						this.state.rolling && "animate__animated animate__shakeX"
					}`}
				>
					<Die number={this.state.diceOne} />
					<Die number={this.state.diceTwo} />
				</div>
				<button
					disabled={this.state.rolling}
					onClick={this.roll}
					className="roll-dice-button"
				>
					{this.state.rolling ? "Rolling..." : "Roll dice!"}
				</button>
			</div>
		);
	}
}

export default RollDice;
