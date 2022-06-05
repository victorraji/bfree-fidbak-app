<template>
  <div class="container">
            <HeaderR/>
            <TheNavR/>
        <div class="header1">
            <UserDetailR/>
        </div>
        <div class="toggleBox">
            <TogglebarE/>
        </div>
        <div class="main-content">
            <div class="scores">
                <div class="measurement">
                    <h3 class="score-header">Net Promoter Score</h3>
                    <div class="promoters-wrapper">
                        <div class="promoters">
                            <strong>Promoters</strong>
                            <div class="p-bar"><div class="p-barInside"></div></div>
                            <div class="p-score"><div>78%</div></div>
                        </div>
                    </div>
                    <div class="passive">
                        <strong>Passives</strong>
                        <div class="passive-bar"><div class="passive-inside"></div></div>
                        <div class="passive-score"><div>52%</div></div>
                    </div>
                    <div class="detractors">
                        <strong>Detractors</strong>
                        <div class="passive-bar"><div class="detractors-inside"></div></div>
                        <div class="passive-score"><div>35%</div></div>
                    </div>
                </div>
                <div class="result">
                    <div class="a-score">
                        <div class="decimal"><p>5.33<br>average NPS score</p></div>
                        <div class="active"><p>10 <br>Comments</p></div>
                    </div>
                    <div class="responses">
                        <div class="percentage"><p>76%<br>Response Rate</p></div>
                        <div class="active2"><p>32<br>Responses</p></div>
                    </div>
                </div>
            </div>
            <div class="comments">
                <h4 class="c-header">Comments</h4>
                <div class="feedback">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id odio, veritatis odit iste sed mollitia amet. Eaque ab laudantium vitae nemo, voluptatum quae aperiam consequatur! Ipsam omnis hic accusamus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id odio, veritatis odit iste sed mollitia amet. Eaque ab laudantium vitae nemo, voluptatum quae aperiam consequatur! Ipsam omnis hic accusamus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id odio, veritatis odit iste sed mollitia amet. Eaque ab laudantium vitae nemo, voluptatum quae aperiam consequatur! Ipsam omnis hic accusamus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut id odio, veritatis odit iste sed mollitia amet. Eaque ab laudantium vitae nemo, voluptatum quae aperiam consequatur! Ipsam omnis hic accusamus.</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import HeaderR from '@/components/responder/HeaderR.vue'
import TheNavR from '@/components/responder/TheNavR.vue'
import UserDetailR from '@/components/responder/UserDetailR.vue'
import TogglebarE from '@/components/reusables/TogglebarE.vue'

export default {
  name: 'reportR',

  components: {
    HeaderR,
    TheNavR,
    UserDetailR,
    TogglebarE
  },
  data () {
    return {
      department: 'Enginering',
      team: 'Production',
      email: 'Ifeanyi'
    }
    // user:
  }
}
</script>

<style scoped>
.container{
    width: 100%;
    overflow-x: hidden;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(0, 164, 219, 0.32);
}
.header1{
    padding: 7% 0 0 0;
}
.main-content{
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 75.42vw;
    height: 130vh;
    top: 60%;
    margin-left: 23%;
    margin-bottom: 5%;
    background-color: #F7F7F7;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25)
}
.scores{
    display: flex;
    width: 100%;
    margin: 0 10px;
}
.measurement{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
.score-header{
    padding: 20px 5px;
    text-align: start;
}
.promoters-wrappers{
    display: grid;
    grid-template-rows: 1fr 2fr;
    width: 100%;
}
.promoters{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.p-bar{
    background: rgba(0, 164, 219, 0.32);
    border: 1px solid #00A4DB;
    box-sizing: border-box;
    border-radius: 100px;
    width: 25vw;
    height: 2vh;
    margin-left: 5%;
    margin-top: 3%;
}
.p-barInside{
    background: #00A4DB;
    border: 1px solid #00A4DB;
    box-sizing: border-box;
    border-radius: 100px;
    width: 20vw;
    height: 1.88vh;
}
.p-score{
    height: 7.5vh;
    width: 4.66vw;
    background: rgba(0, 164, 219, 0.32);
    border-radius: 50%;
    line-height: 7vh;
    margin-left: 2%;
}
.passive{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.passive-bar{
    background: rgba(0, 164, 219, 0.32);
    border: 1px solid #00A4DB;
    box-sizing: border-box;
    border-radius: 100px;
    width: 25vw;
    height: 2vh;
    margin-left: 5%;
    margin-top: 3%;
    margin-right: 1rem;
}
.passive-inside{
    background: #00A4DB;
    border: 1px solid #00A4DB;
    box-sizing: border-box;
    border-radius: 100px;
    width: 15vw;
    height: 1.88vh;
}
.detractors{
    display: flex;
    justify-content: space-between;
}
.detractors-inside{
    background: #00A4DB;
    border: 1px solid #00A4DB;
    box-sizing: border-box;
    border-radius: 100px;
    width: 8vw;
    height: 1.88vh;
}
.passive-score{
   height: 7vh;
    width: 4.66vw;
    background: rgba(0, 164, 219, 0.32);
    border-radius: 50%;
    line-height: 7vh;
}
.result{
    display: grid;
    grid-auto-rows: 1fr 1fr;
    grid-gap: 5%;
    margin-top: 60px;
    margin-left: 50px;
    color: #00A4DB;
    justify-content: space-around;
}
.a-score{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
}
.decimal{
    background: #FFFFFF;
    border-radius: 5px;
    width: 15vw;
    height: 15.74vh;
}
.decimal p{
    margin-top: 1rem;
    margin-left: -2rem;
    width: 100%;
}
.active{
    height: 15.74vh;
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
}
.active p{
    margin-top: 1rem;
}
.responses{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
}
.percentage{
    background: #FFFFFF;
    border-radius: 5px;
    width: 15vw;
    height: 12.28vh;
}
.percentage p{
    margin-top: 1rem;
    width: 100%;
    margin-left: -2rem;
}
.active2{
    width: 12vw;
    background: #FFFFFF;
    border-radius: 5px;
    height: 12vh;
    margin-left: -1rem;
}
.active2 p{
    margin-top: 1rem;
}
.comments{
    width: 83.42vw;
    height: 48.66vh;
    border: 0.3px;
    box-sizing: border-box;
    padding-left: 0;
    text-align: start;
    padding: 10px 0px;
    margin-left: 20px;
}
.c-header{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 66vw;
    color: #000000;
    background: rgba(0, 0, 0, 0.06);
    padding: 20px;
}
.feedback{
    padding-top: 20px;
    height: 95%;
    width: 69vw;
    text-align: start;
    /* margin-bottom: 50%; */
    background:#FFFFFF;
    margin-top: -25px;
}
p{
    padding: 5px 40px;
}
</style>
