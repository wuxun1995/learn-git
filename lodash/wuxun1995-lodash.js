<script>
  var wuxun1995 = function () {
    function chunk(array, size) {
      var array = []
      var newarray = []
      for (var i = 1; i <= array.length; i++) {
        newarray.push(array[i - 1])
        if (i % size == 0) {
          array.push(newarray)
          newarray.push = []
        }
      }
      if (array.length) {
        array.push(newarray)
      }
      return array
  }

}
</script>
