// // 1. 
// const args = [{}, null, 42];

// const createHelloWorld = () => (...arg: any): string => 'Hello World';


// const f = createHelloWorld();
// console.log(f(args))

// // 2. 
// const createCounter = (n: number): () => number => {
//     return () => n++
// }
// const counter = createCounter(10);

// console.log(counter());
// console.log(counter());
// console.log(counter());

// // 3. 

// type ToBeOrNotToBe = {
//     toBe: (val: any) => boolean;
//     notToBe: (val: any) => boolean;
// };

// function expect(val: any): ToBeOrNotToBe {
//     return {
//         toBe(val2){
//             if(val === val2){
//                 return true
           
//             } else throw "Not Equal"
//         },
//         notToBe(val2){
//             if(val !== val2){
//                 return true
           
//             } else throw "Equal"
//         }
//     }
// };


// expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"

// // 4. 
// const createCounter2 = (init: number) => {
//     let count = init;
//     return {
//         increment() {
//             return ++count
//         },
//         reset() {
//             return count = init
//         },
//         decrement() {
//             return ++count
//         }
//     }
// }

// const counter2 = createCounter2(5);
// console.log(counter2.increment());
// console.log(counter2.reset());
// console.log(counter2.decrement());

// 5.
// function myMap<T, U>(arr: T[], fn: (value: T, index: number) => U): U[] {
//     const mappedArray: U[] = [];

//     for (let i = 0; i < arr.length; i++) {
//         mappedArray.push(fn(arr[i], i))
//     }

//     return mappedArray;
// }


// const newArr = myMap([1,2,3], function(v, i) {
//     return v + i
// });
// console.log(newArr);

// 6.

// function myFilter<T,>(arr: T[], fn: (v: T, i?: number) => boolean): T[] {
//     const result: T[] = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// const newArr_2 = myFilter([1, 2, 3], function(n, i) {
//     return n > 1 && i === 1
// })

// console.log(newArr_2)

// 7.
// function myReduce<T, U>(arr: U[], fn: (acc: T, curr: U) => T, init: T ): T {
//     let result: T = init;
//     for (let i = 0; i < arr.length; i++) {
//         result = fn(result, arr[i]);
//     }
//     return result;
// }

// const newArr_3 = myReduce([1, 2, 3], function(acc, curr) {
//     return acc + curr
// }, 0)

// console.log(newArr_3)

// 8. Function Composition

// type Func = (arg: any) => any;

// function compose(functions: Func[]): Func {
//     if (functions.length === 0) {
//         return (x: any) => x;
//     }

//     return functions.reduceRight(function (prevFn, nextFn) {
//         return function (x: any) {
//             return nextFn(prevFn(x));
//         }
//     })
// }
// const x = compose([function(x){return x + 1}, x => x * x, x => 2 * x]);
// console.log(x(4));


// 9. Return Length of Arguments Passed
// const argumentsLength = (...args: any[]): number => args.length;

// console.log(argumentsLength(1, 'c', true));

// Allow One Function Call

type Func<T, U> = (...args: T[]) => U;

function once<T, U>(fn: Func<T, U>): Func<T, U | undefined> {
    let hasBeenCalled = false;
    let result: U;

    return function (...args: T[]): U | undefined {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    }
}
const fn = (a: number, b: number, c: number) => (a + b +c);
const onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(3, 2, 1));

// my example

const move = (action) => {

    return function (...steps) {
       return action(...steps)
    }

}

const action = (step, step2) => step + step2;
const myMove = move(action);
console.log(myMove(1, 2))