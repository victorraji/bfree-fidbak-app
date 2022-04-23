<template>
<div class="main">
<div class="logoImage">
<img src="../assets/logo.jpg" alt="logo" class="image1">
</div>
<div class="formBlock">
<div class="main1">
<div class="header1"><p>Welcome to Bfree Fidbak</p></div>
<!-- for the sentences -->
<div class="pageSentences">
<div class="sen1"><p>Create Account</p></div>
<div class="sen2"><p>Note that there are two tabs created, you are either creating an account as a Receiver or Responder;</p></div>
<div class="sen3">
<ul>
<li>If you are signing up as an Account Manager, Select the Receiver button below</li>
<li>If you are signing up as an Engineer, or Operations, Select the Responder button below</li>
</ul>
</div>
<div>
<a href="/SignupR"><button class="button1">Responder</button></a>
<a href="/Signup"><button class="button1">Receiver</button></a>
</div>
</div>
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
.main1 {
padding: 50px;
}
.header1 {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 45px;
color: #00A4DB;
}
.sen1 {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #000000;
padding-right: 380px;
}
.sen2 p {
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #000000;
padding-right: 150px;
}
.sen3 {
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #000000;
}
.button1 {
background: rgba(0, 164, 219, 0.07);
border: 1px solid #00A4DB;
box-sizing: border-box;
border-radius: 5px;
margin: 10px;
padding: 10px 50px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: rgba(0, 0, 0, 0.28);
}
.button1:hover {
background: rgba(0, 164, 219, 0.27);
color: #00A4DB;
}
.lastP {
font-family: 'Poppins';
font-style: italic;
font-weight: 300;
font-size: 16px;
line-height: 24px;
color: #000000;
margin-top: 100px;
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
