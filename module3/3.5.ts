{
  //access modifier
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number;
    protected age: number;
    constructor(id: number, name: string, balance: number, age: number) {
      this.name = name;
      this.id = id;
      this._balance = balance;
    }
    public addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    public getBalance() {
      return this._balance;
    }
  }
  class StudentAcccount extends BankAccount {
    test() {
      this.age = this.age;
    }
  }

  const account = new BankAccount(111, "ayesha", 300, 23);
  account.addDeposit(400);
  console.log(account.getBalance());
  const student = new StudentAcccount(112, "bristi", 200, 24);
  student.test();
}
