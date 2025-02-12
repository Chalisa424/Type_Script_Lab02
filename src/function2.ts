//Task4
const add = (a:number,b:number):string => {
    const result =  a+b;
    return result.toString();
 }

 export const  subtract = (a:number,b:number):string => {
    const result =  a-b;
    return result.toString();
 }

 export const findMax = (numbers: number[]): string => {
    if (numbers.length === 0) {
        return "List is empty";
    }
    const maxNumber = Math.max(...numbers);
    return `The maximum number is ${maxNumber}`;
}

export default add;
//30 type of result: string 
// -10 type of result2: string
// Output: The maximum number is 5