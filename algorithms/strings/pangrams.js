process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
});
process.stdin.on("end", function () {

    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const map = {};

    for (c of input.split(' ').join('').toLowerCase()) {
        if (map.hasOwnProperty(c)) {
            map[c] += 1;
        } else {
            map[c] = 1;
        }
    }

    for (c of alpha) {
        if (!map.hasOwnProperty(c)) {
            return console.log('not pangram');
        }
    }

    return console.log('pangram');
});
