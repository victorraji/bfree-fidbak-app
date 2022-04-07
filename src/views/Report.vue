<template>
  <div class="container">
      <HeaderR/>
      <div class="user-details">
          <!-- {{user}} -->
        <div class="id">
            <h3>Staff ID</h3>
            <p>BFR00055</p>
        </div>
        <div class="job">
            <h3>Account Manager</h3>
            <p>Branch</p>
        </div>
        <div class="mail">
            <h3>Email</h3>
            <p>Ifeanyi@bfree.limited</p>
        </div>
        </div>
        <div class="reports">
            <div class="nps"><font-awesome-icon :icon="['fas', 'file']" class="nps-icon"/><br><span class="nps-text">NPS Report</span></div>
            <div class="poll"><font-awesome-icon :icon="['fas', 'file']" class="poll-icon"/><br><span class="poll-text">Engage Poll</span></div>
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
                        <div class="decimal">5.33<br> average NPS score</div>
                        <div class="active">10<br> Comments</div>
                    </div>
                    <div class="responses">
                        <div class="percentage">76%<br> Response Rate</div>
                        <div class="active">32 <br>Responses</div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div class="comments">
                <h4 class="c-header">Comments</h4>
                <div>
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
    // user
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
.container{
    overflow-x: hidden;
    background-color: #FFFFFF;
}
.user-details{
    display: flex;
    margin: 0 250px;
    justify-content: space-between;
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
.main-content{
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: #F7F7F7;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25)
}
.scores{
    display: flex;
    margin: 0 250px;
}
.measurement{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
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
    height: 7vh;
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
    grid-gap: 8%;
    padding: 5% 10%;
    color: #00A4DB;
    justify-content: center;
    align-items: center;
}
.a-score{
    display: flex;
    justify-content: space-evenly;
}
.responses{
    display: flex;
}
.percentage{
    background: #FFFFFF;
    border-radius: 5px;
    width: 180px;
    height: 100px;
}
.decimal{
    background: #FFFFFF;
    border-radius: 5px;
    width: 180px;
    height: 100px;
}
</style>
