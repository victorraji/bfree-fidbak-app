<template>
    <div class="container">
        <Header/>
        <TheNav/>
        <Feedbacks/>
        <Notifications/>
        <UserDetails/>
    </div>
</template>

<script>
import Header from '@/components/navbar/Header.vue'
import TheNav from '@/components/navbar/TheNav.vue'
import UserDetails from '@/components/reusables/UserDetails.vue'
import Feedbacks from '@/components/reusables/Feedbacks.vue'
import Notifications from '@/components/reusables/Notifications.vue'

export default {
  name: 'HeaderView',

  components: {
    Header,
    TheNav,
    UserDetails,
    Feedbacks,
    Notifications
  }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
}
.container{
    position: relative;
    width: 1440px;
    height: 1024px;
    background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
}
</style>
