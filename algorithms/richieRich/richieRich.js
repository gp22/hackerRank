// process.stdin.resume();
// process.stdin.setEncoding('ascii');
//
// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;
//
// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });
//
// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });
//
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }
//
// /////////////// ignore above this line ////////////////////
//
// function main() {
//     var n_temp = readLine().split(' ');
//     var n = parseInt(n_temp[0]);
//     var k = parseInt(n_temp[1]);
//     var number = readLine();

    function richieRich(length, availableChanges, number) {
      let numberAsArray = number.split('');
      let numberAsArrayMap = Array(length);
      let changesRequired = 0;
      let extraChanges = 0;

      // add the appropriate values to numberAsArrayMap
      // 1 if one of the numbers is 9
      // 2 if neither of the numbers is 9
      // -1 if both of the numbers are 9
      // 0 if both numbers are the same and not 9
      for (let i = 0; i < Math.floor(length / 2); i++) {
        // if they're not equal
        if (numberAsArray[i] !== numberAsArray[length-(i+1)]) {
          changesRequired++;
          let first = numberAsArray[i];
          let second = numberAsArray[length-(i+1)];
          // if at least one of them is 9, change the corresponding value in
          // numberAsArrayMap to 1
          if (first === '9' || second === '9') {
            numberAsArrayMap[i] = 1;
            numberAsArrayMap[length-(i+1)] = 1;
          } else {
            // otherwise change the corresponding values in
            // numberAsArrayMap to 2
            numberAsArrayMap[i] = 2;
            numberAsArrayMap[length-(i+1)] = 2;
          }
        } else if (numberAsArray[i] === '9') {
          // the numbers are both the same, if they're both 9, change the
          // corresponding values in numberAsArrayMap to -1
          numberAsArrayMap[i] = -1;
          numberAsArrayMap[length-(i+1)] = -1;
        } else {
          // otherwise, set them both to 0
          numberAsArrayMap[i] = 0;
          numberAsArrayMap[length-(i+1)] = 0;
        }
      }

      // figure out if the changes are possible, and how many extra
      // changes we have, if any
      if (changesRequired > availableChanges) {
        return -1;
      } else {
        extraChanges = availableChanges - changesRequired;
      }

      // now go and make the changes
      for (let i = 0; i < Math.floor(length / 2); i++) {
        let status = numberAsArrayMap[i];
        // change both numbers to 9 if neither is 9 and there are
        // changes changes available
        if ((status === 2 || status === 0) && extraChanges > 0) {
          numberAsArray[i] = '9';
          numberAsArray[length-(i+1)] = '9';
          extraChanges--;
        } else if (status === 2) {
          let first = numberAsArray[i];
          let second = numberAsArray[length-(i+1)];
          if (first > second) {
            numberAsArray[i] = first;
            numberAsArray[length-(i+1)] = first;
          } else {
            numberAsArray[i] = second;
            numberAsArray[length-(i+1)] = second;
          }
        }
      }

      // console.log(changesRequired);
      console.log(extraChanges);
      console.log(numberAsArrayMap);
      // console.log(availableChanges);
      return numberAsArray.join('');

    }
    // richieRich(n, k, number);
    console.log(richieRich(7, 5, '0721282'));

// }
