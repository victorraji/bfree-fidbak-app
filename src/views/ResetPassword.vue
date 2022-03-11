<template>
  <div class="body">
    <div class="head-logo">
      <img src="../assets/bfreeLogo.svg" alt="logo" />
      <img src="../assets/FIDBAK.svg" alt="logo1" />
    </div>
    <div class="body-content">
      <div class="reset-form">
        <h3>Enter your valid email address to generate new password</h3>
        <form>
          <input type="email" required placeholder="Email Address" />
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
    }
  }
}
</script>

<style scooped>
*{
  margin: 0;
  padding: 0;
}
body {
  position: relative;
}
.head-logo {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: start;
}
.body-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

reset-form {
  text-align: center;
  padding: 150px;
  width: 50%;
}
.reset-form h3 {
  text-align: start;
  font-size: 17px;
  font-weight: bold;
  font-family: poppins;
} */
.body-image {
  /* position: absolute; */
  /* top: 0;
  right: 0; */
  width: 500px;
  height: 450%;
  max-height: 100px;
  /* min-width: ; */
}
button {
  font-size: 15px;
  font-weight: bold;
  width: 275px;
  height: auto;
  margin: 10px;
  padding: 10px;
  border-radius: 7px;
  background-color: #00a4db;
  color: #fff;
  text-align: center;
  outline: none;
}
input {
  width: 300px;
  height: 30px;
  border-radius: 5px;
}
</style>
