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

import add, { subtract, findMax } from './function2';

const result = add(1,2) + 0;
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);

const numbers = [1, 2, 3, 4, 5];
console.log(findMax(numbers));
//30 type of result: string 
// -10 type of result2: string
// Output: The maximum number is 5
