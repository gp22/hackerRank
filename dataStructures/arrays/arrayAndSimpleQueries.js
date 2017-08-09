function processData(input) {
    //Enter your code here

    const splitInput = input.split('\n');
    const array = splitInput[1].split(' ');

    for (let i = 2; i < splitInput.length; i++) {
        const query = splitInput[i].split(' ');

        console.log(query);
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
