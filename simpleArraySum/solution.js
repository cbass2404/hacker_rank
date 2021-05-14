function simpleArraySum(ar) {
    let totalAr = ar.reduce((add, total) => add + total, 0);
    return totalAr;
}
