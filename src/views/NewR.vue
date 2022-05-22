<template>
<div class="main">
<div class="part1">
<header>
<div class="logoImage">
<img src="../assets/logo.jpg" alt="logo" class="image1">
</div>
</header>
<div class="body-content">
      <div class="reset-form">
        <h3 class="frm-content">Enter your valid email address to generate new password</h3>
        <form>
         <div class="inputBox">
          <label for="email">
          <input type="email" placeholder="Email Address"  required/>
          </label>
         </div>
         <button  class="input" @click="showModal=true">Reset Password</button>
         <transition name="fade" appear>
         <div class="modal-overlay" v-if="showModal" @click="showModal=false"></div>
         </transition>
        </form>
       </div>
    </div>
         <div class="pop" v-if="showModal">
         <p>Enter the new password that was just sent to {{word}}</p>
          <form>
          <div class="inputBox1">
          <label for="email">
          <input type="email" placeholder="Email Address"  required/>
          </label>
         </div>
         <button  class="input1" @click="showModal=false"><router-link style="text-decoration: none; color: #fff;" to="/Dashboard"> Log In</router-link></button>
        </form>
         <transition name="slide" disappear>
               </transition>
            </div>
           </div>
<!-- image goes here -->
<!-- <reuseables/> -->
<div>
    <img src="../assets/landingimage.svg" alt="">
</div>
</div>
</template>
<script>
// import reuseables from '@/components/responder/reuseables.vue'
export default {
  name: 'signinR',
  components: {
    // reuseables
  },
  data () {
    return {
      showModal: true,
      word: 'ifeanyi@bfree.africa'
    }
  }
}
</script>
<style scoped>
.body {
margin: 0;
padding: 0;
background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
}
.main {
display: grid;
grid-template-columns: 1fr 1fr;
}
.logoImage {
margin-right: 200px;
padding: 5px;
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
.input{
width: 419px;
height: 65px;
left: 0px;
top: calc(50%-65px/2+129.5px);
background: #00A4DB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color:  #FFFFFF;
font-weight: bold;
}
.input1 {
width: 419px;
height: 65px;
left: 0px;
top: calc(50%-65px/2+129.5px);
background: #00A4DB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color:  #FFFFFF;
font-weight: bold;
}
.inputBox input {
position: relative;
height: 60px;
width: 419px;
top: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: 2px solid rgba(0, 0, 0, 0.25);
border-radius: 5px;
box-sizing: border-box;
font-family: Poppins;
font-size: 20px;
line-height: 30px;
padding-left: 45px;
margin: 20px;
}
.inputBox1 input {
position: relative;
height: 60px;
width: 419px;
top: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border: 2px solid rgba(0, 0, 0, 0.25);
border-radius: 5px;
box-sizing: border-box;
font-family: Poppins;
font-size: 20px;
line-height: 30px;
padding-left: 45px;
margin: 20px;
}
.envelope {
position: absolute;
width: 14px;
left: 90px;
bottom: 220px;
color: rgba(0, 0, 0, 0.43);
}
.modal-overlay {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.3);
}
/*
.fade-enter-active,
.fade-leave-active {
transition: opacity 2s;
}
.fade-enter,
.fade-leave-to {
opacity: 0;
}*/
.pop {
position: absolute;
width: 616px;
height: 281px;
left: 457px;
top: 410px;
background: #FFFFFF;
border: 0.2px solid #00A4DB;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
}
</style>
