process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    
    let firstHalf = a.splice(k, n-1);
    let secondHalf = a.splice(0, k);
    let rotatedArray = firstHalf.concat(secondHalf);
    let answer = '';
    
    for (let i = 0; i < n;  i++) {
        answer += rotatedArray[i] + ' ';
    }
    
    console.log(answer);
}
