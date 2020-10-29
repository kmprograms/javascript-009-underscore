// -------------------------------------------------------------------------------------
// https://underscorejs.org/#
// npm install underscore
// -------------------------------------------------------------------------------------
import _,
{
    groupBy,
    indexBy,
    countBy,
    compact,
    invoke,
    wrap,
    before,
    isWeakMap,
    isSet
} from "underscore";

// -------------------------------------------------------------------------------------
// Collections
// -------------------------------------------------------------------------------------

const people = [
    {name: 'ANDY', age: 10},
    {name: 'JOHN', age: 20},
    {name: 'ANDY', age: 21},
    {name: 'JOHN', age: 30},
    {name: 'SAM', age: 40}
];

/*
console.log('-----> GROUP BY');
const groupedByName = _.groupBy(people, 'name');

Object.entries(groupedByName)
    .forEach(e => {
        const [name, groupedPeople] = e;
        console.log(name);
        groupedPeople.forEach(p => console.log(p));
    });

console.log('-----> INDEX BY');
const indexedByAge = _.indexBy(people, 'age');

Object.entries(indexedByAge)
    .forEach(e => {
        const [index, person] = e;
        console.log(index);
        console.log(person);
    });


console.log('-----> COUNT BY');
const countedByName = _.countBy(people, 'name');

Object.entries(countedByName)
    .forEach(e => {
        const [name, counter] = e;
        console.log(name);
        console.log(counter);
    });
*/

/*console.log('-----> COMPACT');
const computedData = [
    {value: 20},
    null,
    {value: 10},
    NaN,
    {value: 40},
    false,
    {value: 30}
];
const compactedData = _.compact(computedData);
console.log(compactedData);*/

/*console.log('-----> INVOKE');
const numbers = [
    [10, 40, 21],
    [39, 19, 29]
];
const results = _.invoke(numbers, 'sort');
results.forEach(result => console.log(result));*/


// -------------------------------------------------------------------------------------
// Functions
// -------------------------------------------------------------------------------------

// let info = name => `INFO: ${name}`;
// info = _.wrap(info, func => `----> ${func("xxx")}`);
// console.log(info());


/*let add = (x, y) => {
    console.log('INSIDE ADD FUNCTION');
    return x + y;
}
let addWrapper = () => add(11, 22);
const beforeFetchData = _.before(3, addWrapper);
console.log(beforeFetchData());
console.log(beforeFetchData());
console.log(beforeFetchData());
console.log(beforeFetchData());
console.log(beforeFetchData());
console.log(beforeFetchData());*/


// -------------------------------------------------------------------------------------
// Objects
// -------------------------------------------------------------------------------------
console.log(_.isWeakMap(new WeakMap()));
console.log(_.isSet(new Set()));

const cars = [
    {model: 'BMW', speed: 200},
    {model: 'AUDI', speed: 250},
    {model: 'MAZDA', speed: 120},
    {model: 'MERCEDES', speed: 300}
];
const slowestCar = _.chain(cars)
    .sortBy(car => car.speed)
    .map(car => car.model.toLowerCase())
    .first()
    .value();
console.log(slowestCar);


