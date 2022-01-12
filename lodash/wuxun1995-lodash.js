var wuxun1995 = {
  chunk: function (array, size) { // 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。
    let newarray = []             // 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
    let n = 0
    let array1 = []
    for (var i = 0; i < array.length; i++) {
      array1.push(array[i])
      n++
      if (n == size) {
        n = 0
        newarray.push(array1)
        array1 = []
      }
    }
    if (n !== 0) {
      newarray.push(array1)
    }
    return newarray
  },

  compact: function (array) { // 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
    let newArray = []
    for (i = 0; i < array.length; i++) {
      if (array[i] == false || array[i] == null || array[i] == 0 || array[i] == "" || array[i] == undefined || Number.isNaN(array[i])) {
        newArray.push()
      } else {
        newArray.push(array[i])
      }
    }
    return newArray
  },

  difference: function (array, [values]) {
    let result = []
    let values = [values]
    for (i = 0; i < array.length; i++) {
      condition = false
      for (j = 0; j < values.length; j++) {
        for (k = 0; k < values[j].length; k++) {
          if (array[i] == values[j][k]) {
            condition = true
          }
        }
      }
      if (!condition) {
        result.push(array[i])
      }
    }
    return result
  },

  differenceBy: function (array, [values], [iteratee = _.identity]) {
    arr = [iteratee = _.identity](array)
    val = [iteratee = _.identity]([values])
    for (i = 0; i < array.length; i++) {
      result = []
      for (j = 0; j < [values].length; j++) {
        if (arr[i] !== val[j]) {
          result.push(array[i])
        }
      }
    }
    return result
  },

  drop: function (array, n = 1) { // 创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
    let arr = []
    if (n >= array.length) {
      return arr
    }
    for (let i = n; i < array.length; i++) {
      arr.push(array[i])
    }
    return arr
  },
  dropRight: function (array, n = 1) {  // 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
    let res = []
    if (n > array.length) {
      return res
    } else if (n < 1) {
      return array
    } else {
      for (let i = 0; i < array.length - n; i++) {
        if (array.length - n == 0) {
          return res.push()
        } else {
          res.push(array[i])
        }
      }
      return res
    }
  },

  fill: function (array, value, start = 0, end = array.length) { // 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束(但不包含end位置)。
    for (let i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  flatten: function (array) { // 减少一级array嵌套深度。
    let res = []
    for (i = 0; i < array.length; i++) {
      if (array[i].length > 1) {
        for (j = 0; j < array[i].length; j++) {
          res.push(array[i][j])
        }
      } else {
        res.push(array[i])
      }
    }
    return res
  },

  flattenDeep: function (array) { //递归展平array。
    let res = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(item)) {
        item = flattenDeep(item)
        for (let j = 0; j < item.length; j++) {
          res.push(item[j])
        }
      } else {
        res.push(item)
      }
    }
    return res
  },
  flattenDepth: function (array, n = 1) {//递归压扁array高达depth倍。
    let res = []
    if (n == 0) {
      return [...array]
    }
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (Array.isArray(item)) {
        res.push(...flattenDepth(item, n - 1))
      } else {
        res.push(item)
      }
    }
    return res
  },









}
