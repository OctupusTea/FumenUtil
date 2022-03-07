// const { decoder, encoder } = require('tetris-fumen');

function combineFumen() {
    var fumenCodes = [];
    input = document.getElementById('input').value;
    for (let rawInput of input.split("\t")) {
        fumenCodes.push(...rawInput.split(" "));
    }

    combined = [];

    for (let code of fumenCodes) {
        let inputPages = decoder.decode(code);
        for (let i = 0; i < inputPages.length; i++) {
            combined.push(inputPages[i]);
        }
    }

    result = encoder.encode(combined);
    console.log(result);
    document.getElementById("output").value = result;
}