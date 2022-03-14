<template>
    <div id="grid-container">
        <div class="top-bar">
            <div class="logo">
                <!-- <img class="bfreelogo" src="../assets/bfreeLogo.jpg" alt="fidbak logo"><img src="../assets/FIDBAK.jpg" alt=""> -->
                <img src="../assets/logo.jpg" alt="fidbak logo">
            </div>
            <div class="top-nav">
                    <h3>Hello Bolade!</h3>
                    <div class="icons">
                        <!-- placeholder for icons -->
                        <p><font-awesome-icon :icon="['fas', 'search']"/></p>
                        <p><font-awesome-icon :icon="['fas', 'bell']"/></p>
                        <p><font-awesome-icon :icon="['fas', 'user-circle']"/></p>
                        <!-- replace line below with appropriate icon -->
                        <p><font-awesome-icon :icon="['fas', 'tools']"/></p>
                    </div>
            </div>
            </div>
            <!-- The body starts here and should have two grids -->
        <div class="body-container">
            <nav class="nav-bar">
                <div>
                <p class="home-icon"><font-awesome-icon :icon="['fas', 'house']"/> Home</p>
                <p class="bell-icons"><font-awesome-icon :icon="['fas', 'comments']"/>Feedback</p>
                <p class="bell-icons"><font-awesome-icon :icon="['fas', 'bell']"/> Notification</p>
                <p class="bell-icons"><font-awesome-icon :icon="['fas', 'bar-chart']"/>Report</p>
                </div>
                <div>
                    <p class="log-out-icon"><font-awesome-icon :icon="['fas', 'sign-out']"/>Log Out</p>
                </div>
            </nav>
            <div class="main-dashboard">
                <div class="user-details">
                    <h5 class="staff-id">Staff id<br> BFR00055</h5>
                    <h5>Account Manager<br> Branch</h5>
                    <h5>Email<br> bolade@bfree.limited</h5>
                </div>
                <div class="feedback-container">
                    <div class="feedbacks-box">
                        <h4>Feedbacks</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    </div>
                    <div class="notifications">
                        <h4>Notifications</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#grid-container{
    display: grid;
    grid-template-rows: 1fr 5fr;
    height: 100vh;
    grid-gap: none;
    position: relative;
}

.top-bar{
    display: grid;
    grid-template-columns: 1fr 5fr;
    width: 95vw;
    height: 15.789vh;
    /* box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.25); */
}

.logo{
    /* background-image: url(bfreelogo.jpg); */
    height: 15.789vh;
    background-color: #E3F5FB;
    justify-content: center;
    text-align: start;
    width: 14.1vw;
    line-height: 15.789vh;
    /* margin-left: 20px; */
}

.bfreelogo{
    margin-left: 20px;
    /* color: #E3F5FB; */
}

.top-nav{
    display: grid;
    grid-template-columns: 2fr 5fr;
    background-color: #F7F7F7;
    justify-content: center;
    align-items: center;
    grid-gap: 50%;
    width: 83.58098068350668vw;
}

h3{
    margin-left: 35px;
}

.icons{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 23.243647234678626vw;
    height: 10.047846889952153vh;
    background: rgba(0, 0, 0, 0.08);
    left: 1088px;
    top: 20px;
    /* position: absolute; */
    /* gap: 5px; */
}

.body-container{
    display: grid;
    grid-template-columns: 1fr 5fr;
    height: 147.52vh;
    width: 100%;
    /* position: fixed; */

}

.nav-bar{
    display: grid;
    grid-template-rows: 5fr 1fr;
    height: 147.52vh;
    width: 14.1vw;
    background-color: #E3F5FB;
}

.home-icon{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 8.77vh;
    position: relative;
    background-color: #00A4DB;
    justify-content: center;
    align-content: center;
    padding-left: 20px;
    color: #F7F7F7;
}

.bell-icons{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 8.77vh;
    position: relative;
    /* background-color: #00A4DB; */
    justify-content: center;
    align-content: center;
    padding-left: 20px;
    color: #00A4DB;

}

.log-out-icon{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    height: 8.77vh;
    position: relative;
    /* background-color: #00A4DB; */
    justify-content: center;
    align-content: center;
    padding-left: 20px;
    color: rgba(0, 0, 0, 0.71);
}

.main-dashboard{
    display: grid;
    grid-template-rows: 1fr 9fr;
    /* width: 100%; */
    height: 147.52vh;
    /* grid-gap: none; */
}

.user-details{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 12vh;
    width: 83.58098068350668vw;
    text-align: start;
    /* justify-content:stretch; */
    /* padding: 0%; */
    /* background-color: beige; */
}

.staff-id{
    margin-left: 35px;
}

.feedback-container{
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    width: 90vmax;
    /* position: absolute; */
}

.feedbacks-box{
    /* display: flex; */
    /* position: relative; */
    width: 75vmax;
    /* height: 350px; */
    height: 58vh;
    /* left: 0px;
    top: 0px; */
    margin-left: 20px;
    margin-right: 20px;
    text-align: start;
    text-indent: 20px;
    line-height: 21px;
    border-radius: 2px;
    padding: 5px;
    background: #FFFFFF;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /* margin-top: 2px;
    width: 100%; */
}

.notifications{
    /* display: grid; */
    position: relative;
    width: 75vmax;
    /* height: 350px; */
    /* height: 58.62646566164154vh; */
    /* left: 0px; */
    height: 58vh;
    /* top: 0px; */
    margin-left: 20px;
    margin-right: 20px;
    text-align: start;
    text-indent: 20px;
    line-height: 2.8vh;
    background-color: #FFFFFF;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

h4{
    height: 8.77vh;
    /* /* width: 84.45vw; */
    left: 0px;
    top: 0px;
    background-color: #00A4DB;
    text-align: start;
    justify-content: center;
    /* margin-left: 20px;
    margin-right: 20px; */
    text-indent: 20px;
    line-height: 8.77vh;
}

p:hover{
    text-decoration: underline #00A4DB 5px;
    /* color: ; */
}
</style>
