console.log("1. Написать функцию isSymbolPresentInString");

function isSymbolPresentInString(str, symbol) {
    return str.indexOf(symbol) !== -1;
}

console.log(isSymbolPresentInString("abcd", "c"));


console.log("2. Написать функцию getSymbolIndex");

function getSymbolIndex(str, symbol) {
    return str.indexOf(symbol);
}

console.log(getSymbolIndex("abcd", "a"));

console.log("3. Написать функцию getNumberOfEven");

function getNumberOfEven(n) {
    let count = 0;

    for (let i = 0; i <= n.length; i++) {
        if (n[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(getNumberOfEven("3334445556666"));

console.log("Написать собственную реализацию функции forEach");

let forEach = function(arr, callback, thisArg) {
    for (let i = 0; i <= arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }
};

console.log("Написать собственную реализацию функции map");

let map = function(arr, callback, thisArg) {
    let copiedArr = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        copiedArr.push(callback.call(thisArg, arr[i], i, arr));
    }
    return copiedArr;
};

console.log(map([10, 20, 30], function (n) {
    return n ** 2;
}));

console.log("Написать собственную реализацию функции filter");

let filter = function(arr, callback, thisArg) {
    filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};

console.log(filter([1, 2, 3, 4, 5, 6],function(num) {
    return num % 2 === 0;
}));