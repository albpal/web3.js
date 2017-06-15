var SearchEngine = require('../searchEngine');
var ContractRepositoryOnMemory = require('../contractRepositoryOnMemory');
var Contract = require('../contract');
var assert = require('assert');

describe('SearchEngine unitary testing...', function() {
	it('Testing getAllContractsFromFilter function...', function () {
		var contract1 = new Contract("0xD3a33636677fFF0BE34EC503b9E848b296E0972A");
		contract1.addProperties('type=temperature,location=barcelona');
		var contract2 = new Contract("0xD3a33636677fFF0BE34EC503b9E848b296E0973A");
		contract2.addProperties('type=temperature,location=madrid');
		var contractRepositoryOnMemory = new ContractRepositoryOnMemory();
		contractRepositoryOnMemory.addContract(contract1);
		contractRepositoryOnMemory.addContract(contract2);

		var searchEngine = new SearchEngine(contractRepositoryOnMemory);
		var contracts = searchEngine.getAllContractsFromFilter('type=temperature,location=barcelona');
		assert.equal(contracts.length, 1, 'There is not only 1 contract');
		assert.equal(contracts[0].getAddress(), '0xD3a33636677fFF0BE34EC503b9E848b296E0972A', 'Incorrect contract returned');
	});
	it('Testing assignPropertyToContract function...', function () {
		var contract_address = "0xD3a33636677fFF0BE34EC503b9E848b296E0972A";
		var contract1 = new Contract(contract_address);

		var contractRepositoryOnMemory = new ContractRepositoryOnMemory();
		contractRepositoryOnMemory.addContract(contract1);

		var searchEngine = new SearchEngine(contractRepositoryOnMemory);
		searchEngine.addProperties(contract_address,'type=temperature,location=barcelona');

		assert.deepEqual(searchEngine.getProperties(contract_address)["type"], "temperature", 'The contract has not the same value for type ' + searchEngine.getProperties(contract_address)["type"]);
		assert.deepEqual(searchEngine.getProperties(contract_address)["location"], "barcelona", 'The contract has not the same value for location ' + searchEngine.getProperties(contract_address)["location"]);
	});
});
