function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0)
};

function avg(numbers) {
    const sumOfNumbers = sum(numbers)
    return sumOfNumbers / numbers.length
};

module.exports = {
    sum,
    avg
}