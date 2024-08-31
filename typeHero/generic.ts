// Default Generic
// type LogLevel = 'debug' | 'info' | 'notice';

// const log = (message: string, level: LogLevel = 'info') => {
//     console.log(message + level);
// };

// log('Welcome your state: ');
// log('Welcome your state: ', 'debug');

// Generic Function
const whatYouCreate = <T,>(value: T) => {
    console.log(value);
}
// whatYouCreate(1);
// whatYouCreate('1');
// whatYouCreate(true);

const arr =  [1, 2, 3];

const identity = <T,>(value: T) => value;

const mapArray = <T, U>(arr: T[], fn: (value: T) => U) => arr.map(fn);

function double (value: number) {
    return value * 2;
}

function convert (value: number) {
    return value.toString();
}



// console.log(identity(arr));
// console.log(mapArray(arr, double));
console.log(mapArray(arr, convert));




// Using Generic Constraints
type RowConstraints = string | number | (() => string | number);

type Row<T extends RowConstraints> = {
	value: T;
	label: string;
	orientation: 'vertical' | 'horizontal';
}
// Now, if we try to use our Row generic with anything that doesn't match the above, 
// TypeScript will report an error:
// type StringArrayRow = Row<string[]>;




type AllowString<T extends string> = T;
type AllowNumber<T extends number> = T;

type CreateLogger<Fn extends (a: number) => void> = {
	log: Fn;
	exit: () => void;
};

type test_AllowStringString = AllowString<string>;