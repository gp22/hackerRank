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
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);

    let min = 0;
    let max = 0;
    
    for (let i = 0; i < a_temp.length; i++) {
        
        let sum = 0;
        
        for (let j = 0; j < a_temp.length; j++ ) {
            if (j != i) {
                sum += Number(a_temp[j]);
            }
            if (i == 0) {
                min = sum;
                max = sum;
            }
        }
        if (sum < min) {
            min = sum;
        }
        if (sum > max) {
            max = sum;
        }
    }
    console.log(`${min} ${max}`);
}