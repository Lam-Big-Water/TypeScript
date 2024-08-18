// Default Generic
type LogLevel = 'debug' | 'info' | 'notice';

const log = (message: string, level: LogLevel = 'info') => {
    console.log(message + level);
};

log('Welcome your state: ');
log('Welcome your state: ', 'debug');

// Generic Function
const whatYouCreate = <T,>(value: T) => {
    console.log(value);
}
whatYouCreate(1);
whatYouCreate('1');
whatYouCreate(true);

const arr =  [1, 2, 3];

const identity = <T,>(value: T) => value;

const mapArray = <T, U>(arr: T[], fn: (value: T) => U) => arr.map(fn);

function double (value: number) {
    return value * 2;
}

function convert (value: number) {
    return value.toString();
}



console.log(identity(arr));
console.log(mapArray(arr, double));
console.log(mapArray(arr, convert));

