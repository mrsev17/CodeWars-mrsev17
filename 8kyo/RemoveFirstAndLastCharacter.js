// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

'use strict';

const removeChar = (str) => {
    const strArr = str.split('');
    strArr.shift();
    strArr.pop();
    return strArr.join('');
};
