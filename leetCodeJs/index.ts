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

// 4. 
const createCounter2 = (init: number) => {
    let count = init;
    return {
        increment() {
            return ++count
        },
        reset() {
            return count = init
        },
        decrement() {
            return ++count
        }
    }
}

const counter2 = createCounter2(5);
console.log(counter2.increment());
console.log(counter2.reset());
console.log(counter2.decrement());