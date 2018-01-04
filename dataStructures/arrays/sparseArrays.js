function processData(input) {
  const splitInput = input.split('\n');
  const N = Number(splitInput[0]);
  const strings = splitInput.slice(1,N+1);
  const queries = splitInput.slice(N+2);

  queries.forEach(query => {
    let count = 0;
    strings.forEach(string => {
      count = query.includes(string)? count + 1 : count;
    });
    console.log(count);
  });
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
