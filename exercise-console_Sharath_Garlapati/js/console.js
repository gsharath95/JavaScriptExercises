'use strict'

const temperature = 21.3
const FRUITS = ['apple', 'pear', 'orange']
console.log('Yo. \n' + temperature + '\n', FRUITS)
console.log('The temperature is ' + temperature)
console.log('The collection of fruits is ', FRUITS)
console.log('<h1>No HTML Interpreter</h1>')
console.log('18', 'eighteen', true, null, undefined)
console.log('This is a group')
console.group()
console.log(' Group content')
console.groupEnd()
console.log('This is a second group')
console.group()
console.log('Content of the second group')
console.groupEnd()