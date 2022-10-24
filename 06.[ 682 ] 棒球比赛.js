/**
 * * 题目名称：棒球比赛
 * * 题目地址：https://leetcode-cn.com/problems/baseball-game
 */

// * 思路：

var calPoints = function(operations) {
  var arr=[]
  let operaList=operations;
  for(let i=0;i<operaList.length;i++){
    if(operaList[i]=='C' && arr.length>=1){
      arr.pop()
    }else if(operaList[i]=='D' && arr.length>=1){
      arr.push(2*arr[arr.length-1])
    }else if(operaList[i]=='+'  && arr.length>=2){
      arr.push(arr[arr.length-1]+arr[arr.length-2])
    }else{
      arr.push(Number(operaList[i]))
    }
  }
  var sum=0;
  arr.map(item=>{
    sum+=item;
  });
  return sum;
};

// 测试用例
let test = ["1"]

console.time('执行用时');
console.log(calPoints(test));
console.timeEnd('执行用时');