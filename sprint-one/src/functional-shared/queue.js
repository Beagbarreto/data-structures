var Queue = function() {
  var storage = {};
  storage.first = 0;
  storage.last = 0;
_.extend(storage, queueMethods);
return storage;
  };

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.first] = value;
    this.first++;
  },

  dequeue : function() {
    var out = this.storage[this.last];
    delete this.storage[this.last];
    this.last++;
    return out;
  },

  size : function() {
    if(this.first - this.last > 0){
      return this.first - this.last;
    }else{
      return 0;
    }
  }
};
