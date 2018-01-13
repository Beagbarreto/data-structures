var Queue = function() {
  var someInstance = {};

  var storage = {};
  var start = 1;
  var end = 1;

  someInstance.enqueue = function(value) {
    storage[start] = value;
    start++;
  };

  someInstance.dequeue = function() {
    var out = storage[end];
    delete storage[end];
    end++;
    return out;
  };

  someInstance.size = function() {
    if(start - end > 0){
      return start - end;
    }else{
      return 0;
    }
  };
  return someInstance;
};
