<template>
<div class="body">
<div class="rectangle29">
<div class="logoImage">
<img src="../assets/logo.jpg" alt="logo" class="image1">
</div>
</div>
<div class="mainblock">
<div class="pageimage">
<img src="../assets/landing image.png" alt="pageimage" class="image2">
</div>
<div class="pnform">
<div class="firstPara">
<p>Enter your valid email address and password to sign in</p>
</div>
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
<div class="inputBox button">
<a href="/">
<input type="submit" value="Log in">
</a>
</div>
</div>
</form>
<div class="lowerClass">
<div class="forgotPassword">
<p class="word">Forgot password?</p>
</div>
<div class="reset">
<a href="#" class="resetLink">Reset password</a>
</div>
</div>
<p class="signUp">Don't have an account?</p>
<a href="/" class="signUpLink">Sign Up</a>
</div>
</div>
</div>
</template>

<script>
</script>

<style scoped>
* {
margin: 0;
padding: 0;
}
.body {
width: 1440px;
height:1024px;
background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
position: relative;
}
.rectangle29 {
position: absolute;
width: 1440px;
height: 158px;
left: 0px;
top: 0px;
background: #FFFFFF;
}
/* for logo image */
.logoImage {
position: absolute;
width: 1440px;
background: #FFFFFF;
height: 75.4px;
padding: 75.4px;
}
.image1 {
position: absolute;
width: 163px;
height: 36px;
left: 100px;
top: 61px;
}
.pageimage {
position: absolute;
width: 766px;
height: 590px;
left: 574px;
top: 217px;
}
 /* for paragrahp and form */
.pnform {
position: absolute;
width: 431px;
height: 442px;
top: 282px;
left: 100px;
font-style: normal;
font-weight: 300;
overflow: auto;
}
.firstPara.p {
width: 398px;
height: 52px;
left: 0px;
top: 0px;
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 17px;
line-height: 26px;
color: #000000;
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
transform: translateY(-150%);
padding-left: 20px;
}
.button input {
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
.lowerClass {
position: absolute;
width: 284px;
height: 28px;
left: 50px;
top: 339px;
}
.forgotPassword {
position: absolute;
height: 24px;
left: 0px;
right: 140px;
top: -25px;
}
.word {
position: absolute;
width: 144px;
height: 24px;
left: 0px;
top: -50px;
color: rgba(0, 0, 0, 0.42);
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
}
.reset {
position: absolute;
width: 131px;
height: 28px;
left: 153px;
top: -50px;
}
.resetLink {
position: absolute;
left: -100px;
right: -52%;
top: -25px;
bottom: 33.33%;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #00A4DB;
}
.signUp {
position: absolute;
left: 70px;
top: 300px;
font-family: 'Poppins';
font-style: italic;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #000000;
}
.signUpLink {
position: absolute;
left: 250px;
top: 300px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
}
</style>