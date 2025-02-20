const prompt = require('prompt-sync')();

let aantallijnen = prompt("give a number: ");

for(let i = 0; i < aantallijnen; i++){
    const teken = "# ";
    const space = '  ';
    console.log(space.repeat((aantallijnen-i))+teken.repeat(i));
}