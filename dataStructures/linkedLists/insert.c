/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as 
  struct Node
  {
     int data;
     struct Node *next;
  }
*/
Node* InsertNth(Node *head, int data, int position)
{
  // Complete this method only
  // Do not write main function. 
  struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
  newNode->data = data;
  newNode->next = NULL;

  // If we're inserting the node at the beginning.
  if (position == 0)
  {
    newNode->next = head;
    return newNode;
  }

  // Otherwise we need to go to the (position-1)th node. To do this we need to start at the head.
  struct Node* tempNode = head;
  for (int i = 0; i < position-1; i++)
  {
    tempNode = tempNode->next;
  }

  newNode->next = tempNode->next;
  tempNode->next = newNode;
  return head;
}
