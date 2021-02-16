const values = [3, 11, 7, 2, 9, 10];

// calculate the sum of the array values
const sum = (a, b) => a + b;
sum_of_values = values.reduce(sum);
console.log(`Sum of all array values is: ${sum_of_values}`);

// calulate maximum of the array values

maximumValue = Math.max(...values);
console.log(`Maximum Value is : ${maximumValue}`);

// calulate minimum of the array values
minimumValue = Math.min(...values);
console.log(`Minimum Value is : ${minimumValue}`);