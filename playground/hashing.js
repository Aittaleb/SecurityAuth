const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');





var data = {
    id: 4,
    name : 'Abdelhamid'

};


var token = jwt.sign(data , 'secret');
console.log(token);

var decoded = jwt.verify(token +'1', 'secret');
console.log(decoded);


// var tocken = {
//     data,
//     hash: SHA256(JSON.stringify(data) +'secret').toString()
// };

