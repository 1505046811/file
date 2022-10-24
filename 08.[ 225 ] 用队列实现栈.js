/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 */

// * 思路：
var MyStack = function() {
  this.queue=[];
  this._queue=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
  return this.queue
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  while(this.queue.length>1){
    this._queue.push(this.queue.shift())
  }
  let shiftValue=this.queue.shift()
  while(this._queue.length){
    this.queue.push(this._queue.shift())
  }
  return shiftValue;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.slice(-1)[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue.length;
};


// 测试用例
let test = ''
var obj = new MyStack()
console.log(obj.push(1))
console.log(obj.push(2))
console.log(obj.push(3))
console.log(obj.top())
console.log(obj.pop())
console.log(obj.empty())
console.time('执行用时');
console.timeEnd('执行用时');