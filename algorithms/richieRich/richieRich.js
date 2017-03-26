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
      let numberAsArrayMap = Array(length+1).join('0').split('');

      // go through the string comparing numbers from both ends
      // and add the appropriate values to numberAsArrayMap
      // 1 if one of the numbers is 9
      // 2 if neither of the numbers is 9
      // -1 if both of the numbers are 9
      // 0 if both numbers are the same and not 9
      for (let i = 0; i < Math.floor(length / 2); i++) {
        // if they're not equal
        if (numberAsArray[i] !== numberAsArray[length-(i+1)]) {
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
        } else {
          // the numbers are both the same, if they're both 9, change the
          // corresponding values in numberAsArrayMap to -1
          if (numberAsArray[i] === '9') {
            numberAsArrayMap[i] = -1;
            numberAsArrayMap[length-(i+1)] = -1;
          }
        }
      }



      //   if (numberAsArray[i] !== numberAsArray[length-(i+1)]) {
      //     let first = numberAsArray[i];
      //     let second = numberAsArray[length-(i+1)];
      //     // if neither number is 9, add them to valuesThatAreNotNine
      //     if (first !== '9' && second !== '9') {
      //       valuesThatAreNotNine[i] = 1;
      //       valuesThatAreNotNine[length-(i+1)] = 1;
      //     } else {
      //       valuesThatAreNotNine[i] = 2;
      //       valuesThatAreNotNine[length-(i+1)] = 2;
      //     }
      //     if (availableChanges > 0) {
      //     // change the smaller to equal the larger
      //     (first > second) ?
      //       numberAsArray[length-(i+1)] = first : numberAsArray[i] = second;
      //       availableChanges--;
      //     } else {
      //       return -1;
      //     }
      //   }
      // }

      // if (availableChanges > 0) {
      //   // if there are changes left over, go back and change the pairs to 9
      //   for (let i = 0; i < Math.floor(length / 2); i++) {
      //     if (valuesThatAreNotNine[i] === 1) {
      //       numberAsArray[i] = '9';
      //       numberAsArray[length-(i+1)] = '9';
      //       availableChanges--;
      //     } else if (valuesThatAreNotNine[i] === 2 && availableChanges >= 2) {
      //       numberAsArray[i] = '9';
      //       numberAsArray[length-(i+1)] = '9';
      //     }
      //   }
      // }

      console.log(numberAsArrayMap);
      // console.log(availableChanges);
      // return numberAsArray.join('');

    }
    // richieRich(n, k, number);
    console.log(richieRich(7, 5, '0921292'));

// }
