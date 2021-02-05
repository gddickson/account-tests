var assert = require("assert");
var expect = require("chai").expect;
var should = require("chai").should();

class BankAccount
{
    constructor(amount)
    {
        this.balance = amount;
    }

    debit( amt )
    {
        if (amt > 20){
            amt +=1
        }

        if (amt <= this.balance){
            this.balance -= amt;
        }  
        
        return this.balance;
    }

    credit( amt )
    {
        this.balance += amt;

        return this.balance;
    }

    queryBalance()
    {
        return this.balance;
    }
}


describe('Is object constructed properly', function() {
    it('Balance should be same as init value', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;

        // act...
        var actualResult = cut.queryBalance();

        // assert...
        // assert.strictEqual(actualResult, expectedResult);
        // assert.strictEqual(cut.queryBalance(), expectedResult);
        expect(actualResult).to.equal(expectedResult);
        cut.queryBalance().should.equal(expectedResult)
    });
  });

describe('Is object debited properly', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 19;
        var debitAmount = 30;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        // assert.strictEqual(actualResult, expectedResult);
        // assert.strictEqual(cut.queryBalance(), expectedResult);
        // assert.strictEqual(actualResult, expectedResult);
        expect(actualResult).to.equal(expectedResult);
        cut.queryBalance().should.equal(expectedResult);
        
    });
});

describe('Is object credited properly', function() {
    it('Balance should be increased', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 80;
        var creditAmount = 30;

        // act...
        var actualResult = cut.credit(creditAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult, "credit() failed");
        assert.strictEqual(cut.queryBalance(), expectedResult, "queryBalance() failed");
    });
});

describe('Is object debited properly where debit amount is greater than balance', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 50;
        var debitAmount = 51;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly where debit amount is equal to balance', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(20);
        var expectedResult = 0;
        var debitAmount = 20;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly where debit amount is > 20', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(50);
        var expectedResult = 30;
        var debitAmount = 20;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly where debit amount is > 20 and balance is 20  ', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(20);
        var expectedResult = 0;
        var debitAmount = 20;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly where debit amount is > 20 and balance is 21  ', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(21);
        var expectedResult = 1;
        var debitAmount = 20;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});

describe('Is object debited properly where debit amount is > 21 and balance is 21  ', function() {
    it('Balance should be reduced', function() {
        // arrange...
        var cut = new BankAccount(21);
        var expectedResult = 21;
        var debitAmount = 21;

        // act...
        var actualResult = cut.debit(debitAmount);

        // assert...
        assert.strictEqual(actualResult, expectedResult);
        assert.strictEqual(cut.queryBalance(), expectedResult);
    });
});
