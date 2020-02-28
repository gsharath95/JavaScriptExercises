const VALUE1 = "";
const VALUE2 = "";
//let res = "";

function execute(operation, VALUE1, VALUE2) {

    if (typeof (operation) === 'string') {
        if (operation === 'ADD') {
            return VALUE1 + VALUE2;
        } else if (operation === 'SUB') {
            return VALUE1 - VALUE2;
        } else if (operation === 'MUL') {
            return VALUE1 * VALUE2;
        } else {
            return "Unknown operation name";
        }
    } else if (typeof operation === 'function') {
        operation(div)
        return VALUE1 / VALUE2;
    } else {
        return "Unknown operation type";
    }
}