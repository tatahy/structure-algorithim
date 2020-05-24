//merge sort，数组的快速排序算法
//支点左边的数比支点小，支点右边的数比支点大，递归完成这个过程

function setArr(len) {
  let arr = [];

  for (var i = 0; i < len; i++) {
    arr[i] = Math.ceil(Math.random() * 100);
  }

  return arr;
};

// 归并排序
// @param arr
// @param start   数组第一个元素下标
// @param end     数组最后一个元素下标

function mergeSort(arr,start,end) {
  //中间值
  let hIdx=Math.trunc((start+end)/2);
 
  //递归终止条件
  if(start==end){
    
    return ;
  }

  //中间值左边数不断进行拆分
  mergeSort(arr,start,hIdx);

  //中间值右边边数不断进行拆分
  mergeSort(arr,hIdx+1,end);

  
//合并
return merge(arr,start,hIdx+1,end);

};

//合并数组
// @param first   指针，数组第一个元素的下标
// @param middle  指针，数组中的分隔元素的下标
// @param last    指针，数组最后一个元素的下标

function merge(arr,first,middle,last){
  //定义左数组
  let leftArr=Array(middle-first);
  //定义右数组
  let rightArr=Array(last-middle);
  let m=0,n=0;
  //arr数组的第一个元素下标
  let k=first;

 

  //向上述2个数组填充数据
  for (let i=first;i<middle;i++){
    leftArr[i-first]=arr[i];
  }
  for (let i=middle;i<=last;i++){
    rightArr[i-middle]=arr[i];
  }

  //比较左、右数组中数值大小，那个值小，就将该值放到大数组上
  while(m<leftArr.length && n<rightArr.length){
    //小的值放入大数组中，移动指针，继续比较下一个
    if(leftArr[m]<rightArr[n]){
      arr[k]=leftArr[m];

      m++;
      k++;
    }else{
      arr[k]=rightArr[n];
      k++;
      n++;
    }
  }
  
  //若左数组没比完，右数组已经到头了，就将左数组剩下的值都抄到大数组中
  while(m<leftArr.length){
    arr[k]=leftArr[m];
    k++;
    m++;
  }

  //若右数组没比完，左数组已经到头了，就将右数组剩下的值都抄到大数组中
  while(n<rightArr.length){
    arr[k]=rightArr[n];
    k++;
    n++;
  }
  // console.log('leftArr: '+leftArr);
  // console.log('rightArr: '+rightArr);
  // console.log('arr: '+arr);

  return arr;
}

let arr = setArr(2);

console.log("待排序数组");
console.log(arr);

mergeSort(arr,0,arr.length-1);

console.log("数组经[merge-sort]后");
console.log(arr);
