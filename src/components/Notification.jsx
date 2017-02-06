import React from 'react';
import MessagesStore from '../stores/MessagesStore.js'

class Notification extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.setState({
			messages: MessagesStore.getMessages()
		})
		MessagesStore.addChangeListener(() => {
			console.log('oi')
			this.setState({
				messages: MessagesStore.getMessages()
			})
		})
	}

	render() {
		return (
			<div>
				{this.state.messages.length}
			</div>
			)
	}
}

// Notification.propTypes = {
// 	number: React.PropTypes.number.isRequired
// }

export default Notification;