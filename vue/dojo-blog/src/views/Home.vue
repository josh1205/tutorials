<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts"/>






    <!-- <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button> -->
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['Josh', 'Noah', 'Ryan', 'Sean', 'Justin', 'Gio', 'Trenton'])

    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watch effect function ran', search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    const posts = ref([
      { title: 'welcome to the blog', body: 'Lorem ipsum', id: 1},
      { title: 'TOP 5 CSS TIPS', body: 'Lorem ipsum', id: 2}

    ])


    return { names, search, matchingNames, handleClick, posts }
  }
}
</script>
