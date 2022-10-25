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
  let Rarr=[];
  let res=[]
  for(const item of s){
    if(obj[item]){
      Rarr.push(obj[item])
    }else{
      let popVal=Rarr.pop()
      if(popVal!=item){
        return false;
      }
    }
  }
  return Rarr.length==0?true:false;
};


// 测试用例
let test = '([)]'

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');