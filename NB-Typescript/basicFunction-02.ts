function addNumbers (a: number, b: number): number {
    return a + b
}

console.log(addNumbers(1, 2));


const addString = (a: string, b: string = ''): string => `${a} ${b}`;
console.log(addString('love', 'song'));


const format = (title: string, param: string | number): string => `${title} ${param}`;
console.log(format('id:', 1));

const printFormat = (a: string, b: number): void => {
    console.log(format(a, b))
}
printFormat('id:', 2);


const fetchData = (url: string): Promise<string> => {
    return Promise.resolve(`Data from ${url}`)
}
console.log(fetchData('lovesong'));


const introduce = (salutation: string, ...names: string[]): string => {
    return `${salutation} ${names.join(' ')}`;
}
console.log(introduce('welcome', 'TS'))

const getName = (user?: {first: string; last: string}): string => {
    return `${user?.first ?? 'non'} ${user?.last ?? 'non'}`
}
console.log(getName());