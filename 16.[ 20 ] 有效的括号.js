/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
 */

// * 思路：
var isValid = function(s) {
  let obj={
    "(":')',
    "[":']',
    "{":'}'
  }
  let Larr=[],Rarr=[];
  let res=[]
  for(const item of s){
    if(obj[item]){
      Larr.push(item)
    }else{
      Rarr.push(item)
    }
  }
  console.log(Larr,Rarr)
  for(let i=0;i<Larr.length;i++){
    if(obj[Larr[i]]==Rarr[i]){
      continue;
    }else{
      return false;
    }
  }
  return true;
};


// 测试用例
let test = '(([]))'

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');