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

    // Define the string hash function.
    function hash(string) {
        let hash = 0;
        for (c of string) {
            hash += c.charCodeAt();
        }
        return hash - 65;
    };

    // Build hash table out of array of strings arr.
    function buildHashTable(arr) {
        let hashTable = [];
        for (word of arr) {
            hashedWord = hash(word);
            if (hashTable[hashedWord] === undefined) {
                hashTable[hashedWord] = [word];
            } else {
                hashTable[hashedWord].push(word);
            }
        }
        return hashTable;
    }

    /*
    Test if all of the words in ransom exist in magazine in the correct
    amounts.
    */
    function replica(arr) {
        for (word of arr) {
            hashedWord = hash(word);
            if (magazineTable[hashedWord] === undefined || 
                magazineTable[hashedWord].length < ransomTable[hashedWord].length) {
                return false;
            }
        }
        return true;
    }

    const magazineTable = buildHashTable(magazine);
    const ransomTable = buildHashTable(ransom);
    
    replica(ransom) ? console.log('Yes') : console.log('No');
}
