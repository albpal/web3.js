var Contract = require('../contract');
var ContractRepository = require('../contractRepository');
var assert = require('assert');

describe("ContractRepository unitary testing...", function() {
	it('Testing getAllContractsFromFilter function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var contract2 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972A');
		var contract3 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972C');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);
		contract2.addProperties(filter);
		contract3.addProperties("type=temperature, location=madrid");

		var contractrepository = new ContractRepository();
		contractrepository.addContract(contract1);
		contractrepository.addContract(contract2);
		contractrepository.addContract(contract3);
		assert.equal(contractrepository.getAllContractsFromFilter(filter).length, 2, 'Incorrect number of contract returned. Returned: ' + contractrepository.getAllContractsFromFilter(filter).length);
		assert.equal(contractrepository.getAllContractsFromFilter("type=temperature, location=madrid").length, 1, 'Incorrect number of contract returned');
	});
	it('Testing addContract function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);

		var contractrepository = new ContractRepository();
		contractrepository.addContract(contract1);

		assert.equal(contractrepository.getContract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B'), contract1, 'The contract returned is not the same');
		assert.equal(contractrepository.getContract('0xD3a33636677fFF0BE34EC503b9E848b296E0972C'), null, 'The contract returned is not null');
	});
});
