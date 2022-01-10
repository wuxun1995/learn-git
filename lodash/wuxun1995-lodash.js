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
  }
}
