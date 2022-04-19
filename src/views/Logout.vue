<template>
  <div class="container">
      <TextRap/>
      <div class="image"><img src="../assets/newlanding.svg" alt="A lady sitting behind a laptop"></div>
  </div>
</template>

<script>
import TextRap from '@/components/reusables/TextRap.vue'

export default {
  name: 'Logout',

  components: {
    TextRap
  }
}
</script>

<style scoped>
.container{
    display: flex;
    overflow: hidden;
    height: 100vh;
}
</style>
