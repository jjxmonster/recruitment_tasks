// // 1. Please write a function that reverses a string
const reverseString = string => {
   const stringLettersArray = string.split('');
   const reverse = stringLettersArray.reverse();
   console.log(reverse.join(''));
};
reverseString('recruitment');
// // 2. Please write a function that filters out numbers from a list
const list = [1, 'string', 5, 22, 'sth'];
const getNumbers = list => {
   const filteredList = list.filter(item => typeof item === 'number');
   console.log(filteredList);
};
getNumbers(list);

// 3. Please write a function that shows the usage of closures
const todoList = () => {
   let todos = []; // todo list is private, global scope can't manipulate that
   return {
      addTodo(todo) {
         return todos.push(todo);
      },
   };
};
const todoApp = todoList();
todoApp.addTodo('learn ts'); // here we manipulate todos variable in global scope

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// [[[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]];
const flattenArray = arr => {
   const flattenedArr = [];
   arr.forEach(item => {
      if (Array.isArray(item)) {
         flattenedArr.push(...flattenArray(item));
      } else {
         flattenedArr.push(item);
      }
   });
   return flattenedArr;
};
flattenArray([[[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]]);

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]
const findCommmonElements = (arr1, arr2) => {
   const commmonElements = [];
   arr1.forEach(item => {
      if (arr2.includes(item)) {
         commmonElements.push(item);
      }
   });
   console.log(commmonElements);
};
findCommmonElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']);

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']
const findDifferentElements = (arr1, arr2) => {
   const differentElements = [];
   arr1.forEach(item => {
      if (!arr2.includes(item)) {
         differentElements.push(item);
      }
   });
   arr2.forEach(item => {
      if (!arr1.includes(item)) {
         differentElements.push(item);
      }
   });

   console.log(differentElements);
};
findDifferentElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']);
// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]
const objectToListOfKey = obj => {
   return Object.entries(obj);
};
objectToListOfKey({ color: 'Blue', id: '22', size: 'xl' });

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }
const lisfToObject = list => {
   console.log(Object.fromEntries(list));
};
lisfToObject([
   ['color', 'blue'],
   ['id', '22'],
   ['size', 'xl'],
]);
// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]
const tuplesOfArrays = (arr1, arr2) => {
   const tuples = [];
   arr1.forEach((item, index) => {
      tuples.push([item, arr2[index]]);
   });
};
tuplesOfArrays([1, 2, 3], [4, 5, 6, 7]);
// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false
const isObjectsEqual = (obj1, obj2) => {
   const object1 = Object.entries(obj1);
   let isEqual = true;
   if (!isEqual) return;
   object1.forEach(item => {
      if (item[1] === obj2[item[0]]) {
         isEqual = true;
      } else isEqual = false;
   });
   console.log(isEqual);
};
isObjectsEqual({ a: 'b', c: 'd' }, { c: 'd', a: 'b' });
// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }
const removeProperties = (propertyToRemove, object) => {
   const objectToArray = Object.entries(object);
   objectAfterRemove = objectToArray.filter(property => {
      if (propertyToRemove.includes(property[0])) {
         return false;
      } else return true;
   });
   console.log(Object.fromEntries(objectAfterRemove));
};
removeProperties(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' });
