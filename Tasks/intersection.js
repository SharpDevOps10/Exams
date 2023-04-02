// Find an intersection of two dictionaries
'use strict';
const intersection = (object1, object2) => {
  const object1Keys = Object.keys(object1);
  const result = {};
  for (const key of object1Keys) {
    const value = object1[key];
    if (object2[key] === value) {
      result[key] = value;
    }
  }
  return result;
};
require('../Tests/intersection.js')(intersection);
