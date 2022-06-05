<template>
  <div class="wrapper">
          <div class="logo">
              <img src="../assets/logo.jpg" alt="fidbak logo">
              <!-- <img src="../assets/fidbak.png" alt=""> -->
          </div>
          <div class="confirmation">
              <div class="textArea">
                <!-- <div class="circle"><font-awesome-icon :icon="['fas', 'check']" class="icon"/></div> -->
                <div class="circle"><img src="../assets/passmark.png"></div>
                <div class="textStyle">Account Created<br>Successfully</div>
                <router-link to="signin"><button class="btn"><span>Log in</span></button></router-link>
              </div>
            <div class="image-box">
                <img src="../assets/landingimage.svg" alt="A woman sitting by a laptop" class="image" />
            </div>
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
    overflow: hidden;
    .logo{
        text-align: start;
        margin-left: 100px;
        background-color: $white;
    }
    .confirmation{
        display: flex;
        text-align: start;
        height: 90vh;
        background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
        .textArea{
            display: grid;
            grid-template-rows: 1fr 0.5fr 0.5fr;
            width: 50%;
            .circle{
                margin: 20% 0 0 250px;
                @media screen and (max-width: 1000px){
                    margin-right: 8%;
                    line-height: 12vh;
                }
                .icon{
                    height: 5vh;
                    width: 5vw;
                    margin-top: 30%;
                    color: $white;
                }
            }
            .btn{
                margin-left: 150px;
            }
            .textStyle{
                @include font( 30px, 700, 2, $black);
                text-align: center;
            }
        }
        .image-box{
            width: 90vh;
            .image{
                width: 100%;
            }
        }
        @media screen and (max-width: 700px){
            display: grid;
            grid-template-rows: 1fr 1fr;
            height: 180vh;
            justify-content: center;
            .textArea{
                .circle{
                    width: 12vw;
                    height: 12vh;
                    margin: 5rem 12rem 2rem 12rem;
                    .icon{
                        width: 6vw;
                    }
                }
                .btn{
                    width: 350px;
                    height: 50px;
                    margin: 3rem 3rem 4rem 4rem;
                }
            }
        }
        .image-box{
            justify-content: center;
        }
    }
}
</style>
