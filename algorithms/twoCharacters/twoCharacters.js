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
    var len = parseInt(readLine());
    var s = readLine();

    let maxLen = 0;
    let charMap = '';

    function isAlternate(str) {
        if (str.length < 2) {
            return false;
        }
        for (let i = 1; i < str.length; i++) {
            if (i === 1) {
                if (str[i] === str[i-1]) {
                    return false;
                }
            } else if (str[i] === str[i-1] || str[i] !== str[i-2]) {
                return false;
            }
        }
        return true;
    }

    // create character map of s
    for (c of s) {
        if (charMap.indexOf(c) === -1) {
            charMap += c;
        }
    }

    // create all possible character pairs
    for (let j = 0; j < charMap.length - 1; j++) {
        for (let i = j+1; i < charMap.length; i++) {
            const thisPair = charMap[j] + charMap[i];
            // remove every other character besides thisPair
            const testString = s.split('').filter(c => {
                return (c === thisPair[0] || c === thisPair[1]);
            }).join('');
            if (isAlternate(testString) && testString.length > maxLen) {
                maxLen = testString.length;
            }
        }
    }
    console.log(maxLen);
}
