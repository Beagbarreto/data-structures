var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  someInstance.push = function(value) {
  var keys = Object.keys(storage);
  storage[keys.length] = value;
  return storage;
  };

  someInstance.pop = function() {
  var keys = Object.keys(storage);
    if(keys.length !== 0){
    var lastKey = [keys.length-1];
    var lastKeyValue = storage[lastKey];
      delete storage[lastKey];
      return lastKeyValue;
    }
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
      return keys.length;
  };

  return someInstance;
};
