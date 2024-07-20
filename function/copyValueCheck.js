function copyValueCheck(arr){
    let arrLength=arr.length
    for(let i=0;i<arrLength;i++){
        for(let j=i+1;j<arrLength-i;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                arrLength=arr.length
            }
        }
    }
    return arr
}

export default copyValueCheck