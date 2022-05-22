<template>
<div class="main1">
<!-- <header class="header1"> -->
<HeaderR/>
<TheNavR/>
<!-- </header> -->
<div class="header2">
<UserDetailR/>
</div>
<FeedbackR/>
</div>
</template>

<script>
import HeaderR from '@/components/responder/HeaderR.vue'
import TheNavR from '@/components/responder/TheNavR.vue'
import UserDetailR from '@/components/responder/UserDetailR.vue'
import FeedbackR from '@/components/responder/FeedbackR.vue'
export default {
  name: 'notR',

  components: {
    HeaderR,
    TheNavR,
    UserDetailR,
    FeedbackR
  },
  data () {
    return {
      showModal: true,
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium',
      alertWords: 'Your Account has been Created Succesfully'
    }
  }
  // methods: {
  //   alertWord () {
  //     const randomNumber = Math.random()
  //     if (randomNumber < 0.5) {
  //       return 'Your response has been sent successfully'
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "/scss/style.scss";
.header2{
  width: 100%;
  padding: 7% 0 0 0;
}
</style>
