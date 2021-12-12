var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#createDeck' , function() {
        it('should list all 52 cards', function() {
            var x = createDeck('Hello', 5);
            expect(x).to.equal("Hello5"); 
        });
    });
});