function Contract(address) {
	this.properties = [];
	this.address = address;
	this.getAddress = function () {
		return this.address;
	};
	this.addProperties = function(new_properties) {
		var properties = new_properties.split(",");
		for (var i = 0; i < properties.length; ++i) {
			var property=properties[i];
			var key = property.split("=")[0].trim().toLowerCase();
			var value = property.split("=")[1].trim().toLowerCase();
			this.properties[key] = value;
		}
	};
	this.pass = function(filter) {
		filters = filter.split(",");
		for (var i = 0; i < filters.length; ++i) {
			var atomic_filter = filters[i];
			var key = atomic_filter.split("=")[0].trim().toLowerCase();
			var value = atomic_filter.split("=")[1].trim().toLowerCase();
			if (!(key in this.properties)) {
				return false;
			}
			if ((key in this.properties) && this.properties[key] != value) {
				return false;
			}
		}
		return true;
	};
}

module.exports = Contract


