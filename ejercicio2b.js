const array1 = [
    [1, 3, 5],
    [7, 9, 7],
    [5, 3, 1],
];

const array2 = [
    [2, 4, 6],
    [8, 10, 8],
    [6, 4, 2],
];

const result = [];

for (let x = 0; x < array1.length; x++) {
    for (let y = 0; y < array2.length; y++) {
        let multiplicationArrays = array1[x][y] * array2[y][x];
        multiplicationArrays = multiplicationArrays.toString();
        multiplicationArrays = multiplicationArrays.padStart(3, "0");
        result.push(multiplicationArrays);
    }
}
console.log(result);
/* el array del resultado se muestra en la consola*/