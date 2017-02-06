import MessagesDispatcher from '../dispatchers/MessagesDispatcher.js'

export default {
	storeMessages: (messages) => {
		MessagesDispatcher.dispatch({
			type: 'UPDATE_MESSAGES',
			data: messages
		})
	}
}