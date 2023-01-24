// Make nested array plane
'use strict';
const planedArray = (arr) => {
  const res = [];
  for (const value of arr) {
    const values = Array.isArray(value) ? planedArray(value) : [value];
    res.push(...values);
  }
  return res;
};
require('../Tests/plane.js')(planedArray);
