exports.default = class Location {
	constructor(latitude, longitutude) {
		this.latitude = latitude;
		this.longitutude = longitutude;
	}

	update({latitude, longitutude}) {
		this.latitude = latitude;
		this.longitutude = longitutude;
	}
};