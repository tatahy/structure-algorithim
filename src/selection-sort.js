//Selection sort，数组的选择排序算法

function setArr(len) {
  let arr = [];

  for (var i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }

  return arr;
};

function selectionSort(arr) {
  let temp = null;
  let idx = 0;

  //外层循环，对数组进行排序需要的次数
  for (var i = 0; i < arr.length - 1; i++) {
    idx = 0;
    //内层循环，找到数组中最大数的下标
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[idx]) {
        idx = j;
      }
    }
    //交换位置
    temp = arr[idx];
    arr[idx] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;

  }

  return arr;

};

let arr = setArr(10);

console.log("待排序数组");
console.log(arr);

selectionSort(arr);

console.log("数组[selection-sort]后");
console.log(arr);