import React from 'react';
import Chat from './Chat.jsx';
import Notification from './Notification.jsx';

class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfMessages: 3
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