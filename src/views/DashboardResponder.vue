<template>
    <div class="body">
            <!-- this is the side nav bar container -->
            <HomeHeader/>
        <div class="main-body">
            <div class="user-details">
                <h5 class="staff"><span class="dept">Department</span><br> <strong class="id">Enginering</strong></h5>
                <h5 class="team"><span class="job-title">Team</span><br> <span class="portfolio">Product Manager</span></h5>
                <h5 class="email"><span class="email-holder">Email</span><br> <span class="bfree-mail">ifeanyi@bfree.limited</span></h5>
            </div>
        </div>
            <div class="activity-wrapper">
                <div class="activity-header">
                    <h4 class="header-style">Recent Activity</h4>
                </div>
                <div class="activity">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam praesentium aspernatur</p>
                </div>
            </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/navbar/HomeHeader.vue'

export default {
  name: 'HeaderView',

  components: {
    HomeHeader
  }
}
</script>

<style scoped>
.container{
    position: relative;
    width: 1440px;
    height: 1024px;
    background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
}
.user-details{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    position: absolute;
    width: 1123px;
    height: 68px;
    left: 273px;
    top: 131px;
}

.staff{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 123px;
    height: 68px;
    left: 0px;
    top: 0px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 20px;
}
.dept{
    position: static;
    width: 74px;
    height: 30px;
    left: 0px;
    top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 50px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: start;
    margin: 2px 0px;
}
.id{
    position: static;
    width: 123px;
    height: 36px;
    left: 0px;
    top: 32px;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    /* align-items: flex-start; */
    text-align: start;
    margin: 2px 0px;
}
.team{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 183px;
    height: 60px;
    left: 419px;
    top: 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 250px;
}
.job-title{
    position: static;
    width: 183px;
    height: 30px;
    left: 0px;
    top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 50px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: start;
    margin: 0px 0px;
}
.portfolio{
    position: static;
    width: 100%;
    height: 30px;
    left: 0px;
    top: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-align: start;
    margin: 0px 0px;
}
.email{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: static;
    width: 217px;
    height: 60px;
    left: 898px;
    top: 0px;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 70px;
}
.email-holder{
    position: static;
    width: 58px;
    height: 30px;
    left: 0px;
    top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 50px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: start;
    margin: 0px 0px;
}
.bfr-mail{
    position: static;
    width: 217px;
    height: 30px;
    left: 0px;
    top: 30px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    text-align: start;
    margin: 0
}
.activity-wrapper{
    position: absolute;
    width: 1125px;
    height: 707px;
    left: 273px;
    top: 227px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.activity-header{
    position: absolute;
    width: 1125px;
    height: 55px;
    left: 0px;
    top: 0px;
    background: #00A4DB;
}
.activity{
    position: absolute;
    width: 1123px;
    height: 100%;
    left: 1px;
    top: 55px;
    margin-top: 30px;
    line-height: 50px;
    /* filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25)); */
}
.header-style{
    position: absolute;
    width: 100%;
    height: 24px;
    text-align: start;
    font-family: 'Poppins';
    font-style: normal;
    /* font-weight: 500; */
    font-size: 16px;
    justify-content: center;
    line-height: 55px;
    color: #F7F7F7;
    margin-left: 20px;
}
</style>
