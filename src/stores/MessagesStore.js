import MessagesDispatcher from 'dispatchers/MessagesDispatcher.js';
import EventEmitter from 'events';

let messages = [];

const MessagesStore = Object.assign({}, EventEmitter.prototype, {
	getMessages: function() {
		return messages;
	},

	addChangeListener: function(callback) {
		this.on('change', callback)
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback)
	},

	emitChangeEvent: function() {
		this.emit('change');
	}
})

function setNewMessages(data) {
	messages = data;
}

MessagesDispatcher.register(action => {
	switch(action.type) {
		case 'UPDATE_MESSAGES':
			setNewMessages(action.data);
			MessagesStore.emitChangeEvent();
		break
	}
})

export default MessagesStore;