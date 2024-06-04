// Ayden Deng

Array.prototype.customizedFilter = function (callback) {
  const filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    if (result) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};

Array.prototype.customizedMap = function (callback) {
  const mappedArr = [];
  for (let i = 0; i < this.length; i++) {
    mappedArr.push(callback(this[i], i, this));
  }
  return mappedArr;
};

Array.prototype.customizedIncludes = function (searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }
  return false;
};

Array.prototype.customizedIndexOf = function (searchElement, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

Array.prototype.customizedReduce = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

Array.prototype.customizedSlice = function (start, end = this.length) {
  const slicedArr = [];
  if (start < 0) {
    start += this.length;
  }
  if (end < 0) {
    end += this.length;
  }
  for (let i = start; i < end; i++) {
    slicedArr.push(this[i]);
  }
  return slicedArr;
};

Array.prototype.customizedSplice = function (start, deleteCount, ...items) {
  const removedElements = [];
  if (start < 0) {
    start += this.length;
  }
  if (start > this.length) {
    start = this.length;
  }
  deleteCount = Math.min(deleteCount, this.length - start);
  const left = this.customizedSlice(0, start);
  const right = this.customizedSlice(start + deleteCount);
  removedElements.push(...this.customizedSlice(start, start + deleteCount));
  this.length = 0;
  this.push(...left, ...items, ...right);
  return removedElements;
};


/* ---------- 
    TEST CASES
   ---------- */


const arr = [1, 2, 3, 4, 5];
console.log('* TEST ARRAY:', arr); 

const filteredArr = arr.customizedFilter((num) => num % 2 === 0);
console.log('filter (num % 2 === 0):', filteredArr); // [2, 4]

const mappedArr = arr.customizedMap((num) => num * 2);
console.log('map (num * 2):', mappedArr); // [2, 4, 6, 8, 10]

const isIncluded = arr.customizedIncludes(2);
console.log('includes (2):', isIncluded); // true

const index = arr.customizedIndexOf(3);
console.log('indexOf (3):', index); // 2

const reducedValue = arr.customizedReduce((acc, num) => acc + num);
console.log('reduce (accumulator):', reducedValue); // 15

const slicedArr = arr.customizedSlice(2, 4);
console.log('slice (2, 4):', slicedArr); // [3, 4]

const splicedArr = arr.customizedSplice(1, 2, 6, 7);
console.log('splice (1, 2, 6, 7):', splicedArr); // [2, 3]
console.log('spliced arr:', arr); // [1, 6, 7, 4, 5]
