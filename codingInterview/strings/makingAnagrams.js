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
    var a = readLine();
    var b = readLine();
    
    let table = new Array(26);
    let count = 0;
    
    // Initialize the table array to 0s to keep track
    // of the frequencies of characters in a and b.
    for (let i = 0; i < 26; i++) {
        table[i] = 0;
    }
    
    // Add the occurence of each character in a to
    // the table array.
    a.split('').forEach((c) => {
        table[c.charCodeAt() - 'a'.charCodeAt()] += 1;
    });
    
    // Subtract the occurence of each character in b
    // from the table array.
    b.split('').forEach((c) => {
        table[c.charCodeAt() - 'a'.charCodeAt()] -= 1;
    });
    
    // Add the absolute value of each element in table
    // to count.
    table.forEach((c) => {
        count += Math.abs(c)
    });
    
    console.log(count);
}
