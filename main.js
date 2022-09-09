//basic function practice

// 1. Create a function that console logs the string "FUNctions are fun!"
const logString = (string) => {
    console.log(string)
}

// logString("FUNctions are fun!");


// 2. Create a function that adds two numbers (just like in the content document) and returns the sum. Optional: check the data type before adding.

const addTwoNumbers = (num1, num2) => {
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        let sum = num1 + num2;
        return sum;
    } else {
        return "not a Number Dummy!"
    }
    
}

// 3. Invoke the function with two numbers of your choice.
// console.log(addTwoNumbers(3, 5));


// 4. Create another function that multiplies two numbers and returns the product.  Invoke this function.


const multiplyTwoNumbers = (num1, num2) => {
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        let product = num1 * num2;
        return product;
    } else {
        return "not a Number Dummy!"
    }
    
}

// console.log(multiplyTwoNumbers(3, 5));


// 5. Create another function that adds two numbers and then multiplies the sum by a third number.  Complete this task by invoking the other two math functions within your new function.  Test this function by invoking it and console logging the output.

const addAndMultiply = (num1, num2, num3)  => {
    let sum = addTwoNumbers(num1, num2)
    let result = multiplyTwoNumbers(sum, num3);
    return result;
}

// console.log(addAndMultiply(2, 3, 4));

