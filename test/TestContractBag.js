var Contract = require('../contract');
var ContractBag = require('../contractBag');
var assert = require('assert');

describe("ContractBag unitary testing...", function() {
	it('should return the number of contract that pass the filter...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var contract2 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972A');
		var contract3 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972A');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);
		contract2.addProperties(filter);
		contract3.addProperties("type=temperature, location=madrid");

		var contractbag = new ContractBag();
		contractbag.addContract(contract1);
		contractbag.addContract(contract2);
		contractbag.addContract(contract3);
		assert.equal(contractbag.getAllContractsFromFilter(filter).length, 2, 'Incorrect number of contract returned');
		assert.equal(contractbag.getAllContractsFromFilter("type=temperature, location=madrid").length, 1, 'Incorrect number of contract returned');
	});
});
