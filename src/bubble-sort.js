//Bubble Sort，数组的冒泡排序算法

function setArr(len = 0) {
  let arr = [];

  for (var i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }

  return arr;
};

//普通循环实现
function bubbleSort(arr) {
  let temp = null;
  let isChanged = false;

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

  return arr;
};

//递归（Recursive）实现
function bubbleSortRec(arr, start, end) {
  let temp = null;

  //递归结束条件
  if (start == end) {
    return arr;
  }

  if (start != end) {
    for (var i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  //递归排序
  bubbleSortRec(arr, start, end - 1);

};


let arr = setArr(5);

console.log("待排序数组");
console.log(arr);

// bubbleSort(arr);
bubbleSortRec(arr,0,arr.length);

console.log("数组[bubble-sort]后");
console.log(arr);

