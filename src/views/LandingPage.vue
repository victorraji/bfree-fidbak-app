<template>
  <div class="container">
    <div class="text-wrapper">
      <div class="logo-holder">
        <img src="../assets/logo.jpg" alt="fidbak logo">
      </div>
      <div class="pages-body">
        <div class="body-text">
          <p class="header-text">Bridging<br> <span>communication gap</span><br> in the organisation.</p><br><br><br>
          <p class="description-text">A creative platform to encourage effective <span>communication</span> between Account Managers, Engineers and operations team within the organisation.</p>
          <router-link to="/signin" style="text-decoration: none; color: inherit"><button><strong>Get started</strong></button></router-link>
        </div>
      </div>
    </div>
    <div class="body-image">
      <img src="../assets/newlanding.svg" alt="A lady sitting behind a laptop">
    </div>
  </div>
</template>

// STYLE
<style scoped>
*{
  margin: 0;
  padding: 0;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  width: 100%;
  grid-column-gap: 10px;
  overflow-x: hidden;
  position: fixed;
}
.text-wrapper{
  display: grid;
  grid-template-rows: 1fr 5fr;
  /* margin-left: 70px; */
  padding: 0 10% 100% 10%;
  /* margin-bottom: 100px; */
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
  /* grid-gap: 5%; */
}

/* Bridging communication gap in the company */
.header-text{
  font-family: poppins;
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 55px;
  text-align: start;
  margin-top: 15%;
}
span{
  color: #00A4DB;
}
.description-text{
  /* position: static; */
  width: 430px;
  height: 72px;
  /* left: 0px;
  top: 215px; */
  font-display: open sans;
  font-style: normal;
  font-weight: 600px;
  font-size: 16px;
  line-height: 25px;
  color: #000000;
  text-align: start;
}

button{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5% 10%;
  width: 380px;
  height: 55px;
  left: 0px;
  margin-top: 10%;
  background: #00A4DB;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #f7f7f7;
}

.body-image{
  position: relative;
  margin-left: 60px;
  background: rgba(181, 215, 227, 0.31);;
}
</style>
