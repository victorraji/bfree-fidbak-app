<template>
  <div class="wrapper">
          <div class="logo">
              <img src="../assets/bfreeLogo.svg" alt="fidbak logo">
              <img src="../assets/fidbak.png" alt="">
          </div>
          <div class="confirmation">
              <div class="textArea">
                <div class="circle"><font-awesome-icon :icon="['fas', 'check']" class="icon"/></div>
                <div class="textStyle">Account Created<br>Successfully</div>
                <router-link to="signinR"><button class="btn"><strong>Log in</strong></button></router-link>
              </div>
            <div class="image"></div>
          <img src="../assets/landingimage.svg" alt="" class="image"/>
          </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
@import "/scss/style.scss";
.wrapper{
    display: grid;
    grid-template-rows: 1fr 9fr;
    .logo{
        text-align: start;
        margin-left: 100px;
        background-color: $white;
    }
    .confirmation{
        display: flex;
        text-align: start;
        background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
        .textArea{
            display: grid;
            grid-template-rows: 1fr 0.5fr 0.5fr;
            width: 50%;
            .circle{
                height: 15vh;
                width: 8vw;
                background: $pri-color;
                border-radius: 50%;
                text-align: center;
                margin: 20% 0 0 280px;
                .icon{
                    height: 5vh;
                    width: 5vw;
                    margin-top: 30%;
                    color: $white;
                }
            }
            .btn{
                margin-left: 80px;
            }
            .textStyle{
                @include font( 30px, 700, 2, $black);
                text-align: center;
            }
        }
    }
}
</style>
