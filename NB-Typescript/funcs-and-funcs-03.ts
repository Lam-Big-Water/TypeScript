type MutationFunction = (v: number) => number;

function arrayMutate (numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate)
}

const myNewMutateFunc = (v: number) => v * 100;

console.log(arrayMutate([1, 2, 3], myNewMutateFunc))


type AdderFunction = (v: number) => number;

function createAdder (v: number): AdderFunction {
    console.log(v);
    return (v2: number) => v + v2;
}

const addOne = createAdder(1);
console.log(addOne(55));