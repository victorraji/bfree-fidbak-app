<template>
  <div class="home">
  <Header/>
<Navbar/>

  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
import Header from '@/components/navbar/Header.vue'

export default {
  name: 'HomeView',

  components: {
    Navbar,
    Header
  }

}

</script>

<style scoped>

</style>
