'use strict '

function createItem(a) {
    return '<li>' + a + '</li>';
}

function createList(arrayItem) {
    let Items = "";
    for (let i = 0; i < arrayItem.length; i++) {
        Items += createItem(arrayItem[i])
    }
    return '<ul>' + Items + '</ul>';
}