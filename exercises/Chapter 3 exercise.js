### **Exercise 1**: Pay computation with overtime

```javascript
// Exercise 1: Compute pay with overtime
let hours = parseFloat(prompt("Enter Hours:"));
let rate = parseFloat(prompt("Enter Rate:"));

let pay;
if (hours > 40) {
    pay = (40 * rate) + ((hours - 40) * rate * 1.5);
} else {
    pay = hours * rate;
}

console.log("Pay: " + pay);
```

### **Exercise 2**: Handle non-numeric input with try-catch

```javascript
// Exercise 2: Handle non-numeric input
try {
    let hours = parseFloat(prompt("Enter Hours:"));
    let rate = parseFloat(prompt("Enter Rate:"));
    
    if (isNaN(hours) || isNaN(rate)) {
        throw "Error, please enter numeric input";
    }

    let pay;
    if (hours > 40) {
        pay = (40 * rate) + ((hours - 40) * rate * 1.5);
    } else {
        pay = hours * rate;
    }

    console.log("Pay: " + pay);
} catch (error) {
    console.log(error);
}
```

### **Exercise 3**: Score to Grade Conversion

```javascript
// Exercise 3: Score to grade
let score = parseFloat(prompt("Enter score:"));

if (score >= 0.0 && score <= 1.0) {
    if (score >= 0.9) {
        console.log("A");
    } else if (score >= 0.8) {
        console.log("B");
    } else if (score >= 0.7) {
        console.log("C");
    } else if (score >= 0.6) {
        console.log("D");
    } else {
        console.log("F");
    }
} else {
    console.log("Bad score");
}
```

### Explanation:
1. **Exercise 1**: The program calculates the pay, considering overtime (1.5 times the hourly rate for hours over 40).
2. **Exercise 2**: Uses a `try-catch` block to catch non-numeric input. If a user inputs something that isn't a number, it prints an error message.
3. **Exercise 3**: The program asks the user for a score between 0.0 and 1.0 and prints the corresponding grade. If the score is outside the valid range, it prints "Bad score."
