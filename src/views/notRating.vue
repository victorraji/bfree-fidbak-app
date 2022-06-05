<template>
    <div class="main1">
        <Header/>
        <TheNav/>
        <div class="details"><UserDetails/></div>
        <main class="main">
            <div class="feedback-header">
                <h4>Feedback Message</h4>
            </div>
            <div class="textArea">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper massa libero ullamcorper scelerisque cras maecenas aliquam. Viverra turpis neque convallis nulla lectus viverra sem. Malesuada nec vitae enim augue mi, nulla vel. Eget congue at sed id varius nec tortor. Volutpat sit lobortis scelerisque orci, eget ut varius faucibus nunc. Consequat nunc platea luctus aliquam tempor ac semper nec, viverra. Dui urna tempus ipsum arcu lorem. Posuere tristique leo cras tincidunt varius lorem donec id senectus. Ante eget tristique aliquam, elementum donec a egestas condimentum in.</p>
                </div>
            <form class="btn">
                <button>Feedback Received</button>
                <button class="input2">Submit Another Feedback Now</button>
            </form>
        </main>
        <div class="popup" v-if="showModal">
            <transition name="slide" appear>
                    <div class="popupP">
                        <div class="header">
                            <h4>Rate this feedback</h4>
                            <p>How was the response?</p>
                        </div>
                        <div class="rating">
                          <input type="radio" id="star1"><label for="star1"></label>
                          <input type="radio" id="star2"><label for="star2"></label>
                          <input type="radio" id="star3"><label for="star3"></label>
                          <input type="radio" id="star4"><label for="star4"></label>
                          <input type="radio" id="star5"><label for="star5"></label>
                        </div>
                        <ul>
                            <li v-for="item in items" :key="item.message">{{item.message}}</li>
                        </ul>
                        <form class="commentBox">
                            <div>
                                <input type="text" name="comments" v-model="comment" class="comment" placeholder="comments" required>
                            </div>
                            <div class="butn">
                                <button @click="showModal=false" class="submit">submit</button>
                                <!-- <input type="submit" value="submit" class="submit"> -->
                            </div>
                        </form>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import TheNav from '@/components/navbar/TheNav.vue'
import Header from '@/components/navbar/Header.vue'
import UserDetails from '@/components/reusables/UserDetails.vue'
export default {
  name: 'notRating',
  components: {
    Header,
    TheNav,
    UserDetails
  },
  data: function () {
    return {
      showModal: true,
      items: [
        { message: 'Very bad' },
        { message: 'Very good' }
      ],
      alertWords: 'Thank you for your feedback!'
    }
  },

  methods: {
    // setRating (newRating) {
    //   this.$parent.rating = parseInt(newRating)
    // }
  }
//   })
}
</script>
<style lang="scss" scoped>
@import "/scss/style.scss";
.main {
    @include grid(grid, 1, fraction, 20px, 0);
    height: 830px;
    width: 75%;
    margin-left: 23%;
    background: #F7F7F7;
    border: 0.5px solid rgba(0, 0, 0, 0.49);
    box-sizing: border-box;
    // opacity: 0.3;
    // filter: blur(3px);
    .feedback-header {
      width: 100%;
      height: 7vh;
      text-align: start;
      line-height: 7vh;
      text-indent: 2rem;
      background: #00A4DB;
      color: $white;
      }
      .textArea {
      background: #FFFFFF;
      border: 0.3px solid #000000;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      width: 85%;
      height: 59vh;
      margin: -80px 30px 30px 70px;
      & p{
          @include font(18px, 500, 27px, $black);
          text-align: start;
          margin: 2rem 1rem 0 2rem;

      }
  }
  .btn{
      @include grid(grid, 0.5, fraction, 0, 0);
      justify-content: center;
      margin-top: -120px;
      & button{
          height: 3vw;
      }
      .input2{
          margin-top: -70px;
          background: #FFFFFF;
          border: 1px solid #00A4DB;
          box-sizing: border-box;
          border-radius: 5px;
          color: $pri-color;
      }
  }
}
.details{
  margin: 10% 0 30px -77px;
}
.popup {
@include font(20px, 500, 30px, $black);
@include style(normal, 'Poppins');
width: 40vw;
height: 50vh;
position: absolute;
top: 50%;
left: 40%;
background: $white;
text-align: center;
border: 0.5px solid rgba(0, 0, 0, 0.49);
box-sizing: border-box;
border-radius: 21px;
    .popupP{
      .rating{
        justify-content: center;
        align-items: center;
        // top: 50%;
        // left: 50%;
        transform: translate(-50% -50%) rotateY(180deg);
        display: flex;
        padding: 15px;
        & label{
          display: block;
          cursor: pointer;
          width: 40px;
          padding-left: 10px;
          &::before{
            @include font(50px, 900, none, none);
            content: "\f005";
            font-family: 'FontAwesome 5 Free';
            display: block;
            top: 0;
            opacity: 0;
            position: relative;
            color: #1d1c1c;
          }
          &::after{
            @include font(50px, 900, none, none);
            content: "\f005";
            font-family: 'Font Awesome 5 Free';
            display: block;
            top: 0;
            opacity: 0;
            position: relative;
            color: #1f9cff;
            transition: 0.5s;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
          }
        }
        & input{
          display: none;
        }
        & label:hover::after,
        & label:hover ~ label::after,
        & input:checked ~ label::after {
          opacity: 1;
        }
      }
        .header{
          @include grid(grid, 1, fraction, 20px, 0);
        }
        ul{
            @include flex(flex, space-between, start, columns);
            width: 60%;
            margin: 1rem 0 1rem 7rem;
            list-style-type: none;
            }
            .commentBox{
                width: 100%;
                height: 60px;
                .comment{
                    width: 40%;
                    height: 70px;
                    text-align: start;
                    border: 0.3px solid $black;
                    box-sizing: border-box;
                    transition: all 0.3s ease-in;
                }
                .submit{
                    width: 12vw;
                    height: 6vh;
                    margin-top: 1rem;
                }
            }
        }
}
</style>
