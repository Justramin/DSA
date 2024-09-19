// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
//     buildHeap(array) {
//       this.heap = array;
//       for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//         this.heapifyDown(i);
//       }
//     }
//     insert(value) {
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length - 1);
//     }
//     remove() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
//       return root;
//     }
//     heapifyUp(index) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       while (index > 0 && this.heap[index] < this.heap[parentIndex]) {
//         [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
//         index = parentIndex;
//         parentIndex = Math.floor((index - 1) / 2);
//       }
//     }
//     heapifyDown(index) {
//       let smallest = index;
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
//       if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
//         smallest = leftChild;
//       }
//       if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
//         smallest = rightChild;
//       }
//       if (smallest !== index) {
//         [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//         this.heapifyDown(smallest);
//       }
//     }
    
//     getMin() {
//       return this.heap.length > 0 ? this.heap[0] : null;
//     }
//   }
  
// //   Example usage:
//   const minHeap = new MinHeap();
//   minHeap.buildHeap([3, 9, 2, 1, 4, 5]);
//   console.log(minHeap.heap); 
//   minHeap.insert(0);
//   console.log(minHeap.heap);  
//   console.log("Removed:", minHeap.remove()); 
//   console.log(minHeap.heap);









// class MinHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(array) {
//       this.heap = array;
//       for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//         this.heapifyDown(i);
//       }
//     }
  
//     heapifyDown(index) {
//       let smallest = index;
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
  
//       if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
//         smallest = leftChild;
//       }
  
//       if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
//         smallest = rightChild;
//       }
  
//       if (smallest !== index) {
//         [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
//         this.heapifyDown(smallest);
//       }
//     }
  
//     remove() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();
  
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
  
//       return root;
//     }
//   }
  
//   class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     buildHeap(array) {
//       this.heap = array;
//       for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
//         this.heapifyDown(i);
//       }
//     }
  
//     heapifyDown(index) {
//       let largest = index;
//       const leftChild = 2 * index + 1;
//       const rightChild = 2 * index + 2;
  
//       if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
//         largest = leftChild;
//       }
  
//       if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
//         largest = rightChild;
//       }
  
//       if (largest !== index) {
//         [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
//         this.heapifyDown(largest);
//       }
//     }
  
//     remove() {
//       if (this.heap.length === 0) return null;
//       if (this.heap.length === 1) return this.heap.pop();
  
//       const root = this.heap[0];
//       this.heap[0] = this.heap.pop();
//       this.heapifyDown(0);
  
//       return root;
//     }
//   }
  







//   function heapSort(array, isMinHeap = true) {
//     const heap = isMinHeap ? new MinHeap() : new MaxHeap();
//     heap.buildHeap(array.slice());  // Slice to avoid modifying the original array
    
//     const sortedArray = [];
//     while (heap.heap.length > 0) {
//       sortedArray.push(heap.remove());
//     }
    
//     return sortedArray;
//   }
  


  
//   // Example usage:
//   const unsortedArray = [3, 9, 2, 1, 4, 5];
//   console.log("Heap Sort (Min Heap):", heapSort(unsortedArray));  // Output: [1, 2, 3, 4, 5, 9]
//   console.log("Heap Sort (Max Heap):", heapSort(unsortedArray, false));  // Output: [9, 5, 4, 3, 2, 1]
  

















class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
    }
  
    remove() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return root;
    }
  
    heapifyUp(index) {
      let parentIndex = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      }
    }
  
    heapifyDown(index) {
      let largest = index;
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
  
      if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
        largest = leftChild;
      }
      if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
        largest = rightChild;
      }
      if (largest !== index) {
        [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
        this.heapifyDown(largest);
      }
    }
  
    getMax() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  }
  
  // Example usage:
  const maxHeap = new MaxHeap();
  maxHeap.buildHeap([3, 9, 2, 1, 4, 5]);
  console.log(maxHeap.heap);  // Output: [9, 4, 5, 1, 3, 2]
  maxHeap.insert(10);
  console.log(maxHeap.heap);  // Output: [10, 9, 5, 4, 3, 2, 1]
  console.log("Removed:", maxHeap.remove());  // Output: Removed: 10
  console.log(maxHeap.heap);  // Output: [9, 4, 5, 1, 3, 2]













