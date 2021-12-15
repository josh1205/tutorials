<template>
  <div class="home">
    home
    <p>My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PracticeHome',
  setup() {

    
    //const p = ref(null)

    // not reactive values
    const name = ref('mario')  //value can change but ref will not
    const age = ref(30)

    const handleClick = () => {
      // console.log(p, p.value)
      // p.value.classList.add('test')
      // p.value.textContent = 'hello there'
      name.value = 'luigi'
      age.value = 45
    }

    return { name,age, handleClick }
  },
  data() {
    return {
      //these are reactive values
      score: 5

    }
  }
}
</script>
