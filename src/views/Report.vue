<template>
  <div class="container">
      <HeaderR/>
      <div class="user-details">
          <!-- {{user}} -->
        <div class="id">
            <h3>Staff ID</h3>
            <p class="bfr">BFR00055</p>
        </div>
        <div class="job">
            <h3>Account Manager</h3>
            <p class="portfolio">Branch</p>
        </div>
        <div class="mail">
            <h3>Email</h3>
            <p class="mail-path">Ifeanyi@bfree.limited</p>
        </div>
        </div>
        <div class="reports">
            <div class="nps">
            <font-awesome-icon :icon="['fas', 'file']" class="nps-icon"/><br><span class="nps-text">NPS Report</span></div>
            <div class="poll">
            <font-awesome-icon :icon="['fas', 'file']" class="poll-icon"/><br><span class="poll-text">Engage Poll</span></div>
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

export default {
  name: 'reportR',

  components: {
    HeaderR
  },
  data () {
    return {
      welcome: 'Hello Ifeanyi!'
    }
    // user:
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.container{
    width: 100%;
    /* overflow-x: hidden; */
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(0, 164, 219, 0.32);
}
.user-details{
    display: flex;
    margin: 20px 250px 0 290px;
    width: 93.42vw;
    justify-content: space-between;
    align-items: flex-start;
    text-align: start;
}
.bfr{
    margin-left: -40px;
}
.portfolio{
    margin-left: -40px;
}
.mail-path{
    margin-left: -40px;
}
.reports{
    display: flex;
    height: 100%;
    margin: 4% 250px;
}
.nps{
    height: 74px;
    width: 150px;
    background: rgba(0, 164, 219, 0.27);
    border-radius: 5px;
    margin-left: 17px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
}
.nps-icon{
    padding: 10px;
    color: #00A4DB;
}
.nps-text{
    color: #00A4DB;
}
.poll{
    height: 74px;
    width: 150px;
    background: rgba(0, 164, 219, 0.07);
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    margin-left: 2%;
}
.poll-icon{
    padding: 10px;
    color: rgba(0, 0, 0, 0.28);;
}
.poll-text{
    color: rgba(0, 0, 0, 0.28);
}
strong{
    margin-top: 3%;
}
.main-content{
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 93.42vw;
    height: 97.63vh;
    margin-left: 20%;
    margin-bottom: 5%;
    background-color: #F7F7F7;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25)
}
.scores{
    display: flex;
    width: 50vw;
    margin: 0 10px;
}
.measurement{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
}
.score-header{
    padding: 20px 5px;
    text-align: start;
    /* margin-left: -370px; */
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
    width: 30.45vw;
    height: 12px;
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
    width: 30.45vw;
    height: 12px;
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
    width: 10vw;
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
    grid-gap: 10%;
    padding: 5% 10%;
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
    width: 16.71vw;
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
    width: 16.1vw;
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
    margin-left: 6px;
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
    margin-left: 20px;
    text-align: start;
    padding: 10px 0px;
}
.c-header{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 83.42vw;
    color: #000000;
    background: rgba(0, 0, 0, 0.06);
    padding: 20px;
}
.feedback{
    padding-top: 20px;
    height: 70%;
    width: 86.5vw;
    text-align: start;
    /* text-indent: 3%; */
    margin-bottom: 50%;
    background:#FFFFFF;
}
p{
    padding: 5px 40px;
}
</style>
