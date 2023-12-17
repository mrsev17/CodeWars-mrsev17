// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

'use strict';

const positiveSum = (arr) => {
    if (arr.length === 0) return 0;
    return arr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc + 0), 0);
};

console.log(positiveSum([]));
