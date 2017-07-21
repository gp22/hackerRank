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
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    calculateHourglass = function(array, i) {
        hourglassSum = 
        arr[i][i] + arr[i][i + 1] + arr[i][i + 2] +
        arr[i + 1][i + 1] +
        arr[i + 2][i] + arr[i + 2][i + 1] + arr[i + 2][i + 2];
        
        return hourglassSum;
    }
    
    console.log(calculateHourglass(arr, 0));
}
