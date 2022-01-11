var wuxun1995 = {
  chunk: function (array, size) {
    let newarray = []
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

  compact: function (array) {
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

  drop: function (array, n = 1) {
    let arr = []
    if (n >= array.length) {
      return arr
    }
    for (let i = n; i < array.length; i++) {
      arr.push(array[i])
    }
    return arr
  }















}
