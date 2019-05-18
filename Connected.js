exports.default = class UserMap extends Map {
	constructor() {
		super();

		this._cache = new Cache();

	}

	add(user) {
		this.set(user.name, user);
	}

	remove(user) {
		this.delete(user.name);
	}

	all() {
		if (this._cache.more) {
			this._cache.data = this;
		}

		return this._cache.data;
	}
};

class Cache {
	constructor() {
		this._data = null;
		this._more = false;
	}

	set data(userMap) {
		this._data = JSON.stringify([...userMap]);
		this._more = false;
	}

	set more(bool) {
		this._more = bool;
	}

	get more() {
		return this._more;
	}

	get data() {
		return this._data;
	}
}