import React from 'react';
import Chat from 'components/Chat';
import Notification from 'components/Notification';

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfMessages: 0
		}

		this.receiveNumber = this.receiveNumber.bind(this);
	}

	receiveNumber(number) {
		this.setState({
			numberOfMessages: number
		})
	}

	render() {
		return (
			<div>
				<Notification number={this.state.numberOfMessages}/>
				<Chat receiveNumber={this.receiveNumber}/>
			</div>
			)
	}
}

export default Container;