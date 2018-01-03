function processData(input) {
  let lastAnswer = 0;
  const splitInput = input.split('\n');
  const N = Number(splitInput[0].split(' ')[0]);
  const Q = Number(splitInput[0].split(' ')[1]);
  const seqList = splitInput.slice(1);
  const seq = Array(N).fill(0).map(i => i = []);
  const findSeq = (x) => (x^lastAnswer) % N;

  seqList.forEach((query, i) => {
    const type = Number(query.split(' ')[0]);
    const x = Number(query.split(' ')[1]);
    const y = Number(query.split(' ')[2]);

    if (type === 1) {
      console.log(`query ${i}: append ${y} to seq ${findSeq(x)}`);
      seq[findSeq(x)].push(y);
      console.log('s0: ', seq[0]);
      console.log('s1: ', seq[1]);
    } else {
      const tempSeq = seq[findSeq(x)];
      const value = y % seq.length;
      lastAnswer = tempSeq[value];
      console.log(lastAnswer);
    }
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
