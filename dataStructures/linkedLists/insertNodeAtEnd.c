/*
  Insert Node at the end of a linked list 
  head pointer input could be NULL as well for empty list
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* Insert(Node *head,int data)
{
  // Complete this method

  // Create a new node.
  struct Node* temp1 = (struct Node*)malloc(sizeof(struct Node));
  temp1->data = data;
  temp1->next = NULL;
  // If we're inserting this node at the beginning of the list.
  if (head == NULL)
  {
    head = temp1;
    return head;
  }
    
  /*
  For all other cases we will need to go to the last node.
  To do this we need to start at the head.
  */
  struct Node* temp2 = head;
  /*
  This while loop will iterate through each node in the list, and then sets
  temp2 to point to the last next in the list.
  */
  while (temp2->next != NULL)
  {
    temp2 = temp2->next;
  }
  /*
  The next step is to set the link field of the last node (temp2) as
  the link of the newly created node (temp1).
  */
  temp2->next = temp1;
    
  return head;
}