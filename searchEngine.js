function searchEngine(contractRepository) {
	this.contractRepository = contractRepository;
	this.getAllContractsFromFilter = function(filter) {
		return contractRepository.getAllContractsFromFilter(filter);
	}
}

module.exports = searchEngine
