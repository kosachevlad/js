function myModule() {
	this.hello = function() {
		return console.log('hello!');
	}

	this.goodbye = function() {
		return console.log('goodbye!');
		alert('1');
	}

};

module.exports = myModule;