import React from 'react';
import MessagesAction from '../actions/MessagesAction.js'

class Chat extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: []
		}

		this.onKeyDown = this.onKeyDown.bind(this);
	}

	componentDidUpdate() {
		MessagesAction.storeMessages(this.state.messages);
		// this.props.receiveNumber(this.state.messages.length)
	}

	onKeyDown(e) {
		if (e.keyCode == 13) {
			this.setState({
				messages: [...this.state.messages, this.refs.input.value]
			})

			this.refs.input.value = '';
		}
	}

	renderMessages() {
		return this.state.messages.map((message, index) => <li key={index}>{message}</li> )
	}

	render() {
		return (
				<div>
					<input ref="input" type="text" onKeyDown={this.onKeyDown}/>
					<ul>{this.renderMessages()}</ul>
				</div>
			)
	}
}

export default Chat;