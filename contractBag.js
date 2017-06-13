function contractBag() {
	this.contracts = []
	this.addContract = function (contract) {
		this.contracts.push(contract);
	}

	this.getAllContractsFromFilter = function (filter) {
		var candidates = [];
		for (var i = 0; i < this.contracts.length; ++i) {
			var c = this.contracts[i];
			if (c.pass(filter)) {
				candidates.push(c);
			}
		}
		return candidates;
	}
}

module.exports = contractBag
