"use strict";

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(value) {
    if (this.values.length === 0) {
      this.values.push(value);
      return;
    }
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let array = this.values;
    let parentIndex = Math.floor((index - 1) / 2);
    while (array[parentIndex] < array[index]) {
      [array[parentIndex], array[index]] = [array[index], array[parentIndex]];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0){

      this.values[0] = end;
      this.sinkDown();
      return max;
    }
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > swap)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const MBH = new MaxBinaryHeap();
MBH.insert(41);
MBH.insert(39);
MBH.insert(33);
MBH.insert(18);
MBH.insert(27);
MBH.insert(12);
MBH.insert(55);
console.log(MBH.values , "values");
let max = MBH.extractMax();
console.log(max)
console.log(MBH.values);
