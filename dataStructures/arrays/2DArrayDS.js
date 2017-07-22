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
    let largestSum;
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    calculateHourglassSum = function(x, y) {
        hourglassSum =
        arr[y][x] + arr[y][x + 1] + arr[y][x + 2] +
        arr[y + 1][x + 1] +
        arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];

        return hourglassSum;
    }

    for (let i = 0; i < arr[0].length - 2; i++) {
        for (let j = 0; j < arr.length - 2; j++) {
            let sum = calculateHourglassSum(j, i);

            if (typeof largestSum === 'undefined') {
                largestSum = sum;
            } else {
                if (sum > largestSum) {
                    largestSum = sum;
                }
            }
        }
    }

    console.log(largestSum);
}
