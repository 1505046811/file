/**
 * * 题目名称：扁平化嵌套列表迭代器
 * * 题目地址：https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 */
 var longestSubarray = function(nums, limit) {
  
  let lgLength=0;
  // for(let i=0;i<nums.length;i++){
  //   let arr=[];
  //   let lastAbs=0
  //   for(let j=i;j<nums.length;j++){
  //     arr.push(nums[j]);
  //     let arrLg=arr.length;
  //     let currentAbs=Math.abs(nums[i]-nums[j]);
  //     if(currentAbs>=lastAbs){
  //       lastAbs=currentAbs;
  //       if(lastAbs<=4 && arrLg>=lgLength){
  //         lgLength=arrLg;
  //       }
  //     }
  //   }
  // }
  return lgLength;
}
var nums=[4,2,2,2,4,4,2,2],limit=0;
console.log(longestSubarray(nums,limit))
console.time('执行用时');
console.timeEnd('执行用时');