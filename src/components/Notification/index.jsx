import React from 'react';
import MessagesStore from 'stores/MessagesStore.js'
import style from './style.css'

class Notification extends React.Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.setState({
			messages: MessagesStore.getMessages()
		})
		MessagesStore.addChangeListener(() => {
			this.setState({
				messages: MessagesStore.getMessages()
			})
		})
	}

	render() {
		return (
			<div className={style.text}>
				{this.props.number}
			</div>
			)
	}
}

// Notification.propTypes = {
// 	number: React.PropTypes.number.isRequired
// }

export default Notification;