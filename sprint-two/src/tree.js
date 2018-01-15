var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
 _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {

treeMethods.addChild = function(value) {
  var child = Tree(value);
    child.parent = something;
    if(this.children === []){
      this.children = [child];
    } else {
      this.children.push(child);
    }
  };

treeMethods.contains = function(target) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
/*var Tree = function(value) {


 newTree.addChild = function(value) {
   var newChild = Tree(value);
   newTree.children.push(newChild);
 };
 newTree.contains = function(target) {
   if (newTree.value === target) {
     return true;
   }
   if (newTree.children.length) {
     for (var i = 0; i < newTree.children.length; i++) {
       if (newTree.children[i].contains(target)) {
         return true;
       }
     }
   }
   return false;
 };
 return newTree;
};*/
