Here are the solutions for the exercises in JavaScript:

### **Exercise 2**: Program to prompt for name and welcome the user

```javascript
// Exercise 2: Welcome the user by name
let name = prompt("Enter your name: ");
console.log("Hello " + name);
```

### **Exercise 3**: Program to compute gross pay

```javascript
// Exercise 3: Compute gross pay
let hours = parseFloat(prompt("Enter Hours:"));
let rate = parseFloat(prompt("Enter Rate:"));

let pay = hours * rate;
console.log("Pay: " + pay);
```

### **Exercise 4**: Expression evaluation and type checking

```javascript
// Exercise 4: Evaluate expressions
let width = 17;
let height = 12.0;

console.log("width // 2: " + (width // 2), typeof (width // 2)); // integer division
console.log("width / 2.0: " + (width / 2.0), typeof (width / 2.0)); // division with float
console.log("height / 3: " + (height / 3), typeof (height / 3)); // float division
console.log("1 + 2 * 5: " + (1 + 2 * 5), typeof (1 + 2 * 5)); // basic arithmetic
```

### **Exercise 5**: Convert Celsius to Fahrenheit

```javascript
// Exercise 5: Convert Celsius to Fahrenheit
let celsius = parseFloat(prompt("Enter Celsius temperature:"));
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Fahrenheit: " + fahrenheit);
```

### Explanation:
1. **Exercise 2**: The program prompts the user for their name and displays a welcoming message.
2. **Exercise 3**: The program computes the gross pay by multiplying the entered hours with the rate.
3. **Exercise 4**: The program evaluates and prints the result of the given expressions, along with the type of each result.
4. **Exercise 5**: The program prompts the user for a Celsius temperature, converts it to Fahrenheit, and prints the result.
