//quick sort，数组的快速排序算法
//支点左边的数比支点小，支点右边的数比支点大，递归完成这个过程

function setArr(len) {
  let arr = [];

  for (var i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }

  return arr;
};

function quickSort(arr,start,end) {
  let l=start;
  let r=end;
  // let hidx=Math.ceil((start+end)/2);
  let hIdx=Math.trunc((start+end)/2);
  //支点
  let pivot=arr[hIdx];

  //左右两端进行扫描，只要两端还没有交替，就一直扫描
  while(l<=r){

    //在支点左边寻找直到比支点大的数
    while (pivot>arr[l]){
      l++;
    }
     

    //在支点右边寻找直到比支点小的数
    while (pivot<arr[r]){
      r--;
    }
      

    //此时已分别找到了在右边比支点小的数，在左边比支点大的数，它们进行交换
    if(l<=r){
      let temp=arr[l];
      arr[l]=arr[r];
      arr[r]=temp;
      l++;
      r--;

    }
  }
  
  //上面的while保证了第一趟排序后支点左边比支点小，支点右边比支点大

  //“左边”递归进行排序，直到左边剩下一个数
  if(start<r){
    quickSort(arr,start,r);
  }
  //“右边”递归进行排序，直到右边边剩下一个数
  if(l<end){
    quickSort(arr,l,end);
  }

  return arr;

};

let arr = setArr(5);

console.log("待排序数组");
console.log(arr);

quickSort(arr,0,arr.length-1);

console.log("数组经[quick-sort]后");
console.log(arr);
