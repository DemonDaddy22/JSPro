/**
 * Bank Account class
 *  - Properties
 *    - balance (defaults to 0 if not provided)
 *    - account holder
 *    - account number
 *  - Methods
 *    - deposit (amt) - increases balance by amt
 *    - withdraw (amt) - decreases balance by amt
 */

class BankAccount {
  constructor (accountHolder, accountNumber, balance = 0) {
    if (typeof balance !== 'number' || balance < 0) {
      throw new Error(`Invalid balance: ${balance}`);
    }
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
  }

  deposit (amt) {
    if (amt > 0) {
      this.balance += amt;
      return `You deposited: $${amt}. Updated balance: $${this.balance}.`;
    }
    return `Invalid amount to deposit: ${amt}.`;
  }

  withdraw (amt) {
    if (amt <= 0) {
      return `Invalid amount to withdraw: ${amt}.`;
    }
    if (this.balance >= amt) {
      this.balance -= amt;
      return `You withdrew: $${amt}. Updated balance: $${this.balance}.`;
    }
    return `Insufficient balance to withdraw. Balance: $${this.balance}.`;
  }
}