function sumOfDIgits(num) {
    if (num < 10) {
        return num
    }
    return num % 10 + sumOfDIgits(Math.floor(num / 10));
}

console.log(sumOfDIgits(1234));