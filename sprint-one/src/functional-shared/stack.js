var Stack = function() {
    var storage = {};
      _.extend(storage, queueMethods);

    // Implement the methods below
    push : function(value) {
    var keys = Object.keys(storage);
    storage[keys.length] = value;
    return storage;
  },

    pop : function() {
    var keys = Object.keys(storage);
      if(keys.length !== 0){
      var lastKey = [keys.length-1];
      var lastKeyValue = storage[lastKey];
        delete storage[lastKey];
        return lastKeyValue;
      }
    },

    size : function() {
      var keys = Object.keys(storage);
        return keys.length;
    }
  };

};

var stackMethods = {};
