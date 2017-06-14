var Contract = require('../contract');
var ContractBag = require('../contractBag');
var assert = require('assert');

describe("ContractBag unitary testing...", function() {
	it('Testing getAllContractsFromFilter function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var contract2 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972A');
		var contract3 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972C');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);
		contract2.addProperties(filter);
		contract3.addProperties("type=temperature, location=madrid");

		var contractbag = new ContractBag();
		contractbag.addContract(contract1);
		contractbag.addContract(contract2);
		contractbag.addContract(contract3);
		assert.equal(contractbag.getAllContractsFromFilter(filter).length, 2, 'Incorrect number of contract returned. Returned: ' + contractbag.getAllContractsFromFilter(filter).length);
		assert.equal(contractbag.getAllContractsFromFilter("type=temperature, location=madrid").length, 1, 'Incorrect number of contract returned');
	});
	it('Testing addContract function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);

		var contractbag = new ContractBag();
		contractbag.addContract(contract1);

		assert.equal(contractbag.getContract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B'), contract1, 'The contract returned is not the same');
		assert.equal(contractbag.getContract('0xD3a33636677fFF0BE34EC503b9E848b296E0972C'), null, 'The contract returned is not null');
	});
});
