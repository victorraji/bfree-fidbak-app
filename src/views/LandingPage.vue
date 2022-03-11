<template>
  <div id="app">
    <div class="all-text">
      <div class="logo-holder">
        <img src="../assets/logo.jpg" alt="fidbak logo">
      </div>
      <div class="pages-body">
        <div class="body-text">
          <p class="header-text">Bridging<br> <span>communication gap</span><br> in the company.</p>
          <p class="description-text">A creative platform to encourage effective <span>communication</span> between Account Managers, Engineers and operations team within the organisation.</p>
          <button> <strong>Get started</strong></button>
        </div>
      </div>
    </div>
    <div class="body-image">
      <!-- <img src="../assets/Frame 51.jpg" alt="A lady sitting behind a laptop"> -->
    </div>
  </div>
</template>

// STYLE
<style scoped>
#app {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  margin: 0px auto;
  position: fixed;
}

.all-text{
  display: grid;
  grid-template-rows: 1fr 5fr;
  margin-left: 70px;
  margin-bottom: 100px;
}

.logo-holder{
  /* margin-left: 100px; */
  margin-top: 30px;
  text-align: start;
}

.pages-body{
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: start;
  position: relative;
  grid-gap: none;
}

/* Bridging communication gap in the company */
.header-text{
  font-family: poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 55px;
  text-align: start;
  margin-top: 80px;
}

span{
  color: #00A4DB;
}

.description-text{
  position: static;
  width: 430px;
  height: 72px;
  left: 0px;
  top: 215px;
  font-display: open sans;
  font-style: normal;
  font-weight: 600px;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  text-align: start;
  /* margin: 50px 0px; */
}

button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  /* position: absolute; */
  width: 432px;
  height: 60px;
  left: 0px;
  top: calc(50% - 60px/2 + 174.5px);
  background: #00A4DB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  /* align-items: center;
  padding: 10px 30px;
  position: relative;
  width: 430px;
  height: 68px;
  left: 0px;
  top: calc(50% - 68px/2 + 168.5px);
  background: #00A4DB;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 0;
  color: #f7f7f7; */
  /* margin-bottom: 50px; */
  /* margin: 50px 0px; */
}

.body-image{
    background-image: url("../assets/Frame 51.jpg");
  position: relative;
  margin-right: 20px auto;
  margin-bottom: 60px;
}
</style>
