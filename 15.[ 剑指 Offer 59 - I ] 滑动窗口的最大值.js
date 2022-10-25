/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 */

// * 思路：
var maxSlidingWindow = function(nums, k) {
  let numsLength=nums.length;
  let value=[];
  for(let i=0;i<numsLength-k+1;i++){
    let maxVal=nums[i];
    for(let j=i;j<k+i;j++){
      if(maxVal<nums[j]){
        maxVal=nums[j]
      }
    }
    value.push(maxVal)
  }
  return value
};
// 测试用例
let test = [1],k=1

console.time('执行用时');
console.log(maxSlidingWindow(test,k));
console.timeEnd('执行用时');