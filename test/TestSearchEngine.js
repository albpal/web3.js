var SearchEngine = require('../searchEngine');
var ContractBag = require('../contractBag');
var Contract = require('../contract');
var assert = require('assert');

describe('SearchEngine unitary testing...', function() {
	it('should return the contract 0xD3a33636677fFF0BE34EC503b9E848b296E0972A', function () {	
		var contract1 = new Contract("0xD3a33636677fFF0BE34EC503b9E848b296E0972A");
		contract1.addProperties('type=temperature,location=barcelona');
		var contract2 = new Contract("0xD3a33636677fFF0BE34EC503b9E848b296E0973A");
		contract2.addProperties('type=temperature,location=madrid');
		var contractBag = new ContractBag();
		contractBag.addContract(contract1);
		contractBag.addContract(contract2);
	
		var searchEngine = new SearchEngine(contractBag);
		var contracts = searchEngine.getAllContractsFromFilter('type=temperature,location=barcelona');
		assert.equal(contracts.length, 1, 'There is not only 1 contract');
		assert.equal(contracts[0].getAddress(), '0xD3a33636677fFF0BE34EC503b9E848b296E0972A', 'Incorrect contract returned');
	});
});

