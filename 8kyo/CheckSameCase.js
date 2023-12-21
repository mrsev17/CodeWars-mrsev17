// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

'use strict';

const sameCase = (a, b) => {
    const testa = /^[a-zA-Z]+$/.test(a);
    const testb = /^[a-zA-Z]+$/.test(b);
    if (!testa || !testb) return -1;
    if (a.toUpperCase() === a && b.toUpperCase() === b) return 1;
    if (a.toLowerCase() === a && b.toLowerCase() === b) return 1;
    return 0;
};
