const rankCalcultor = (a, b) => {
    let scoreA = 0;
    let scoreB = 0;
    if (a.length !== b.length) {
        return "Invalid";
    }
    for (let i = 0; i < a.length; i++) {
        a[i] > b[i] ? scoreA++ : a[i] < b[i] ? scoreB++ : null;
    }
    return [scoreA, scoreB];
};

console.log(rankCalcultor([5, 6, 7], [3, 6, 10]));
console.log(rankCalcultor([5, 6, 7], [3, 7, 10]));
console.log(rankCalcultor([5, 6, 7], [3, 6]));
