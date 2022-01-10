var wuxun1995 = {
  chunk: function (array, size) {
    let newarray = []
    for (var i = 0; i < array.length; i++) {
      let array1 = []
      for (var j = 0; j < size; j++) {
        array1.push(array[i])
      }
      newarray.push(array1)
    }
    return newarray
}
