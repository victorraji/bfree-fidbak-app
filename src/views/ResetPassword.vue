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
         <button @click="reset()">Reset Password</button>
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
    reset () {
      console.log('password sent')
      // this.$router.push('/')
    }
  }
}
</script>

<style scooped>
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
  justify-content: start;
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
  /* position: absolute; */
  /* top: 0;
  right: 0; */
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
</style>
