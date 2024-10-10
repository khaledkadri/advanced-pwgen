<h1>Advanced Password Generator Plugin</h1>
<p>Author: Khaled Kadri</p>

<h2>Demo</h2>
<a href="https://www.codeurjava.com/assets/github/repositories/javascript-advanced-password-generator/demo.html">Try it here !</a>

<h2>Description</h2>

<img src="https://www.codeurjava.com/assets/github/repositories/javascript-advanced-password-generator/password_example.png" alt="Password Example" style="width:50%;">

<p>This password generator allows you to generate very secure and customizable passwords. It offers the possibility to include numbers, uppercase and lowercase letters
as well as special characters, and it has the possibility to exclude similar characters.</p>

<h2>Features</h2>
<ul>
<li>Set length</li>
<li>Include numbers from 0 to 9</li>
<li>Include lowercase(a-z) and uppercase(A-Z) letters</li>
<li>Include special characters(ex: #{@$!)</li>
<li>Exclude duplicate characters</li>
<li>Generate multiple passwords</li>
</ul>

<h2>Installation</h2>

```javascript
<script src="path/to/your/pwgen.js"></script>
```

<h2>Usage</h2>

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

<h2>Example</h2>

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

<h2>License</h2>
<p>This project is licensed under MIT.</p>
