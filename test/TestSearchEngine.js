var SearchEngine = require('../searchEngine');
var ContractRepository = require('../contractRepository');
var Contract = require('../contract');
var assert = require('assert');

describe('SearchEngine unitary testing...', function() {
	it('Testing getAllContractsFromFilter function...', function () {
		var contract1 = new Contract("0xD3a33636677fFF0BE34EC503b9E848b296E0972A");
		contract1.addProperties('type=temperature,location=barcelona');
		var contract2 = new Contract("0xD3a33636677fFF0BE34EC503b9E848b296E0973A");
		contract2.addProperties('type=temperature,location=madrid');
		var contractRepository = new ContractRepository();
		contractRepository.addContract(contract1);
		contractRepository.addContract(contract2);

		var searchEngine = new SearchEngine(contractRepository);
		var contracts = searchEngine.getAllContractsFromFilter('type=temperature,location=barcelona');
		assert.equal(contracts.length, 1, 'There is not only 1 contract');
		assert.equal(contracts[0].getAddress(), '0xD3a33636677fFF0BE34EC503b9E848b296E0972A', 'Incorrect contract returned');
	});
});
