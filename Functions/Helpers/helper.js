'use strict';

const numbers = [45, 33, 9, 67, 22];
console.log('Numbers are ' + numbers)
console.log('Get First Number:', getFirst(numbers));
console.log('Get Last Number:', getLast(numbers));
console.log('Average is', getAverage(numbers));
console.log('Minimum is', getMinimum(numbers));
console.log('Maximum is', getMaximum(numbers));
console.log('Total is', getTotal(numbers));

function getFirst(first) {
    return numbers[0];
}

function getLast(last) {
    for (let i = 0; i < numbers.length; i++) {
        last = numbers[i]
    }
    return last
}

function getAverage(avg) {
    let res = 0
    for (let i = 0; i < numbers.length; i++) {
        res = numbers[i] + res
    }
    return res / numbers.length
}

function getMinimum(min) {
    let minimum = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (minimum >= numbers[i]) {
            minimum = numbers[i]
        }
    }
    return minimum
}

function getMaximum(max) {
    let maximum = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (maximum <= numbers[i]) {
            maximum = numbers[i]
        }
    }
    return maximum
}

function getTotal(total) {
    let res = 0
    for (let i = 0; i < numbers.length; i++) {
        res = numbers[i] + res
    }
    return res
}