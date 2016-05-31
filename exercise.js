angular.module('invoice1', [])
.controller('InvoiceController', function() {
	this.qty = 1;
	this.cost = 2;
	this.inCurr = 'us';
	this.cur = ['us', 'hk', 'jp'];
	this.usdToFor = {
		us: 1,
		hk: 7,
		jp: 100
	};
	
  this.total = function total(outCurr) {
    return this.convertCurrency(this.qty * this.cost, this.inCurr, outCurr);
  };
  this.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
    return amount * this.usdToFor[outCurr] / this.usdToFor[inCurr];
  };
  
});