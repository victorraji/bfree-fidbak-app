<template>
  <div class="container">
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
            <div class="nps"><font-awesome-icon :icon="['fas', 'file']" class="nps-icon"/><br><span class="nps-text">NPS Report</span></div>
            <div class="poll"><font-awesome-icon :icon="['fas', 'file']" class="poll-icon"/><br><span class="poll-text">Engage Poll</span></div>
        </div>
  </div>
</template>

<script>
export default {

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
    background: rgba(0, 164, 219, 0.07);
    /* background: rgba(0, 164, 219, 0.27); */
    border-radius: 5px;
    margin-left: 17px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
}
.nps-icon{
    padding: 10px;
    color: rgba(0, 0, 0, 0.28);;
}
.nps-text{
    color: rgba(0, 0, 0, 0.28);;
}
.poll{
    height: 74px;
    width: 150px;
    background: rgba(0, 164, 219, 0.27);
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    margin-left: 2%;
}
.poll-icon{
    padding: 10px;
    color: #00A4DB;
}
.poll-text{
    color: #00A4DB;
}
strong{
    margin-top: 3%;
}
</style>
