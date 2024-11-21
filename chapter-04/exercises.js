////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {

if (start === end){
  return [];
}
var array = [];

if (step > 0){
  for (let i = start; i <= end; i += step){
    array.push(i);
  }
} else if (step < 0){
  for (let i = start; i >= end; i += step){
    array.push(i)
  }
}
return array
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
total = 0;
for (let i = 0; i < array.length; i++){
  total += array[i];
}
return total
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
element = []
for (let i = array.length - 1; i >= 0; i--){
 element.push(array[i])
}
return element
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
 for(let i = 0; i < Math.floor(array.length / 2); i++){
  let element = array[i];
  array[i] = array[array.length - 1 -i];
  array[array.length - 1 - i] = element;
}
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;

  for (let i = array.length - 1; i >= 0; i--){
      rest = { value: array[i], rest: rest};
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {

  if (list.rest === null){
    array.push(list.value);
    return array;
  }
array.push(list.value);

return listToArray(list.rest, array);

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
return {value, rest: list}
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
 if (!list) {
  return undefined;
 } else if (n == 0){
  return list.value;
 } else {
  return nth(list.rest, n - 1);
 }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};