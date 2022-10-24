/**
 * * 题目名称：文件夹操作日志搜集器
 * * 题目地址：https://leetcode-cn.com/problems/crawler-log-folder
 */

// * 思路：

var minOperations = function(logs) {
  let logNum=[];
  for(let lg of logs){
    switch(lg){
      case './':
        break;
      case '../':
        if(logNum.length>0){
          logNum.pop()
        };
        break;
      default:
        logNum.push(lg);
        break;
    }
  }
  return logNum.length;
};

// 测试用例
let test = ["d1/","../","../","../"]

console.time('执行用时');
console.log(minOperations(test));
console.timeEnd('执行用时');