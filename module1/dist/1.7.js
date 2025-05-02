"use strict";
{
    //spread operator
    //rest operator
    //destructuring
    //learn spread operators
    var bros1 = ["Mir", "mizan", "Mirajul"];
    var bros2 = ["Akash", "Ashraful", "Ashish"];
    bros2.push.apply(bros2, bros1);
    console.log(bros2);
}
