/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare
 */

// * 思路：

var backspaceCompare = function(s, t) {
  let sArr=[],tArr=[];
  for(const sitem of s){  
    if(sitem=='#'){
      sArr.pop();
    }else{
      sArr.push(sitem);
    }
  }
  for(const titem of t){
    if(titem=='#'){
      tArr.pop()
    }else{
      tArr.push(titem)
    }
  }
  return sArr.join("")==tArr.join("");
};

// 测试用例
var s="a#b",t='b'
console.time('执行用时');
console.log(backspaceCompare(s,t));
console.timeEnd('执行用时');