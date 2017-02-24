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
    var s = readLine();
    // uppercase letters: >= 65 and <= 90
    let count;
    if (s.length > 0) {
        count = 1;
            s.split('').forEach(letter => {
                if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
                    count++;
                }
            });
        } else {
            count = 0;
        }
    console.log(count);
}
