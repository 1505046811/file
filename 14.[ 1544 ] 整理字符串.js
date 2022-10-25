/**
 * * 题目名称：整理字符串
 * * 题目地址：https://leetcode-cn.com/problems/make-the-string-great
 */

// * 思路：
var makeGood = function(s) {
    let sArr=[];
    for(const item of s){
      if(item==item.toLowerCase() && sArr[sArr.length-1]!=item.toUpperCase()){
        //小写
        sArr.push(item)
      }else if(item==item.toUpperCase() && sArr[sArr.length-1]!=item.toLowerCase()){
        //大写
        sArr.push(item)
      }else{
        sArr.pop()
      }
    }
    
    return sArr.join("")
};

// 测试用例
let test = 's'

console.time('执行用时');
console.log(makeGood(test));
console.timeEnd('执行用时');