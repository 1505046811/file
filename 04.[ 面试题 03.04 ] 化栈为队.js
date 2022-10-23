/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

// * 思路：
var MyQueue = function() {
  this.pushArr=[];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.pushArr.push(x);
  return this.pushArr;
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  let popItem=this.pushArr.shift();
  return popItem;
};

MyQueue.prototype.peek = function() {
  let lg=this.pushArr.length;
  if(lg>0){
    return this.pushArr[0];
  }else{
    return -1;
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  let lg=this.pushArr.length;
  if(lg>0){
    return false;
  }else{
    return true;
  }
};
// 测试用例
let test = ''
var queue=new MyQueue()
queue.push(1)
queue.push(2)
queue.peek()
queue.pop()
queue.empty()
console.time('执行用时');
// console.log(xxx(test));
console.timeEnd('执行用时');