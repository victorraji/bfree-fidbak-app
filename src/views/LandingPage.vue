<template>
  <div class="container">
    <div class="text-wrapper">
      <div class="logo-holder">
        <img src="../assets/bfreeLogo.png" alt="fidbak logo" class="bfreeLogo"/>
        <img src="../assets/fidbak.png" alt="fidbak logo" class="fidbakLogo"/>
      </div>
      <div class="pages-body">
        <div class="body-text">
          <p class="header-text">Bridging the<br> <span>communication gap</span><br> in the organisation.</p><br><br><br>
          <p class="description-text">A creative platform to encourage effective <span>communication</span> between Account Managers, Engineers and operations team within the organisation.</p>
          <router-link to="/signupwel" style="text-decoration: none; color: inherit"><button><strong>Get started</strong></button></router-link>
        </div>
      </div>
    </div>
    <div class="body-image">
      <img src="../assets/newlanding.svg" alt="A lady sitting behind a laptop">
    </div>
  </div>
</template>

// STYLE
<style lang="scss" scoped>
@import "/scss/style.scss";
*{
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // min-height: 100vh;
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.text-wrapper{
  display: grid;
  grid-template-rows: 1fr 5fr;
  padding: 0px 0px 0px 5%;
  background: rgba(0, 164, 219, 0.03);
}
.logo-holder{
  width: 346px;
  height: 77px;
  margin: 30px 0 0 0;
  text-align: start;
  .bfreeLogo{
    width: 60px;
  }
  .fidbakLogo{
    width: 180px;
    padding-bottom: 10px;
  }
}

.pages-body{
  justify-content: center;
  align-items: start;
  padding: 10% 0 0 5%;
  background: #fff;
  height: 75vh;
  width: 40vw;
}

.body-text{
  background: #fff;
}

.header-text{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 45px;
  line-height: 55px;
  text-align: start;
}
span{
  color: #00A4DB;
}
.description-text{
  width: 430px;
  height: 72px;
  margin-top: -25px;
  font-family: 'poppins';
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
  padding: 2% 10%;
  margin: 40px 0 0 0;
  width: 380px;
  height: 55px;
  background: #00A4DB;
  border: 4px solid #00A4DB;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #f7f7f7;
  & strong{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        display: inline-block;
        cursor: pointer;
        transition: 0.5s;
        &::after{
            content: '\2192';
            transition: 0.5s;
            opacity: 0;
            margin-left: 20px;
        }
    }
    &:hover strong{
        padding-right: 25px;
        &::after{
            opacity: 1;
        }
    }
}

.body-image{
  background: rgba(181, 215, 227, 0.31);
}
/* @media screen and (max-width: 450px) {
  .container{
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  .body-text{
    font-family: "poppins";
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 15px;
    text-align: start;
  }
} */
</style>
