function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const minRange = sortedArr.slice(0, sortedArr.length - 1);
    const maxRange = sortedArr.slice(1, sortedArr.length);
    const sumArray = (total, num) => {
        return total + num;
    };

    console.log(minRange.reduce(sumArray, 0), maxRange.reduce(sumArray, 0));
}

miniMaxSum([1, 3, 5, 11, 9]);
