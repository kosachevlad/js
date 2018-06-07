function User(name, id) {
	this.name = name;
	this.id = id;
	this.avatar = "Photo";
};

let john = new User("John", 25);

User.prototype.deleteAvatar = function() {
	this.avatar = null
};

john.deleteAvatar();

function Admin(name,id) {
	this.name = name;
	this.id = id;
	this.avatar = "Photo";
};

Admin.prototype = Object.create(User.prototype);

Admin.prototype.changeMyId = function() {
	this.id = 1;
}
let admin = new Admin('Admin', 2);
admin.deleteAvatar();
admin.changeMyId();
console.log(admin);

