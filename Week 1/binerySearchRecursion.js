

function binarySearch(arr,target){
    return Search(arr,target,0,arr.length-1)
}

function Search(arr,target,left,right) {
    if(left>right){return -1}

    let middel =Math.floor ((left+right)/2)

    if(target === arr[middel]){return middel}

    if(target<arr[middel]){
        return Search(arr,target,left,middel-1)
    }else{
        return Search(arr,target,middel+1,right)
    }
}



// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;
const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log('Element not found in the array');
}

const secondTargetValue = 11;
const secondResult = binarySearch(sortedArray, secondTargetValue);

if (secondResult !== -1) {
    console.log(`Element found at index ${secondResult}`);
} else {
    console.log('Element not found in the array');
}
