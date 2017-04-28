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
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    
    let hashTable = [];

    // Define the hash function
    function hash(string) {
        let hash = 0;
        for (c of string) {
            hash += c.charCodeAt();
        }
        return hash - 65;
    };

    // Hash every word in magazine and add it to hashTable
    for (word of magazine) {
        hashTable[hash(word)] = word;
    }
    
    // Define a function to test if every word is in hashTable
    function replica(arr) {
        for (word of arr) {
            if (hashTable[hash(word)] != word) {
                return false;
            }
        }
        return true;
    }
    
    replica(ransom) ? console.log('Yes') : console.log('No');
}
