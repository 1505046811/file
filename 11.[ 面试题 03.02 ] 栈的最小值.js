/**
 * * 题目名称：栈的最小值
 * * 题目地址：https://leetcode-cn.com/problems/min-stack-lcci
 */

// * 思路：
var MinStack = function() {
  this.queue=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.queue.push(x);
  return this.queue;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let popValue=this.queue.pop();
  return popValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  let topValue=this.queue[this.queue.length-1]
  return topValue
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min=this.queue[0]
  for(let i=0;i<this.queue.length;i++){
    if(min>this.queue[i]){
      min=this.queue[i]
    }
  }
  return min;
};


// 测试用例
var minStack=new MinStack()
console.log(minStack.push(2))
console.log(minStack.push(0))
console.log(minStack.push(3))
console.log(minStack.push(0))
console.log(minStack.getMin())
console.log(minStack.pop())
console.log(minStack.getMin())
console.log(minStack.pop())
console.log(minStack.getMin())
console.log(minStack.pop())
console.log(minStack.getMin())
console.time('执行用时');
console.timeEnd('执行用时');