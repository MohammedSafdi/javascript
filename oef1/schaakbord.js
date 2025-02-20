let grootte = 8;
let board = "";

for (let i = 0; i < grootte; i++) {
    for (let j = 0; j < grootte; j++) {
        if ((i + j) % 2 == 0) {
            board += '#';
        }else {
            board +=' ';
        }
    }
    board +="\n";
}
console.log(board);