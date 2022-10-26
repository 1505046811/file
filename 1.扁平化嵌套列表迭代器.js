/**
 * * 题目名称：扁平化嵌套列表迭代器
 * * 题目地址：https://leetcode.cn/problems/flatten-nested-list-iterator/
 */
 var NestedIterator = function(nestedList) {
  vals = [];
  const dfs = (nestedList) => {
    for (const nest of nestedList) {
        if (nest.isInteger()) {
            vals.push(nest.getInteger());
        } else {
            dfs(nest.getList());
        }
    }
  }
  dfs(nestedList);
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return vals.length > 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  const val = vals[0];
  vals = vals.slice(1);
  return val;
};
var test=[[1,1],2,[1,1]];
var interator=new NestedIterator(test);
console.log(interator.hasNext())
console.log(interator.next())
console.time('执行用时');
console.timeEnd('执行用时');