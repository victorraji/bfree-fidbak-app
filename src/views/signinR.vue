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
<input required type="email" placeholder="Email Address" v-model="eMail">
<div class="icon">
<font-awesome-icon :icon="['fas', 'envelope']"/>
</div>
</label>
</div>
<div class="inputBox">
<label for="password">
<input required type="password" placeholder="Password">
<div class="icon">
<font-awesome-icon :icon="['fas', 'lock']"/>
</div>
</label>
<div class="inputBoxbutton">
<router-link to="HomeRView"><button>Log In</button></router-link>
</div>
</div>
</form>
</div>

<div class="lowerClass">
<div class="lowerClass1">
<div class="forgotPassword">
<p class="word">Forgot password?</p>

</div>
<div class="reset">
<a href="#" class="resetLink">Reset password</a>
</div>
</div>
<div class="lowerClass2">
<p class="signUp">Don't have an account?</p>
<a href="/" class="signUpLink">Sign Up</a>
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
color:  #FFFFFF;
font-weight: bold;
}
.lowerClass1 {
display: flex;
flex-direction: row;
padding: 40px 20px 30px 40px;
margin: 100px 10px 40px 120px;

}
.lowerClass2 {
display: flex;
flex-direction: row;
margin: 20px 5px -80px 120px;
padding: -40px;
}
.resetLink {
margin: 15px 20px -10px 10px;
}
.signUpLink {
margin: 15px ;
}
</style>
