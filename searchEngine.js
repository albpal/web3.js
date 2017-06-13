function searchEngine(contractBag) {
	this.contractBag = contractBag;
	this.getAllContractsFromFilter = function(filter) {
		return contractBag.getAllContractsFromFilter(filter);
	}
}

module.exports = searchEngine

