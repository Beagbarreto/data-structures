var Stack = function() {
    var storage = {};

      _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {
    push : function(value) {
    var keys = Object.keys(this.storage);
    storage[keys.length] = value;
    return storage;
  },
    pop : function() {
    var keys = Object.keys(this.storage);
      if(keys.length !== 0){
      var lastKey = [keys.length-1];
      var lastKeyValue = this.storage[lastKey];
        delete this.storage[lastKey];
        return lastKeyValue;
      }
    },

    size : function() {
      var keys = Object.keys(this.storage);
        return keys.length;
    }
  };
