<template>
  <div class="text-wrapper">
      <div class="logo-holder">
        <img src="../../assets/bfreeLogo.png" alt="fidbak logo">
        <img src="../../assets/fidbak.png" alt="fidbak logo">
      </div>
      <div class="pages-body">
        <div class="body-text">
          <p class="header-text">Bridging<br> <span>communication gap</span><br> in the organisation.</p><br><br><br>
          <p class="description-text">A creative platform to encourage effective <span>communication</span> between Account Managers, Engineers and operations team within the organisation.</p>
          <!-- <router-link to="/" style="text-decoration: none; color: inherit"><button><strong>Log Out</strong></button></router-link> -->
              <button class="button" @click="showModal = true">Get Started</button>
                <transition name="fade" appear>
                    <div class="modal-overlay" v-if="showModel" @click="showModal = false"></div>
                </transition>
                <transition name="slide" appear>
                    <div class="modal" v-if="showModal">
                        <div class="confirmation"><strong>Are you sure you want to logout?</strong></div>
                        <div class="choice">
                          <button class="yes" @click="logout = true"><router-link to="/signinR"> Yes, please!</router-link></button>
                          <button class="no" @click="showModal = false">No, please go back</button>
                        </div>
                        <!-- <button class="button" @click="showModal = false">Close modal</button> -->
                    </div>
                </transition>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TextRap',
  data () {
    return {
      showModal: true
    }
  }
}
</script>

<style scoped>
.text-wrapper{
  display: grid;
  grid-template-rows: 1fr 5fr;
  padding: 0 10% 100% 10%;
}
.logo-holder{
  margin-top: 30px;
  text-align: start;
}

.pages-body{
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: start;
}

/* Bridging communication gap in the company */
.header-text{
  font-family: poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 55px;
  text-align: start;
  margin-top: 30%;
}
span{
  color: #00A4DB;
}
.description-text{
  width: 430px;
  height: 72px;
  font-display: open sans;
  font-style: normal;
  font-weight: 600px;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  text-align: start;
}
.button{
    appearance: none;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    display: inline-block;
    margin-top: 30px;
    margin-left: -12%;
    width: 380px;
    height: 55px;
    padding: 15px 25px;
    background-color: #00A4DB;
    border-radius: 8px;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 18px;
    font-weight: 700;
}
.button:hover{
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
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
.confirmation{
  padding-top: 15%;
  text-align: center;
}
strong{
    color: #222;
    font-weight: 900;
}
.choice{
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
}
a{
  text-decoration: none;
  color: #fff;
}
.yes{
  align-items: center;
  height: 38px;
  width: 150px;
  background-color: #CD2D2D;
  border-radius: 5px;
}
.no{
  align-items: center;
  height: 38px;
  width: 150px;
  background: #FFFFFF;
  color:#00A4DB;
  border: 1px solid #00A4DB;
  box-sizing: border-box;
  border-radius: 5px;
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity 2s;
}
.fade-enter,
.fade-leave-to{
    opacity: 0;
}
.slide-enter,
.slide-leave-to{
    opacity: 0;
}
@media screen and (min-width: 700px) {
  .container{
    justify-content: grid;
    grid-template-rows: auto;
  }
}
</style>
