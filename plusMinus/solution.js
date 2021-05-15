// function plusMinus(arr) {
//     let result = [];
//     let count = {
//         positive: 0,
//         negative: 0,
//         zero: 0,
//     };

//     arr.forEach((num) => {
//         num > 0 ? count.positive++ : num < 0 ? count.negative++ : count.zero++;
//     });

//     for (let key in count) {
//         result.push((count[key] / arr.length).toFixed(6));
//     }

//     for (let i = 0; i < result.length; i++) {
//         console.log(result[i]);
//     }
// }

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
plusMinus([-4, 3, -9, 0, 4, 1]);
