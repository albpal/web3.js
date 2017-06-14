var Contract = require('../contract');
var assert = require('assert');

describe("Contract unitary testing...", function() {
	it('Testing getAddress function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var contract2 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972A');
		assert.equal(contract1.getAddress(), '0xD3a33636677fFF0BE34EC503b9E848b296E0972B' , 'Incorrect contract address');
		assert.equal(contract2.getAddress(), '0xD3a33636677fFF0BE34EC503b9E848b296E0972A' , 'Incorrect contract address');
	});

	it('Testing pass function...', function () {
	  var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);
    assert.ok(contract1.pass(filter) , 'The contract has to pass the filter');
    assert.ok(!(contract1.pass("type=temperature, location=madrid")), 'The contract has not to pass the filter');
		assert.ok(!(contract1.pass("type=temperature, sex=madrid")), 'The contract has not to pass the filter');
	});
	it('Testing addProperties function...', function () {
		var contract1 = new Contract('0xD3a33636677fFF0BE34EC503b9E848b296E0972B');
		var filter = "type=temperature, location=barcelona";
		contract1.addProperties(filter);
		assert.deepEqual(contract1.getProperties(filter)["type"], "temperature", 'The contract has not the same value for type ' + contract1.getProperties(filter)["type"]);
		assert.deepEqual(contract1.getProperties(filter)["location"], "barcelona", 'The contract has not the same value for location ' + contract1.getProperties(filter)["location"]);
	});
});
