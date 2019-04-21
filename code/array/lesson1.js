/*
 * @Description: 电话号码组合
 * @version: 0.1
 * @Author: GanEhank
 * @LastEditors: GanEhank
 * @Date: 2019-03-24 14:09:34
 * @LastEditTime: 2019-04-22 00:56:11
 */

export default (str) => {
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'] // 建立电话号码键盘映射
  let num = str.split('') // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  let code = [] // 保存键盘映射后的字母内容，如 23=>['abc','def']
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr) => {
    let tmp = [] // 临时变量用来保存前两个组合的结果
    // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}
