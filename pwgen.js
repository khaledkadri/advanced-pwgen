/*
 * Author: KHALED KADRI
 * https://github.com/khaledkadri
 * License: MIT License
 * Copyright © 2024 KHALED KADRI
 */

function generate(elementId, options) {
    // Default settings
    var defaults = {
        length: 15,
        num: true,
        lower: true,
        upper: true,
        spc: true,
        excl: false,
        quantity: 1
    };

    // Merge user options with defaults
    var settings = Object.assign({}, defaults, options);

    // Generate password(s)
    var random = genpw(settings.length, settings.num, settings.lower, settings.upper, settings.spc, settings.excl, settings.quantity);
    var element = document.getElementById(elementId);
    element.innerHTML = ''; // Clear element content

    for (var k = 0; k < settings.quantity; k++) {
        random[k] = random[k].replace("<", "&#60;"); // Escape "<"
        element.innerHTML += `<span style='color:blue;'>${random[k]}</span><hr style='margin-top: 10px;margin-bottom: 10px;'>`;
    }
}

// Function to generate password(s)
function genpw(length, num, lower, upper, spc, excl, quantity) {
    var output = [];
    var _lower = "abcdefghijklmnopqrstuvwxyz";
    var _upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var _num = "0123456789";
    var _special_char = "&#'(-_@)=+/*,;<>?§!:/.|*£${}[]~^`";

    // Create a possible characters string based on user settings
    var possible = "";
    if (num) possible += _num;
    if (lower) possible += _lower;
    if (upper) possible += _upper;
    if (spc) possible += _special_char;

    console.log(possible.length);

    // Adjust length if it's longer than possible characters
    if (length > possible.length) length = possible.length;
    if (length > 94) length = 94;

    for (var k = 0; k < quantity; k++) {
        output[k] = "";
        for (var i = 0; i < length; i++) {
            if (excl) {
                var char = possible.charAt(Math.floor(Math.random() * possible.length));
                while (output[k].indexOf(char) > -1) {
                    char = possible.charAt(Math.floor(Math.random() * possible.length));
                }
                output[k] += char;
            } else {
                output[k] += possible.charAt(Math.floor(Math.random() * possible.length));
            }
        }
    }

    return output;
}