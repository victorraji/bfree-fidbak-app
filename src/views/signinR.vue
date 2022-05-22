<template>
<div class="main">
<div class="part1">
<header>
<div class="logoImage">
<img src="../assets/logo.jpg" alt="logo" class="image1">
</div>
</header>
<div class="mainform">
<div class="header1"><h1>Welcome Back!</h1></div>
<div class="header2"><h2>Enter your valid email address and password <br>to sign in</h2></div>
<form @submit.prevent="submitForm">
<div class="inputBox">
<label id="icon" for="email" >
<input type="email" placeholder="Email Address" v-model="eMail" required>
<div class="icon">
<font-awesome-icon :icon="['fas', 'envelope']"/>
</div>
</label>
</div>
<div class="inputBox">
<label for="password">
<input type="password" placeholder="Password" required>
<div class="icon">
<font-awesome-icon :icon="['fas', 'lock']"/>
</div>
</label>
<div class="inputBoxbutton">
<router-link to="WrongDetailR"><button v-if="login"><span>Log In</span></button></router-link>
</div>
</div>
</form>
</div>

<div class="lowerClass">
<div class="lowerClass1">
<div class="forgotPassword">
<p class="word">Forgot password?</p>
<div class="reset">
<router-link style="text-decoration: none;" to="/resetPasswordR" class="resetLink">Reset password</router-link>
</div>
</div>
</div>
<div class="lowerClass2">
<p class="signUp">
  <strong>Don't have an account?</strong>
  <router-link to="/signupR" class="signUpLink">Sign Up</router-link>
</p>
</div>
</div>
</div>
<!-- image goes here -->
<reuseables/>
</div>

</template>

<script>
import reuseables from '@/components/responder/reuseables.vue'
export default {
  name: 'signinR',
  components: {
    reuseables
  },
  data () {
    return {
      login: true
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

.mainform {
display: grid;
grid-template-rows: 1fr 1fr;
height: 30%;
margin: 15px;
padding: 10px;

}

.header1 {
font-family: 'Poppins';
font-style: normal;
font-size: 20px;
line-height: 45px;
color: #00A4DB;
}
.header2 {
font-family: 'Poppins';
font-style: normal;
font-size: 13px;
line-height: 26px;
color: #000000;
display: grid;
margin-top: 7px;
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
}
.icon {
width: 19px;
height: 17px;
top: 31.5px;
left: 24px;
color: rgba(0, 0, 0, 0.43);
transform: translateY(-140%);
padding-left: 50px;
}
.inputBox button {
width: 419px;
height: 65px;
left: 0px;
top: calc(50%-65px/2+129.5px);
background: #00A4DB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
border: 4px solid #00A4DB;
color:  #FFFFFF;
font-weight: bold;
}
button span{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: inline-block;
  cursor: pointer;
  transition: 0.5s;
}
button span:after{
  content: '\2192';
  transition: 0.5s;
  opacity: 0;
  margin-left: 20px;
}
button span:hover span{
  padding-right: 25px;
}
button span:hover:after{
  opacity: 1;
}
.lowerClass1 {
display: flex;
flex-direction: row;
padding: 40px 20px 30px 40px;
margin: 100px 10px 40px 120px;

}
.lowerClass2 {
display: flex;
justify-content: center;
margin: -70px 0 0 65px;
}
.forgotPassword{
  display: flex;
}
.resetLink {
  color:#00A4DB;
  margin: 50px 20px -10px 10px;
}
.reset{
  margin: 17px 0 0 0;
}
.signUpLink {
  color:#00A4DB;
  margin: 15px;
}
</style>
