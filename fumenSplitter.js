const { decoder, encoder } = require('tetris-fumen');

var fumenCodes = []
for(let rawInput of process.argv.slice(2)){
    fumenCodes.push(...rawInput.split(" "));
}

for (let code of fumenCodes) {
    let inputPages = decoder.decode(code);
    for (let i = 0; i < inputPages.length; i++) {
        console.log(encoder.encode([inputPages[i]]));
    }
}