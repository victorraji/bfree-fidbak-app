<template>
  <div class="wrapper">
      <div class="text">
          <div class="logo">
              <img src="../assets/logo.jpg" alt="fidbak logo">
          </div>
          <div class="confirmation">
            <!-- <div class="circle"><font-awesome-icon :icon="['fas', 'check']" class="icon"/></div> -->
            <div class="circle"><img src="../assets/passmark.png"></div>
            <div class="textStyle">Account Created<br>Successfully!</div>
            <router-link to="signinR"><button><span>Log in</span></button></router-link>
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
            // .circle{
            //     // margin:0 0 5% 10%;
            // }
            .textStyle{
                @include font( 30px, 700, 2, $black);
                margin-bottom: 20px;
            }
        }
    }
    .image{
        width: 154%;
        height: 100vh;
        margin-top: -8px;
    }
}
</style>
