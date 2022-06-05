<template>
  <div>
    <HeaderR/>
    <TheNavR/>
    <div class="detail">
        <UserDetailR/>
    </div>
    <!-- <div class="toggle"> -->
        <TogglebarE/>
    <!-- </div> -->
    <div class="container">
        <div></div>
        <div></div>
        <div></div>
      <div class="empty"></div>
      <div class="content">
          <div class="header">
              <div class="iconStyle">
                  <div><font-awesome-icon :icon="['fas', 'fa-area-chart']" class="home-icon"/></div>
                  <h3>Engage Poll</h3>
              </div>
                <div><h4>How is 3cx treating you today?</h4></div>
          </div>
          <ul>
              <li>
                  <ul class="survey">
                      <div class="surveyFirst">
                          <li class="firstBox">1</li>
                          <li class="second">Very good, almost perfect</li>
                      </div>
                      <div class="numBox"><li class="secondBox">1</li></div>
                  </ul>
              </li>
              <li>
                  <ul class="survey">
                      <div class="surveyFirst">
                        <li class="firstBox">2</li>
                        <li class="second">Good</li>
                      </div>
                      <div class="numBox"><li class="secondBox">2</li></div>
                  </ul>
              </li>
              <li>
                  <ul class="survey">
                      <div class="surveyFirst">
                        <li class="firstBox">3</li>
                        <li class="second">Fair enough</li>
                      </div>
                      <div class="numBox"><li class="secondBox">3</li></div>
                  </ul>
              </li>
              <li>
                  <ul class="survey">
                      <div class="surveyFirst">
                        <li class="firstBox">4</li>
                        <li class="second">It has been frustrating</li>
                      </div>
                      <div class="numBox"><li class="secondBox">4</li></div>
                  </ul>
              </li>
          </ul>
          <footer>Created by <strong class="creator">Perpetual</strong> from the Branch team</footer>
      </div>
      <div class="empty2"></div>
  </div>
  </div>
</template>

<script>
import HeaderR from '@/components/responder/HeaderR.vue'
import TheNavR from '@/components/responder/TheNavR.vue'
import UserDetailR from '@/components/responder/UserDetailR.vue'
import TogglebarE from '@/components/reusables/TogglebarE.vue'

export default {
  name: 'ReportEngage',
  components: {
    HeaderR,
    TheNavR,
    UserDetailR,
    TogglebarE
  }
}
</script>

<style lang="scss" scoped>
@import "/scss/style.scss";
.empty{
    height: 69vh;
    width: 8vw;
    background-color: $white;
}
.empty2{
    height: 69vh;
    width: 89%;
    margin-left: 5%;
    background-color: $white;
}
.detail{
    padding: 10% 0 0 0;
}
.toggle{
    margin: 0 0 0 60px;
}
.container{
    display: flex;
    width: 100vw;
    height: 75vh;
    background: $alt-color;
    margin-left: 20% ;
    margin-bottom: 40px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    .content{
        width: 300vw;
        height: 59vh;
        background: #FFFFFF;
        margin: 40px 0 0 50px;
        ul{
            list-style-type: none;
            text-align: start;
        }
        .survey{
            @include flex(flex, space-between, start, columns);
            margin-left: 2%;
            .surveyFirst{
            @include flex(flex, space-between, start, columns);
            }
            .second{
                width: 200px;
                margin-left: 1rem;
            }
            .firstBox{
                width: 2vw;
                height: 3vh;
                background: radial-gradient(50% 50% at 50% 50%, rgba(9, 189, 249, 0) 29.69%, #09BDF9 100%);
                border: 0.5px solid #00A4DB;
                box-sizing: border-box;
                text-align: center;
                margin-left: 2%;
            }
            .numBox{
                display: flex;
                width: 6vw;
                height: 100%;
                justify-content: center;
                margin-right: 10%;
                margin-bottom: 3%;
                border: 0.3px solid;
                box-sizing: border-box;
                .secondBox{
                width: 2vw;
                height: 3vh;
                background: radial-gradient(50% 50% at 50% 50%, rgba(9, 189, 249, 0) 29.69%, #09BDF9 100%);
                border: 0.5px solid #00A4DB;
                box-sizing: border-box;
                margin: 10% 0 10% 10%;
                text-align: center;
                }
            }
        }
    }
    .header{
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 10%;
        text-align: start;
        margin: 2% 0 2% 2%;
        .iconStyle{
            display: flex;
            width: 10vw;
            justify-content: space-between;
        }
    }
    footer{
        @include font(14px, 400, 21, $black);
        text-align: start;
        padding-left: 2%;
    }
}
</style>
