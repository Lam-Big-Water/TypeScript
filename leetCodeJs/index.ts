function createHelloWorld (): () => string {
    return (...agr: any) => 'Hello World';
}
const f = createHelloWorld();

console.log(f());

function createCounter (n: number): () => number {
    return () => n++;
}

const count = createCounter(10);

console.log(count());
console.log(count());
console.log(count());


type TesterType = {
    toBe: (val: any) => boolean | Error;
    notToBe: (val: any) => boolean | Error;
}

const tester = (val: any): TesterType => {
    const errorMessage = (str: string) => new Error(str);

    return {
        toBe: (otherVal) => otherVal === val || errorMessage('Not Equal'),
        notToBe: (otherVal) => otherVal !== val || errorMessage('Equal'),
    }

}
console.log(tester(null).toBe(null))