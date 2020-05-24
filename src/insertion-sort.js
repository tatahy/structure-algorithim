//insertion sort，数组的插入排序算法
//将⼀个数据插⼊到已经排好序的有序数据中
//在未知道数组元素的情况下，我们只能把数组的第⼀个元素作为已经排好序的有序数组

function setArr(len) {
  let arr = [];

  for (var i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }

  return arr;
};

function insertionSort(arr) {
  let temp=null;
  let j=0;

  //数组的第⼀个元素arr[0]作为有序数组，从数组的第2个元素开始进行比较
  for(var i=1;i<arr.length;i++){
    //待比较的数
    temp=arr[i];
    //待比较数的前一个元素的下标
    j=i-1;

    //待比较的数temp<待比较数的前一个元素arr[j]
    while(j>=0 && temp<arr[j]){
      //数组中，待比较数下标对应的元素值=待比较数的前一个元素值arr[j]
      arr[j+1]=arr[j];
      
      //退出循环条件
      j--;

    }
    
    //退出循环说明待比较的数找到了正确的放置位置（数组中下标为j+1的元素）
    arr[j+1]=temp;

  }

  return arr;

};

let arr = setArr(5);

console.log("待排序数组");
console.log(arr);

insertionSort(arr);

console.log("数组经[insertion-sort]后");
console.log(arr);
