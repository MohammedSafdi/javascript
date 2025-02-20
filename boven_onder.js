let bottom = 1;
let top = 100;
let number = 0;

for (bottom; bottom <= top; bottom++) {
    if (bottom % 3 == 0) {
        number += bottom;
    }
}

console.log(number);