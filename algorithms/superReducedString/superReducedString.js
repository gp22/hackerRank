function processData(input) {
    //Enter your code here
 
    input = input.split('');
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i+1]) {
            input.splice(i, 2);
            i = 0;
        }
    }
    input = input.join('')
    if (input.length === 2 && input[0] === input[1]) {
        console.log('Empty String')
    } else {
        input === '' ? console.log('Empty String') : console.log(input);
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
