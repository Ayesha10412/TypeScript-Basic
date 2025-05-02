"use strict";
//Learning Function
//Normal Function
//Arrow Function
{
    function add(num1, num2) {
        return num1 + num2;
    }
    add(1, 10);
    var addArrow = function (num1, num2) { return num1 + num2; };
    //object --> function ---> method
    var poorUser = {
        name: "Ayesha",
        balance: 0,
        addBalance: function (balance) {
            return "My new balance is:".concat(this.balance + balance);
        },
    };
    var arr = [1, 2, 45, 32];
    var newArray = arr.map(function (elem) { return elem * elem; });
}
