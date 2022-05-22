<template>
  <div class="container">
    <TextRapR/>
    <img src="../assets/man.png" alt="A man seating by a Laptop" class="image">
  </div>
</template>

<script>
import TextRapR from '@/components/responder/TextRapR.vue'

export default {
  name: 'LogoutR',

  components: {
    TextRapR
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
