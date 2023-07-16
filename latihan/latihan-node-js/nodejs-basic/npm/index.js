const lodash = require('lodash')



const myArray = lodash.partition([1,2,3,4,5,6,7,8,9], n => n % 2);


console.log(myArray);
