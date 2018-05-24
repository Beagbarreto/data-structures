var BinarySearchTree = function(value) {
    var bsTree = Object.create(BinarySearchTree.prototype);
    bsTree.left = null;
    bsTree.right = null;
    bsTree.value = value;

    return bsTree;
  };

  BinarySearchTree.prototype.insert = function(value) {
    var childTree = BinarySearchTree(value);

    var add = function(child, node){
      if(child.value < node.value){
        if(node.left === null){
          node.left = child;
        } else {
          return add(child, node.left);
        }
      } else {
        if(node.right === null){
          node.right = child;
        } else{
          return add(child, node.right);
        }
      };
    };

    add(childTree, this);
  };

  BinarySearchTree.prototype.contains = function(target){
    if(this.value === target){
      return true;
    } else if (target < this.value){
      if(this.left === null){
        return false;
      } else {
        return this.left.contains(target);
      }
    } else {
      if (this.right === null){
        return false;
      } else {
        return this.right.contains(target);
      }
    };
  };

  BinarySearchTree.prototype.depthFirstLog = function(cb){
    cb(this.value);
    if(this.left){
      this.left.depthFirstLog(cb);
    }
    if(this.right){
      this.right.depthFirstLog(cb);
    }
  };

  var node = {};
  node.value = value;
  node.children = [];


/*
 * Complexity: What is the time complexity of the above functions?
 */
