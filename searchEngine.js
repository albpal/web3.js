function searchEngine(ContractRepository) {
	this.ContractRepository = ContractRepository;
	this.getAllContractsFromFilter = function(filter) {
		return ContractRepository.getAllContractsFromFilter(filter);
	}

	this.addProperties = function(contract_address, properties) {
		return this.ContractRepository.addProperties(contract_address, properties)
	}
	this.getProperties = function(contract_address) {
		return this.ContractRepository.getProperties(contract_address);
	}
}

module.exports = searchEngine
