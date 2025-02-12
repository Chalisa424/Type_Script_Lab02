//Task3
// const findMax = (numbers: number[]): string => {
//     if (numbers.length === 0) {
//         return "List is empty";
//     }
//     const maxNumber = Math.max(...numbers);
//     return "The maximum number is " + maxNumber;
// };

// const numbers = [1, 2, 3, 4, 5];
// console.log(findMax(numbers)); // The maximum number is 5

import add, { subtract } from './function';
const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);
//30 type of result: string and -10 type of result2: string

