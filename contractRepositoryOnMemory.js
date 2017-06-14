function ContractRepositoryOnMemory() {
	this.contracts = [];
	this.addContract = function (contract) {
		this.contracts[contract.getAddress()] = contract;
	}
	this.existContract = function (contract_address) {
		if (this.contracts[contract_address] != null)
			return true;
		return false;
	}
	this.getProperties = function (contract_address) {
		return this.contracts[contract_address].getProperties();
	}
	this.addProperties = function (contract_address, properties) {
		return this.contracts[contract_address].addProperties(properties);
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

module.exports = ContractRepositoryOnMemory
