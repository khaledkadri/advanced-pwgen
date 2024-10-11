# Advanced Password Generator Plugin
Author: Khaled Kadri

## Demo
<a href="https://www.codeurjava.com/assets/github/repositories/javascript-advanced-password-generator/demo.html">Try it here !</a>

## Description

![Screenshot](https://www.codeurjava.com/assets/github/repositories/javascript-advanced-password-generator/password_example.png)

This javascript password generator plugin allows you to generate very secure and customizable passwords. It offers the possibility to include numbers, uppercase and lowercase letters
as well as special characters, and it has the possibility to exclude similar characters.

## Features
<ul>
<li>Set length</li>
<li>Include numbers from 0 to 9</li>
<li>Include lowercase(a-z) and uppercase(A-Z) letters</li>
<li>Include special characters(ex: #{@$!)</li>
<li>Exclude duplicate characters</li>
<li>Generate multiple passwords</li>
</ul>

## Installation<

```javascript
<script src="path/to/your/pwgen.js"></script>
```

## Usage

```javascript
generate('outputElementId', {
    length: 15, // Password length
    num: true, // Include numbers
    lower: true, // Include lowercase letters
    upper: true, // Include uppercase letters
    spc: true, // Include special characters
    excl: false, // Exclude similar characters
    quantity: 3 // Number of passwords to generate
});
```

## Example

```html
<div id="output"></div>
<script>
    generate('output', {
        length: 12,
        num: true,
        lower: true,
        upper: true,
        spc: true,
        excl: false,
        quantity: 1
    });
</script>
```

## License
This project is licensed under MIT.
