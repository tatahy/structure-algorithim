//数组的冒泡排序算法
let length = 10
let arr = setArr(length);
let temp = null;
let isChanged = false;

function setArr(len) {
  let arr = [];

  for (var i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }

  return arr;
};

console.log("待排序数组");
console.log(arr);

//外层循环，对数组进行排序需要的次数
for (var i = 0; i < arr.length - 1; i++) {
  isChanged = false;
  //内层循环，当前进行比较的次数
  for (var j = 0; j < arr.length - i - 1; j++) {
    //前一位与后一位比较，如果前一位比后一位大，两者交换位置
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      isChanged = true;
    }
  }
  //没有发生交换，就说明已经排序好了，循环停止。
  if (!isChanged) {
    break;
  }
}

console.log("数组冒泡排序后");
console.log(arr);