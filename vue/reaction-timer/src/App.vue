<template>
  <h1>{{ title }}</h1>
  <span @click="handleEvent">
    <button @click="toggleBlock" :disabled="showBlock">Activate timer</button>
  </span>
    <Block v-if="showBlock" @close="toggleBlock" @click="handleEvent">
      <h3>CLICK ME</h3>
    </Block>
  <div v-if="showResults">
    <Results>
      <h1>{{ result }}</h1>
      <p>Your time is {{ diff }}</p>
    </Results>
  </div>
  <br>
</template>

<script>

import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      start: 0,
      finish: 0,
      diff: 0,
      result: "",
      showBlock: false,
      showResults: false,
      title: 'Joshs Reaction timer'
    }
  },
  methods: {
    toggleBlock() {
      this.showBlock = !this.showBlock
    },
    computeResults(start, finish) {
      this.diff = finish - start
      console.log(this.diff)
      if(this.diff > 800) {
        this.result = 'Snail Slow'
      }
      else if(this.diff < 800 && this.diff > 300) {
        this.result = 'Your okay I guess'
      }
      else {
        this.result = 'Your greeeaaatttt'
      }
    },
    toggleResults() {
      
    },
    handleEvent(e) {
      if(this.showBlock === true) {
        console.log('start: ', e.timeStamp)
        this.start = e.timeStamp
        this.showResults = false
      } else {
        console.log('finish: ', e.timeStamp)
        this.finish = e.timeStamp
        this.showResults = true
        this.computeResults(this.start, this.finish)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
