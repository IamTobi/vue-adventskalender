<template>
  <div id="app" class="app-component">
    <div class="container">
      <h1>Mein Adventskalendar!</h1>
      <div 
        v-for="(day, index) in days" 
        :key="index">
        <div class="row" v-if="index % 4 == 0">
          <div 
            class="col-md-3" 
            v-for="(day, index) in days.slice(index, index + 4)">
            <day :name="day.name">
            </day>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Day from './components/Day';

let days = [
  { name: 'Ich bin Tag 1!' },
  { name: 'Ich bin Tag 2!' },
  { name: 'Ich bin Tag 3!' },
  { name: 'Ich bin Tag 4!' },
  { name: 'Ich bin Tag 5!' },
  { name: 'Ich bin Tag 6!' },
  { name: 'Ich bin Tag 7!' },
  { name: 'Ich bin Tag 8!' },
  { name: 'Ich bin Tag 9!' },
  { name: 'Ich bin Tag 10!' },
  { name: 'Ich bin Tag 11!' },
  { name: 'Ich bin Tag 12!' },
  { name: 'Ich bin Tag 13!' },
  { name: 'Ich bin Tag 14!' },
  { name: 'Ich bin Tag 15!' },
  { name: 'Ich bin Tag 16!' },
  { name: 'Ich bin Tag 17!' },
  { name: 'Ich bin Tag 18!' },
  { name: 'Ich bin Tag 19!' },
  { name: 'Ich bin Tag 20!' },
  { name: 'Ich bin Tag 21!' },
  { name: 'Ich bin Tag 22!' },
  { name: 'Ich bin Tag 23!' },
  { name: 'Ich bin Tag 24!' },
];

export default {
  data() {
    return {
      days: days
    }
  },
  components: {
    Day
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

