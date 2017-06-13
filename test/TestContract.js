var Contract = require('../contract');
var assert = require('assert');

describe("Contract unitary testing...", function() {
	it('should return the correct contract address', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var contract2 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972A');
		assert.equal(contract1.getAddress(), '0xD3a33636677fFF0BE34EC503b9E848b296E0972B' , 'Incorrect contract address');
		assert.equal(contract2.getAddress(), '0xD3a33636677fFF0BE34EC503b9E848b296E0972A' , 'Incorrect contract address');
	});

	it('should pass the filters', function () {
	        var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);
	        assert.ok(contract1.pass(filter) , 'The contract has to pass the filter');
	        assert.ok(!(contract1.pass("type=temperature, location=madrid")), 'The contract has not to pass the filter');
	});
});
