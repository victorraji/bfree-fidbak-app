<template>
  <div class="container">
    <TextRap/>
    <img src="../assets/man.png" alt="A man seating by a Laptop" class="image">
  </div>
</template>

<script>
import TextRap from '@/components/reusables/TextRap.vue'

export default {
  name: 'LogoutR',

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
.image{
    width: 100%;
}
</style>
