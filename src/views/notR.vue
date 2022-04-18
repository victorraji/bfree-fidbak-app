<template>
<div class="main1">
<header class="header">
<HeaderR/>
</header>
<div class="header2">
<topHeaderR/>
</div>

<main class="main">
<div class="fmessage"><p>Feedback Message</p></div>
<div class="message1">
<p>{{message}}</p>
</div>
<div class="fmessage2"><p>Feedback Response</p></div>
<form>
<textarea class="textArea">
</textarea>
<button class="input2">Submit Response</button>
</form>
</main>
<aside class="nav2"><NavbarR/></aside>
<div class="popup">
<transition name="slide" appear>
<div class="popup-inner" v-if="showModal">
<div class="popupP">
<img src="../assets/passmark.png">
<p>{{alertWords}}</p>
</div>
<button class="popup-close" @click="showModal=false">X</button>
</div>
</transition>
</div>
</div>
</template>

<script>
import HeaderR from '@/components/responder/HeaderR.vue'
import NavbarR from '@/components/responder/NavbarR.vue'
import topHeaderR from '@/components/responder/topHeaderR.vue'
export default {
  name: 'notR',

  components: {
    HeaderR,
    NavbarR,
    topHeaderR
  },
  data () {
    return {
      showModal: true,
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium',
      alertWords: 'Your Account has been Created Succesfully'
    }
  },
  methods: {
    alertWord () {
      const randomNumber = Math.random()
      if (randomNumber < 0.5) {
        return 'Your response has been sent successfully'
      }
    }
  }
}
</script>

<style scoped>
.main1 {
display: grid;
grid-template-columns: 240px 1fr;
grid-template-rows: 20px 140px;
grid-template-areas:
"nav2 header"
"nav2 header2"
"nav2 main";
height: 100vh;
background: linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(0, 164, 219, 0.32);
}
.main {
grid-area: main;
background: #F7F7F7;
border: 0.5px solid rgba(0, 0, 0, 0.49);
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 70px;
}
.nav2 {
grid-area: nav2;
margin-top: -35px;
}

.header {
grid-area: header;
margin: 60px 20px;
}
.header2 {
margin-top: 50px;
}
.fmessage {
background: #00A4DB;
width: 1125px;
}
.fmessage p {
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
}
.message1 {
background: #FFFFFF;
border: 0.3px solid #000000;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 1014px;
height: 209px;
margin: 30px;
}

.fmessage2 {
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 27px;
color: #000000;
}

.textArea {
width: 1014px;
height: 143px;
background: #FFFFFF;
border: 0.3px solid #000000;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.input2 {
background: #00A4DB;
border-radius: 5px;
margin: 40px;
width: 384px;
height: 50px;
color: #FFFFFF;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
}
.message1 {
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 27px;
color: #000000;
}
.popup-inner {
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
.popup-close {
position: absolute;
width: 25px;
height: 21px;
right: 15px;
top: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
border-radius: 40%;
background-color: #00A4DB;
border: 1px #00A4DB;
}
.popupP {
padding: 30px;
color: #00A4DB;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
text-align: center;
}
</style>
