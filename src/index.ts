//Task3
const add = (a :number ,b:number) : string => {
    return a + b;
}
const result = add(1,2) + 0;
console.log(result, 'type of result:', typeof result);//Type Error: Type 'number' is not assignable to type 'string'
