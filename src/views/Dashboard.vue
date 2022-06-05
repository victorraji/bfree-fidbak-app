<template>
    <div class="container">
        <div class="header-wrapper">
          <Header/>
        </div>
        <TheNav/>
        <div class="details">
          <UserDetails/>
        </div>
        <div class="feedback">
          <Feedbacks/>
          <Notifications/>
        </div>
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
  height: 1024px;
  overflow: hidden;
  background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
}
.details{
  margin: 0 0 0 -77px;
}
.feedback{
  margin: 0 0 0 -40px;
}
@media screen and (max-width: 1500px) {
  .container{
    height: 1024px;
    }
  }
  @media screen and (max-width: 1300) {
    .container{
      height: 1300px;
    }
  }
    @media screen and (max-width: 900px) {
      .container{
      height: 1800px;
    }
  }
    @media screen and (max-width: 450px) {
        .container{
      height: 2800px;
    }
  }
.header-wrapper{
  padding: 8% 0 0 0;
}
</style>
