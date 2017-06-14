var Contract = require('../contract');
var ContractRepositoryOnMemory = require('../contractRepositoryOnMemory');
var assert = require('assert');

describe("ContractRepositoryOnMemory unitary testing...", function() {
	it('Testing getAllContractsFromFilter function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var contract2 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972A');
		var contract3 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972C');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);
		contract2.addProperties(filter);
		contract3.addProperties("type=temperature, location=madrid");

		var contractRepositoryOnMemory = new ContractRepositoryOnMemory();
		contractRepositoryOnMemory.addContract(contract1);
		contractRepositoryOnMemory.addContract(contract2);
		contractRepositoryOnMemory.addContract(contract3);
		assert.equal(contractRepositoryOnMemory.getAllContractsFromFilter(filter).length, 2, 'Incorrect number of contract returned. Returned: ' + contractRepositoryOnMemory.getAllContractsFromFilter(filter).length);
		assert.equal(contractRepositoryOnMemory.getAllContractsFromFilter("type=temperature, location=madrid").length, 1, 'Incorrect number of contract returned');
	});
	it('Testing addContract function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);

		var contractRepositoryOnMemory = new ContractRepositoryOnMemory();
		contractRepositoryOnMemory.addContract(contract1);

		assert.ok(contractRepositoryOnMemory.existContract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B'), 'The contract does not exist');
		assert.ok(!contractRepositoryOnMemory.existContract('0xD3a33636677fFF0BE34EC503b9E848b296E0972C'), 'The contract exists');
	});
});
