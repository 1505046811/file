/**
 * * 题目名称：扁平化嵌套列表迭代器
 * * 题目地址：https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
 */
 var longestSubarray = function(nums, limit) {
  // let lgLength=0;
  // for(let i=0;i<nums.length;i++){
  //   let arr=[];
  //   let minValue=nums[i];
  //   let maxValue=nums[i];
  //   for(let j=i;j<nums.length;j++){
  //     arr.push(nums[j]);
  //     console.log(arr)
  //     maxValue=maxValue>nums[j]?maxValue:nums[j];
  //     minValue=(minValue>=nums[j])?nums[j]:minValue;
  //     let arrLg=arr.length;
  //     let currentAbs=Math.abs(maxValue-minValue);
  //     if(currentAbs<=limit && arrLg>=lgLength){
  //       lgLength=arrLg;
  //     }
  //   }
  // }
  // return lgLength;
  const queMax = [];
    const queMin = [];
    const n = nums.length;
    let left = 0, right = 0;
    let ret = 0;
    while (right < n) {
      debugger;
        while (queMax.length && queMax[queMax.length - 1] < nums[right]) {
            queMax.pop();
        }
        while (queMin.length && queMin[queMin.length - 1] > nums[right]) {
            queMin.pop();
        }
        queMax.push(nums[right]);
        queMin.push(nums[right]);
        while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) {
            if (nums[left] === queMin[0]) {
                queMin.shift();
            }
            if (nums[left] === queMax[0]) {
                queMax.shift();
            }
            left++;
        }
        ret = Math.max(ret, right - left + 1);
        right++;
    }
    return ret;
}
var nums=[8,2,4,7],limit=4;
console.log(longestSubarray(nums,limit))
console.time('执行用时');
console.timeEnd('执行用时');