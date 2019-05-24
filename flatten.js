//deep level flatten using recursion with reduce and concat and its modify the main array
Array.prototype.flatten = function (){
  var f = this.reduce((a, v) => Array.isArray(v) ? a.concat(v.flatten()) : a.concat(v), []);
  this.splice(0, f.length, ...f);
  return this;
} 

//deep level flatten using stack with no recursion and return flatten array 
function flatten (input) {
  var line = Array.from(input), res = [];
  while (line.length) { 
    const next = line.pop();
    if (Array.isArray(next)) { 
      line.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse(); 
}

function testFlatten(){
var arr1 = [[1,2,[3]],4];
var arr2 = [1,[2,[3,[4],5,],6],7];

arr1.flatten();
var outputArray_2 = flatten(arr2);

console.log(arr1 );
console.log( '- Flattened array 1:', arr1);
console.log(arr2);
console.log(  'Flattened array 2:', outputArray_2);
}

testFlatten();
