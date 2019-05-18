exports.default = class User {
	constructor(name, location) {
		this._name = name;
		this._location = location;
		this._registered = new Date();
	}

	get name() {
		return this._name;
	}

	// TODO: fix this
	//update = this.location.update;
};