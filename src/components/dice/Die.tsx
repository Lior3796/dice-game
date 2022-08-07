import { Component } from "react";

interface IProps {
	number: "one" | "two" | "three" | "four" | "five" | "six" | string;
}

interface IState {
	number: "one" | "two" | "three" | "four" | "five" | "six" | string;
}

class Die extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
	}

	render() {
		return <i className={`fas fa-dice-${this.props.number} die`}></i>;
	}
}

export default Die;
