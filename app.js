let arr = [8,6,70,80,9]
let max;
for(let i=0; i<arr.length; i++){
for(let j=0; j<arr.length; j++){
    if(arr[i] > arr[j]){
        max=arr[i]
        break;
    }
}

}
alert(max)
