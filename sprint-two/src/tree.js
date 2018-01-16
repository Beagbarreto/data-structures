var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
 _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if(this.value === target){
    return true;
  }
   for (var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target)){
      return true;
   }
  }
  return false;
};
