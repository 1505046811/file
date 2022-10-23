/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 */

// * 思路：
var RecentCounter = function() {
  this.count=0;//返回值
  this.requestValue=[]
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  this.requestValue.push(t);
  let range=[t-3000,t];
  let newValue=[];
  this.requestValue.map(item=>{
    if(item>=range[0] && item<=range[1]){
      newValue.push(item)
    }
  })
  this.count=newValue.length;
  console.log(this.count)
  return this.count;
};


// 测试用例
let test = 2
var rc=new RecentCounter();
rc.ping(1);
rc.ping(2);
rc.ping(3001);
rc.ping(3002);
console.time('执行用时');
// console.log(xxx(test));
console.timeEnd('执行用时');