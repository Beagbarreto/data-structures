var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

    list.addToTail = function(value) {
      //create the Node with value and new
      var currentNode = new Node(value);
      //if head is equal null, point to newNOde
      if(list.head === null){
          list.head = currentNode;
      }
      //otherwise, if head is not equal to null,
      if(list.head !== null){
          //cesar has to link to alex (newNode)
          list.head.next = currentNode;
      }
      list.tail = currentNode;
    };    //
    //it will stop once it finds specific value inside a key(in the list)
    // else list.head.next

  list.removeHead = function() {
    var storage = list.head;
    list.head = list.head.next;

    return storage.value;
  };

  list.contains = function(target) {
  var currentHead = list.head;
    while(currentHead){
      if(target === currentHead.value){
        return true;
      }else{
        currentHead = currentHead.next;
      }
     }
     return false;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
