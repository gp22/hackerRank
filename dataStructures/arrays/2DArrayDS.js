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
    calculateHourglassSum = (a, x, y) => {
        hourglassSum = a[y][x] + a[y][x + 1] + a[y][x + 2] +
                       a[y + 1][x + 1] +
                       a[y + 2][x] + a[y + 2][x + 1] + a[y + 2][x + 2];
        return hourglassSum;
    }

    calculateLargestSum = (a) => {
        let largestSum;

        for (let i = 0; i < a[0].length - 2; i++) {
            for (let j = 0; j < a.length - 2; j++) {
                let sum = calculateHourglassSum(a, j, i);

                if (typeof largestSum === 'undefined') {
                    largestSum = sum;
                }
                if (sum > largestSum) {
                    largestSum = sum;
                }
            }
        }
        return largestSum;
    }

    console.log(calculateLargestSum(arr));
}
