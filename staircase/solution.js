function staircase(n) {
    let x = n;
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(x - 1) + "#".repeat(i + 1));
        x--;
    }
}

staircase(6);
