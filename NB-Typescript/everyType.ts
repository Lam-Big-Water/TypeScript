let userName: string = 'Jack';

userName += 'David'

let hasLoggedIn: boolean = true;

let passWord: number;

let regex: RegExp = /foo/;

const fullName: string[] = userName.split('');
console.log(fullName);

const myValues: Array<number> = [1, 2, 3];

interface Person {
    first: string,
    last: string,
}

const myPerson: Person = {
    first: 'Sam',
    last: 'Lam',
}

const ids: Record<number, string> = {
    10: 'Sun',
    11: 'Wind',
}
ids[12] = 'Land';
console.log(ids);

console.log(ids[12] === 'D')