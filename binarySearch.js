function binarySearch(arr,item){
  let leftPart=-1
  let rightPart=arr.length
  while(rightPart  - leftPart>1){
    midle=Math.floor((rightPart  - leftPart)/2);
    if(item == arr[midle]){
      return midle; //position 
    }
    else{
      if(item>arr[midle]){
        leftPart=midle;
      }
      else{
        rightPart=midle;
      }
    }
  }
  return -1
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11],6))