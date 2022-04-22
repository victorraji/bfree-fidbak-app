<template>
  <div class="wrapper">
      <div class="text">
          <div class="logo">
              <img src="../assets/bfreeLogo.svg" alt="fidbak logo">
              <img src="../assets/fidbak.png" alt="">
          </div>
          <div class="confirmation">
            <div class="circle"><font-awesome-icon :icon="['fas', 'check']" class="icon"/></div>
            <div class="textStyle">Account Created<br>Successfully</div>
            <router-link to="signinR"><button><strong>Log in</strong></button></router-link>
          </div>
      </div>
          <img src="../assets/man.png" alt="" class="image"/>
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
    grid-template-columns: 1fr 1fr;
    position: fixed;
    height: 100vh;
    .text{
        display: grid;
        grid-template-rows: 1fr 2fr;
        .logo{
            height: 5.2vh;
            background: $white;
            margin: 20px 0 0 -200px;
        }
        .confirmation{
            display: grid;
            grid-template-rows: 1fr 1fr 1fr;
            height: 45vh;
            justify-content: center;
            .circle{
                height: 15vh;
                width: 8vw;
                background: $pri-color;
                border-radius: 50%;
                line-height: 15vh;
                margin:0 0 5% 30%;
                .icon{
                    height: 5vh;
                    width: 5vw;
                    margin-top: 30%;
                    color: $white;
                }
            }
            .textStyle{
                @include font( 30px, 700, 2, $black);
                margin-bottom: 20px;
            }
        }
    }
    .image{
        width: 150%;
        height: 100vh;
    }
}
</style>
