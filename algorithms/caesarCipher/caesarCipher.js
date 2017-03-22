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
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());

    function caesar(string, shift) {
        let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lower = 'abcdefghijklmnopqrstuvwxyz';
        let returnString = '';

        if (shift > 26) {
          shift %= 26;
        }

        for (c of string) {
            if (upper.indexOf(c) > -1) {
                // if c is an uppercase letter, encode it
                let base = c.codePointAt();
                let charCode = base + shift;
                if (charCode > 90) {
                    charCode -= 26;
                }
                let newChar = String.fromCharCode(charCode);
                returnString += newChar;
            } else if (lower.indexOf(c) > -1) {
                // if c is a lowercase letter, encode it
                let base = c.codePointAt();
                let charCode = base + shift;
                if (charCode > 122) {
                    charCode -= 26;
                }
                let newChar = String.fromCharCode(charCode);
                returnString += newChar;
            } else {
                // otherwise add it to the return string unchanged
                returnString += c;
            }
        }

        return returnString;
    }
    
    console.log(caesar(s, k));
}
