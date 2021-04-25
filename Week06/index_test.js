var expect = chai.expect;

describe (`MyFunctions`, function(){
		describe(`getRandomInt`, function(){
			it(`should show random number between 0 and 5 inclusive`, function(){
					var x = getRandomIntInclusive(0,5);
					expect(x).to.be.within(0, 5);
			});
			
		});
});