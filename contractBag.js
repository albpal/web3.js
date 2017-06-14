function contractBag() {
	this.contracts = [];
	this.addContract = function (contract) {
		this.contracts[contract.getAddress()] = contract;
	}
	this.getContract = function (contract_address) {
		return this.contracts[contract_address];
	}

	this.getAllContractsFromFilter = function (filter) {
		var candidates = [];
		for (c in this.contracts) {
			var c = this.contracts[c];
			if (c.pass(filter)) {
				candidates.push(c);
			}
		}
		return candidates;
	}
}

module.exports = contractBag
