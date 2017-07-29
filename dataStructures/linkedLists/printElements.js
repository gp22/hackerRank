/* Node is defined as
var Node = function(data) {
  this.data = data;
  this.next = null;
}
*/
// This is a "method-only" submission.
// You only need to complete this method.

function print(head) {
  if (!head) {
    return;
  }

  let temp = head;

  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}
