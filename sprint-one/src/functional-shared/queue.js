var Queue = function() {
  var storage = {
  first : 0,
  last : 0,
  newStorage : {}
};
  _.extend(storage, queueMethods);

return storage;

  };

var queueMethods = {
  
  enqueue : function(value) {
    this.newStorage[this.first] = value;
    this.first++;
  },

  dequeue : function() {
    var out = this.newStorage[this.last];
    delete this.newStorage[this.last];
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
