<template>
    <div id="body">
            <!-- this is the side nav bar container -->
            <div class="nav">
                <div class="top-nav">
                    <h3 class="hello-Bolade">Hello Bolade!</h3>
                    <div class="icons">
                            <!-- placeholder for icons -->
                        <font-awesome-icon :icon="['fas', 'search']" class="search-icon"/>
                        <font-awesome-icon :icon="['fas', 'bell']" class="bell"/>
                        <font-awesome-icon :icon="['fas', 'user-circle']" class="profile-icon"/>
                            <!-- replace line below with appropriate icon -->
                        <font-awesome-icon :icon="['fas', 'fa-cog']" class="settings-icon"/>
                    </div>
                </div>
                <div class="side-nav">
                    <div class="logo">
                        <p><img src="../assets/bfreeLogo.jpg" alt="bfree logo"><img src="../assets/fidbak.jpg" alt="fidbak log"></p>
                    </div>
                    <div>
                    <div class="nav-icons">
                        <p class="home"><font-awesome-icon :icon="['fas', 'house']" class="home-icon"/><router-link to="/LandingPage"><span class="home-text">Home</span></router-link></p>
                        <p class="feedback"><font-awesome-icon :icon="['fas', 'comments']" class="feedback-icon"/><span class="feedback-text">Feedback</span></p>
                        <p class="notification"><font-awesome-icon :icon="['fas', 'bell']" class="notification-icon" /> <span class="notification-text">Notification</span></p>
                        <p class="report"><font-awesome-icon :icon="['fas', 'bar-chart']" class="report-icon"/><span class="report-text">Report</span></p>
                    </div>
                    <!-- <div> -->
                        <p class="logout"><font-awesome-icon :icon="['fas', 'sign-out']" class="logout-icon"/><span class="logout-text">Log Out</span></p>
                    <!-- </div> -->
                    </div>
                </div>
            </div>
        <div class="main-body">
            <div class="user-details">
                <h5 class="staff"><span class="staff-id">Staff id</span><br> <strong class="id">BFR00055</strong></h5>
                <h5 class="am"><span class="job-title">Account Manager</span><br> <span class="portfolio">Branch</span></h5>
                <h5 class="email"><span class="email-holder">Email</span><br> <span class="bfree-mail">bolade@bfree.limited</span></h5>
            </div>
        </div>
            <div class="feedback-container">
                <div class="recieved-feedback-header">
                    <h4 class="header-style">Feedbacks</h4>
                </div>
                <div class="recieved-feedback">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                </div>
            </div>
            <div class="note-container">
                <div class="recieved-note-header">
                    <h4 class="header-style">Notifications</h4>
                </div>
                <div class="recieved-notes">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                </div>
            </div>
    </div>
</template>

<style scoped>
#body{
    position: relative;
    /* width: 1440px; */
    width: 106.03829160530192vw;
    /* height: 1024px; */
    height: 156.8147013782542vh;
    background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
}

.side-nav{
    position: absolute;
    width: 232px;
    height: 1024px;
    left: 0px;
    top: 0px;
    background: #E3F5FB;
}

.logo{
    position: absolute;
    width: 150px;
    height: 32px;
    left: 24px;
    top: 34px;
}

.nav-icons{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    position: absolute;
    width: 231px;
    height: 286px;
    left: 1px;
    top: 99px;
}

.home{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px 0px 40px;
    position: static;
    width: 231px;
    height: 5px;
    left: 0px;
    top: 0px;
    background: #00A4DB;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 10px 0px;
}

.home-icon{
    position: static;
    width: 16px;
    height: 16px;
    left: 25px;
    top: 24px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 26px;
}

.home-text{
    position: static;
    width: 48px;
    height: 24px;
    left: 67px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 26px;
}

.feedback{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px 0px 40px;
    position: static;
    width: 231px;
    height: 16px;
    left: 0px;
    top: 74px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 10px 0px;
}

.feedback-icon{
    position: static;
    width: 16px;
    height: 16px;
    left: 25px;
    top: 24px;
    color: #00A4DB;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 26px;
}

.feedback-text{
    position: static;
    width: 16px;
    height: 16px;
    left: 25px;
    top: 24px;
    color: #00A4DB;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 26px;
}

.notification{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px 0px 40px;
    position: static;
    width: 231px;
    height: 16px;
    left: 0px;
    top: 148px;
    color: #00A4DB;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 10px 0px;
}

.notification-icon{
    position: static;
    width: 16px;
    height: 16px;
    left: 25px;
    top: 24px;
    color: #00A4DB;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 26px;
}

.notification-text{
    position: static;
    width: 102px;
    height: 24px;
    left: 67px;
    top: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 18px;
}

.report{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px 0px 40px;
    position: static;
    width: 231px;
    height: 64px;
    left: 0px;
    top: 222px;
    color: #00A4DB;
    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 10px 0px;
}

.report-icon{
    position: static;
    width: 16px;
    height: 16px;
    left: 25px;
    top: 24px;
    color: #00A4DB;;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 26px;
}

.report-text{
    position: static;
    width: 62px;
    height: 24px;
    left: 67px;
    top: 20px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #00A4DB;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 26px;
}

.logout{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 40px 0px 40px;
    position: absolute;
    width: 232px;
    height: 64px;
    left: 0px;
    top: 893px;
}

.logout-icon{
    position: static;
    width: 16px;
    height: 16px;
    left: 25px;
    top: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 26px;
}

.logout-text{
    position: static;
    left: 28.88%;
    right: 44.4%;
    top: 31.25%;
    bottom: 31.25%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.71);
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 26px;
}

.top-nav{
    position: absolute;
    width: 1440px;
    height: 99px;
    left: 0px;
    top: 0px;
    background: #F7F7F7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.hello-Bolade{
    position: absolute;
    width: 149px;
    height: 33px;
    left: 274px;
    top: 34px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    justify-content: center;
    line-height: 33px;
    color: #000000;
}

.icons{
    position: absolute;
    width: 311px;
    height: 63px;
    left: 1088px;
    top: 20px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
}

.search-icon{
    position: absolute;
    width: 24px;
    height: 24px;
    left: 30px;
    top: 19.5px;
}

.bell{
    position: absolute;
    width: 24px;
    height: 32px;
    left: 104px;
    top: 11px;
}

.profile-icon{
    position: absolute;
    width: 24px;
    height: 24px;
    left: 183px;
    top: 19.5px;
    box-sizing: border-box;
}

.settings-icon{
    position: absolute;
    width: 27px;
    height: 27px;
    left: 257px;
    top: 17.5px;
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

.staff-id{
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

.am{
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
    width: 71px;
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

.feedback-container{
    position: absolute;
    width: 1125px;
    height: 350px;
    left: 273px;
    top: 227px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.recieved-feedback-header{
    position: absolute;
    width: 1125px;
    height: 55px;
    left: 0px;
    top: 0px;
    background: #00A4DB;
}

.recieved-feedback{
    position: absolute;
    width: 1123px;
    height: 278px;
    left: 1px;
    top: 55px;
    margin-top: 30px;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
}

.note-container{
    position: absolute;
    width: 1125px;
    height: 333px;
    left: 274px;
    top: 607px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.recieved-note-header{
    position: absolute;
    width: 1125px;
    height: 55px;
    left: 0px;
    top: 0px;
    background: #00A4DB;
}

.recieved-notes{
    position: absolute;
    width: 1086px;
    height: 248px;
    left: 19px;
    top: 55px;
    margin-top: 30px;
}

.header-style{
    position: absolute;
    width: 88px;
    height: 24px;
    text-align: start;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-transform:capitalize;
    line-height: 24px;
    color: #F7F7F7;
    margin-left: 20px;
}

p:hover{
    text-decoration: 5px underline #00A4DB;
}

/* img{
    background-color: #00A4DB;
} */
</style>
