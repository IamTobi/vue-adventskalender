<template>
  <div>
    <div class="door-container">
      <h2>{{number}}</h2>
    </div>
    <div class="door-content-container">

    </div>
  </div>
</template>

<<script>
export default {
  props: ['number']
}
</script>

<style lang="scss">
.door-container {
  border-style: solid;
  border-color: coral;
  text-align: center;
}
</style>


