<template>
  <div class="container">
      <div class="logo">
          <div class="logo-wrapper">
            <img src="../assets/bfreeLogo.png" alt="">
            <img src="../assets/fidbak.png" alt="">
          </div>
      </div>
      <div class="contentBox">
          <div class="textArea">
            <div><p>Enter your valid email address and password to sign in</p></div>
            <div class="ui_text_field">
                <input type="text" name="email" value="" onchange="this.setAttribute('value', this.value)" required/>
                <label for="email"><font-awesome-icon :icon="['fas', 'envelope']" class="icon"/> Enter your email address</label>
            </div>
            <div class="ui_text_field">
                <input type="text" name="password" value="" onchange="this.setAttribute('value', this.value)" required/>
                <label for="password"><font-awesome-icon :icon="['fas', 'lock']" class="lock-icon"/> Enter your password <font-awesome-icon :icon="['fas', 'eye']" class="eye-icon"/></label>
            </div>
            <div class="mistake">
                <p><font-awesome-icon :icon="['fas', 'warning']" class="warn-icon"/> Wrong email or password. Try again or click Reset password to reset it.</p>
            </div>
            <router-link to="/HomeRView"><button class="btn"><span>Log in</span></button></router-link>
            <div class="resetArea">
                <p>Forgot Password? <a href="">reset password</a></p>
                <span>
                    <strong>Don't have an account? </strong>
                    <router-link to="/signupR">Sign up</router-link>
                </span>
            </div>
          </div>
          <div class="imageBox">
              <img src="../assets/istockphoto-1132284560-612x612 1.jpg" alt="A man working with a Laptop">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'WrongDetailR',
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import "/scss/style.scss";
.container{
    margin: 0 auto;
    padding: 0;
    .logo{
    width: 100%;
    height: 18vh;
    text-align: start;
    text-indent: 2rem;
    line-height: 18vh;
    background: $white;
    }
    .contentBox{
        @include flex(flex, start, start, columns);
        @include font(17px, 300, 26px, $black);
        background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
        height: 78vh;
        .textArea{
            @include grid(grid, 7, 7, 10%, 0px);
            text-align: start;
            margin: 50px 0 0 40px;
            .ui_text_field{
                width: 70%;
                position: relative;
                & input{
                    width: 100%;
                    height: 45px;
                    border-radius: 5px;
                    border: 3px solid #CD2D2D;
                    box-sizing: border-box;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    padding: 15px;
                    transition: all 0.3s ease-in-out;
                    &:not([value=""]){
                        border-width: 2px;
                        & + label{
                         margin-top: -25px;
                         color: #CD2D2D;
                        }
                    }
                    &:focus{
                        outline: 0;
                        border-width: 2px;
                        &:focus + label{
                            margin-top: -35px;
                            color: #CD2D2D;
                        }
                    }
                }
                & label{
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    color: #CD2D2D;
                    transition: all 0.3s ease-out;
                }
            }
            .mistake{
            color: #CD2D2D;
            }
            .resetArea{
                padding-left: 2rem;
            }
        }
    }
    .imageBox{
        margin-right: -10px;
        & img{
            width: 58vw;
            height: 78vh;
            margin-left: 40px;
        }
    }
    a{
        text-decoration: none;
        color: $pri-color;
    }
}
</style>
