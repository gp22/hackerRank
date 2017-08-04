
/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
  // Create a new node
  const temp1 = new Node(data);

  // If we're inserting this node at the beginning of the list
  if (!head) {
    head = temp1;
    return head;
  }

  /*
  For all other cases we will need to go to the last node.
  To do this we need to start at the head.
  */
  let temp2 = head;

  /*
  This while loop will iterate through each node in the list, and then sets
  temp2 to point to the last next in the list.
  */
  while (temp2.next) {
    temp2 = temp2.next;
  }

  /*
  The next step is to set the link field of the last node (temp2) as
  the link of the newly created node (temp1).
  */
  temp2.next = temp1;

  return head;
}
