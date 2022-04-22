<template>
  <div class="body">
    <div class="head-logo">
      <img src="../assets/bfreeLogo.svg" alt="logo" />
      <img src="../assets/FIDBAK.svg" alt="logo1" />
    </div>
    <div class="body-content">
      <div class="reset-form">
        <h3 class="frm-content">Enter your valid email address to generate new password</h3>
        <form>
          <input type="email" required placeholder="Email Address" font-awesome-icon :icon="['fas' ,'email']" />
        </form>
        <button class="button" @click="showModal = true">Reset Password</button>
                <transition name="fade" appear>
                    <div class="modal-overlay" v-if="showModel" @click="showModal = false"></div>
                </transition>
                <transition name="slide" appear>
                    <div class="modal" v-if="showModal">
                        <div class="confirmation"><strong>Enter the new password that was just sent to bolade@bfree.limited </strong></div>
                        <form class="choice">
                            <input type="password" placeholder="Email Address" font-awesome-icon :icon="['fas' ,'key']" required/>
                            <button class="no" @click="showModal = false">Log In</button>
                        </form>
                    </div>
                </transition>
            </div>
      <div class="body-image">
        <img src="../assets/landingimage.svg" alt="landing-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword',
  component: {},

  methods: {
    data () {
      return {
        showModal: true
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  width: 100%;
  height: 100%;
}
.head-logo {
  display: flex;
  justify-content: flex-start;
  margin: 20px;
  padding: 15px;
}
.body-content{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 80%;
  width: 90%;
  margin: 15px;
  padding: 10px;
}
.reset-form {
  padding: 20px;
  margin-top: 100px;
}
 .frm-content {
   padding-left:20px;
   margin-left: 30px;
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  font-family: sans-serif;
  line-height: 25px;
}
.body-image {
   width: 200px;
  height: 150px;
   margin-bottom: 70px;
   padding: 25px, 30px;
   height: auto;
}
button {
  font-size: 15px;
  font-weight: bold;
  width: 300px;
  height: auto;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #00a4db;
  color: #fff;
  text-align: center;
  outline: none;
  box-shadow: 6px 6px 322px -79px rgba(0,0,0,0.65);
-webkit-box-shadow: 6px 6px 322px -79px rgba(0,0,0,0.65);
-moz-box-shadow: 6px 6px 322px -79px rgba(0,0,0,0.65);
}
input {
  width: 310px;
  height: 30px;
  border-radius: 4px;
  margin-top: 20px;
}
.modal-overley{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
}
.modal{
  display: grid;
  grid-template-rows: 3fr 1fr;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  height: 30vh;
  max-width: 500px;
  text-align: start;
  padding-left: 30px;
  background-color: #FFFFFF;
  border-radius: 16px;
}
</style>
