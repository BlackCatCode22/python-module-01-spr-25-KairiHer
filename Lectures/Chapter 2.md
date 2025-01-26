## Values and types
- A value is a basic unit in programming, such as a number or a string. Values can have different types: integers (e.g., 2), strings (e.g., "Hello, World!"), and floats (e.g., 3.2). The `type()` function can identify a value's type, such as `str` for strings, `int` for integers, and `float` for numbers with decimals. Strings that look like numbers (e.g., '17' or '3.2') are still treated as strings, not numbers. Additionally, Python does not allow commas in large integers like 1,000,000, causing a semantic error where the code runs but doesn’t behave as expected.
---

## Variables
- A variable is a name that refers to a value, and it can be created through an assignment statement. For example, `message = 'And now for something completely different'`, `n = 17`, and `pi = 3.1415926535897931` create variables with different types: a string, an integer, and a float, respectively. To display the value of a variable, you can use the `print()` function. The type of a variable corresponds to the type of the value it refers to, which can be checked using the `type()` function, such as `type(message)` returning `str`, `type(n)` returning `int`, and `type(pi)` returning `float`.
---

## Variable names and keywords
- Variable names in Python should be meaningful to document their purpose. They can contain letters and numbers, but must not start with a number. While uppercase letters are allowed, it's customary to start variable names with a lowercase letter. The underscore character (`_`) is also valid, often used in multi-word names like `my_name`. However, names cannot contain illegal characters like `@`, and certain words are reserved as Python keywords (e.g., `class`, `False`, `if`) and cannot be used as variable names. Python reserves 35 keywords that are essential for the program's structure.
---

## Statements
- A statement in Python is a unit of code that the interpreter can execute. There are two main types of statements: expression statements (like `print`) and assignment statements. When you type a statement in interactive mode, the interpreter executes it and shows the result, if there is one. In a script, multiple statements execute sequentially, with their results appearing one after another. For example, the script:

```python
print(1)
x = 2
print(x)
```

outputs:

```
1
2
```

Note that the assignment statement `x = 2` produces no output, as it simply assigns a value to a variable.
---

## Operators and operands
- Operators in Python represent computations such as addition, subtraction, multiplication, division, and exponentiation. The values that operators apply to are called operands. For example, `+`, `-`, `*`, `/`, and `**` perform basic arithmetic operations:

- `20 + 32` (addition)
- `hour - 1` (subtraction)
- `hour * 60 + minute` (multiplication and addition)
- `minute / 60` (division)
- `5 ** 2` (exponentiation)

In Python 3, division with `/` returns a floating-point result:

```python
minute = 59
minute / 60
```

Output: `0.9833333333333333`

For integer division, Python 3 uses `//`:

```python
minute // 60
```

Output: `0` (integer division).

In contrast, Python 2 would perform integer division by default, truncating the result.
---

## Expressions
- An expression in Python is a combination of values, variables, and operators that the interpreter can evaluate. For example, a value like `17`, a variable like `x`, or an operation like `x + 17` are all expressions. If you enter an expression in interactive mode, the interpreter evaluates it and displays the result:

```python
>>> 1 + 1
2
```

However, in a script, simply writing an expression without using it in a statement does nothing. It does not produce any output or affect the program.

### Exercise 1:
In the Python interpreter, try typing the following:

```python
5
x = 5
x + 1
```

- The first statement just displays `5`.
- The second assigns the value `5` to the variable `x`.
- The third expression `x + 1` will be evaluated but not displayed unless you use `print()` to output it or store the result in a variable.
---

## Order of operations
In Python, the order of evaluation for operators follows the mathematical convention known as PEMDAS, which stands for:

1. **Parentheses**: Operations inside parentheses are performed first, allowing you to control the order of operations. For example, `2 * (3-1)` evaluates to 4, and `(1+1)**(5-2)` evaluates to 8.
   
2. **Exponentiation**: This operator (`**`) has the next highest precedence. For example, `2**1+1` equals 3, not 4, and `3*1**3` equals 3, not 27.

3. **Multiplication and Division**: These operators (`*`, `/`) have the same precedence and are evaluated before addition and subtraction. For example, `2*3-1` evaluates to 5, and `6+4/2` equals 8, not 5.

4. **Addition and Subtraction**: These operators have the lowest precedence, evaluated after multiplication and division. For example, `5-3-1` evaluates to 1, not 3, because subtraction is done from left to right.

To avoid confusion, it's always a good practice to use parentheses to clearly define the order of operations in your expressions.
---

## Modulus operator
- The **modulus operator** (`%`) in Python calculates the remainder when one integer is divided by another. It’s commonly used to determine if a number is divisible by another or to extract digits from a number.

For example:
- `7 // 3` calculates the quotient, which is 2.
- `7 % 3` calculates the remainder, which is 1, because 7 divided by 3 leaves a remainder of 1.

You can use the modulus operator to check divisibility: if `x % y == 0`, then `x` is divisible by `y`. It can also help extract digits from a number: for instance, `x % 10` gives the right-most digit of `x`, and `x % 100` gives the last two digits.
---

## String operations
- The `+` operator in Python is used to concatenate (join) strings together rather than adding them numerically. For example:

```python
first = '100'
second = '150'
print(first + second)  # Output: '100150'
```

The `*` operator can also be applied to strings, which repeats the string a specified number of times. For example:

```python
first = 'Test '
second = 3
print(first * second)  # Output: 'Test Test Test'
``` 

This makes `+` useful for string joining and `*` for string repetition.
---

## Asking the user for input
In Python, the `input()` function is used to get input from the user. When called, it pauses the program and waits for the user to type something. The input is returned as a string.

For example:

```python
name = input('What is your name?\n')
print(name)
```

You can also use `input()` to ask for numeric input, but since the result is always a string, you can convert it to an integer using the `int()` function:

```python
speed = input('What...is the airspeed velocity of an unladen swallow?\n')
speed = int(speed)
```

- However, if the user enters non-numeric data, trying to convert it to an integer will cause a `ValueError`. You'll need to handle this error later to ensure the program works smoothly.
---

## Comments
- As programs grow in complexity, they can become difficult to understand. To improve readability, it's helpful to add comments in your code. In Python, comments start with the `#` symbol, and everything from the `#` to the end of the line is ignored by the program. 

For example:

```python
# compute the percentage of the hour that has elapsed
percentage = (minute * 100) / 60
```

You can also place comments at the end of a line:

```python
percentage = (minute * 100) / 60     # percentage of an hour
```

- Comments are most useful when they explain why something is done, especially when it's not obvious from the code itself. A good practice is to use meaningful variable names to reduce the need for excessive comments, but there should still be a balance to ensure code remains readable.
---

## Choosing mnemonic variable names
When choosing variable names, it's important to use meaningful names that make the code more understandable. The following examples show how different naming choices affect readability:

1. Using generic variable names:
```python
a = 35.0
b = 12.50
c = a * b
print(c)
```

2. Using descriptive names:
```python
hours = 35.0
rate = 12.50
pay = hours * rate
print(pay)
```

3. Using non-descriptive names:
```python
x1q3z9ahd = 35.0
x1q3z9afd = 12.50
x1q3p9afd = x1q3z9ahd * x1q3z9afd
print(x1q3p9afd)
```

While the Python interpreter treats these examples identically, humans find it easier to understand the second example with meaningful variable names like `hours` and `rate`. These are called "mnemonic variable names," which help programmers remember the purpose of the variables.

However, beginning programmers may find overly descriptive variable names confusing, as they might seem like reserved words or part of the language itself. For example, in a loop like `for word in words:`, the keywords `for`, `in`, and `print` are reserved by Python, while `word` and `words` are variable names. This distinction can be hard to spot for beginners. 

- To make things clearer, it's better to use simple, descriptive variable names that match the context of the program, helping you distinguish reserved words from user-chosen variables. As you become more experienced, you'll be able to quickly identify keywords and understand their role in the code.
---

## Debugging
At this point, the syntax error you are most likely to make is an illegal variable name, like class and yield, which are keywords, or odd~job and US$, which contain illegal characters.


If you put a space in a variable name, Python thinks it is two operands without an operator:

>>> bad name = 5
SyntaxError: invalid syntax
For syntax errors, the error messages don’t help much. The most common messages are SyntaxError: invalid syntax which is not very informative.


The runtime error you are most likely to make is a “use before def;” that is, trying to use a variable before you have assigned a value. This can happen if you spell a variable name wrong:

>>> principal = 327.68
>>> interest = principle * rate
NameError: name 'principle' is not defined
Variables names are case sensitive, so LaTeX is not the same as latex.


At this point, the most likely cause of a semantic error is the order of operations. For example, to evaluate 1/2π, you might be tempted to write

>>> 1.0 / 2.0 * pi
But the division happens first, so you would get π/2, which is not the same thing! There is no way for Python to know what you meant to write, so in this case you don’t get an error message; you just get the wrong answer.
---
