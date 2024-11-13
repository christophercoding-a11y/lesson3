let coders = [
    'Will',
    'Charlie',
    'Connor',
    'Josh',
    'Zeek',
    'Janjala',
    'Favor',
    'Lachelle',
    'Clint',
    'Christopher',
    'Renee',
    'Chloe',
    'Trelin',
    'Darius',
];

// Repetition Structures
/**
 * Looping
 * 
 * for loop
 * while loop
 * forEach loop
 */

/**
 * for loop
 * 
 * Allows us to loop through a  data set
 * 
 * syntax:
 * 
 * for (initialization; condition; iteration) {
 * // do stuff
 * }
 */

// loop through the array, coders, and say good morning to each coder
for (let i = 0; i < coders.length; i++) {
    // do stuff
    // console.log(`Good morning, ${coders[i]}`)

}

for (let i = coders.length -1; i >= 0; i--) {
    console.log(`Good morning, ${coders[i]}`);
}

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let i = 1; i <= 10; i+=2) {
    console.log(i)
}

/**
 * While loop will loop complete a task while a condition is true
 * 
 * syntax:
 * 
 * while (condition) {
 * // do stuff
 * }
 */

// Greet each other using a while loop
let i = 0;

while (i < coders.length) {
    console.log(`Good morning, ${coders[i]}`)

    i++
}

let j = 1

while (j < 11) {
    console.log(j)

    j++
}

/**
 * forEach loop works specifically for arrays ans will complete a task for every item in the array
 * 
 * syntax:
 * arrName.forEach(item =>) {
 *    // do stuff
 * })
 */

// use a forEach loop to greet every coder

coders.forEach(coder => {
    console.log (`Good morning ${coder}!!`)
})

coders.forEach(coder => console.log(`Goodbye, ${coder}`))

let k = 1

do {
    console.log(k)
} while (k > 2);

const team = [
    ['los angeles', 'dodgers'],
    ['detroit', 'lions',]
    ['green bay', 'packers'],
    ['edmonton', 'oilers'],
    ['new york', 'liberty']
]