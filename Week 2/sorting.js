



// BUBBLE SORT

function bubble(arr){
    for(let i =arr.length-1;i>0;i--){
    for (let j =0 ; j<i ; j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
}
return arr
}

let arr= [6,5,43,2,8,4,1]
console.log(bubble(arr))

