<template>
  <div id="app" class="app-component">
    <div class="container">
      <h1>Mein Adventskalendar!</h1>
      <div v-for="(door, doorIndex) in doors" 
           :key="doorIndex">
        <div class="row" v-if="doorIndex % 4 == 0">
          <div class="col-md-3" 
               v-for="(door, index) in doors.slice(doorIndex, doorIndex + 4)" 
               :key="index">
            <door :number="door.number">
            </door>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Door from './components/Door';

export default {
  data() {
    let doors = [];

    for (let i = 0; i < 24; i++) { 
      let doorContent = {
        number: i + 1,
        title: 'Ich bin Tag ' + (i + 1),
        text: 'Noch ' + (24 - i) + ' Tage bis Heiligabend'
      };
      doors.push(doorContent);
    }

    return {
      doors: doors
    }
  },
  components: {
    Door
  }
}
</script>

<style lang="scss" scoped>
$font-stack: sans-serif;
$primary-color: #900;

.app-component {
  font: 100% $font-stack;
  color: $primary-color;
}
</style>

