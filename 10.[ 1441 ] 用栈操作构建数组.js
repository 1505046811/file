/**
 * * 题目名称：用栈操作构建数组
 * * 题目地址：https://leetcode-cn.com/problems/build-an-array-with-stack-operations
 */

// * 思路：

var buildArray = function(target, n) {
  let targetValue=[]
  for(let i=1;i<=n && i<=target[target.length-1];i++){
    if(target.indexOf(i)<0){
      targetValue.push('Push')
      targetValue.push('Pop')
    }else{
      targetValue.push('Push');
    }
  }
  return targetValue
};

// 测试用例
let test = [1,2],n=4

console.time('执行用时');
console.log(buildArray(test,n));
console.timeEnd('执行用时');