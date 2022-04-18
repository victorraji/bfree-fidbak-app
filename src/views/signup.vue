<template>
<div class="main">
<div class="logoImage">
<img src="../assets/logo.jpg" alt="logo" class="image1">
</div>
<div class="formBlock">
<div class="forM">
<div class="forM1"><p>Create Your Account</p></div>
<form>
<div class="formMain">
<div>
<input type="text" placeholder="Full Name"  autocomplete="off"  required />
<label for="name" class="label-name"></label>
</div>
<div>
<input type="email address"  autocomplete="off"  placeholder="Email Address" required />
<label for="email address" class="label-name"></label>
</div>
<div>
<input type="text"  autocomplete="off"  placeholder="Department e.g operations(QA)" required />
<label for="name" class="label-name"></label>
</div>
<div>
<input type="password"  autocomplete="off"  placeholder="Password" required />
<label for="password" class="label-name"></label>
</div>
<div>
<input type="password" placeholder="Confirm Password" required />
<label for="password" class="label-name"></label>
</div>
<div><button class="buttonUp">Sign Up</button></div>
</div>
</form>

<div class="lastP">
<p>Do you have an account already? <a href="/">Log in</a></p>
</div>
</div>
<div>
<img src="../assets/landing image.png" alt="pageimage" class="image2">
</div>
</div>

</div>
</template>

<script>

export default {

}

</script>

<style scoped>
*{
margin: 0px;
padding: 0px;
}
.main {
display: grid;
grid-template-rows: 1fr 9fr;
}
.formBlock {
display: flex;
background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
height: 100vh;
width: 100%;
}

.logoImage {
margin: -40px 800px 10px -180px;
padding: 15px;
background-color: #FFFFFF;
}
.formMain {
height: 100vh;
position: relative;
width: 80vh;
}
.forM {
padding: 50px;
}
.formMain input {
height: 100%;
width: 80%;
padding: 20px;
border: none;
outline: none;
margin: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: rgba(0, 0, 0, 0.47);
background: #DDDFD3;
}
.formMain label {
position: absolute;
width: 80%;
left: 10%;
height: 8%;
pointer-events: none;
border-bottom: 1px solid black;
}
.formMain input:focus + .label-name .placeholder {
transform: translateY(-150px);
}
.buttonUp {
background: #00A4DB;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
color: white;
height: 100%;
width: 80%;
margin: 25px;
padding: 20px;
}
.forM1 {
margin-right: 250px;
color: #00A4DB;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px
}
.lastP {
font-family: 'Poppins';
font-style: italic;
font-weight: 300;
font-size: 16px;
line-height: 24px;
color: #000000;
margin-top: -200px;
}
.lastP a {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #00A4DB;
}
</style>
