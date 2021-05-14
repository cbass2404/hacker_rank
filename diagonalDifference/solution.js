function diagonalDifference(arr) {
    let totalA = 0;
    let totalB = 0;
    for (let i = 0; i < arr.length; i++) {
        totalA = totalA + arr[i][i];
        totalB = totalB + arr[i][arr.length - 1 - i];
    }
    return totalA > totalB ? totalA - totalB : (totalA - totalB) * -1;
}

console.log(
    diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ])
);
