// https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/javascript

'use strict';

const hello = (name = '') => {
    if (name === '') return 'Hello, World!';
    const nameUp = name.split('').reduce((acc, value) => {
        if (acc.length === 0) {
            return acc + value.toUpperCase();
        } else {
            return acc + value.toLowerCase();
        }
    }, '');
    return `Hello, ${nameUp}!`;
};
