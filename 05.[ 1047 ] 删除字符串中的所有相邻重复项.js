/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */

// * 思路：

/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
  let stk=[]
  for (const ch of s) {
    if (stk.length && stk[stk.length - 1] === ch) {
        stk.pop();
    } else {
        stk.push(ch);
    }
  }
  return stk.join('');
};

// 测试用例
let test = 'abbaca'

console.time('执行用时');
console.log(removeDuplicates(test));
console.timeEnd('执行用时');