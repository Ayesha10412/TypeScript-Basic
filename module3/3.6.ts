{
  //getter and setter

  {
    //access modifier
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;
      constructor(id: number, name: string, balance: number, age: number) {
        this.name = name;
        this.id = id;
        this._balance = balance;
      }
      //getter
      get balance() {
        return this._balance;
      }

      set deposit(amount: number) {
        this._balance = this._balance + amount;
      }
    }

    const account = new BankAccount(111, "ayesha", 300, 23);
    account.deposit = 500;
    const myBalance = account.balance;
    console.log(myBalance);
  }
}
