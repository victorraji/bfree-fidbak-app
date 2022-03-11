<template>
    <div id="grid-container">
            <!-- this is the side nav bar container -->
            <div class="side-nav">
                <div class="logo">
                    <img src="../assets/bfreeLogo.jpg" alt="bfree logo"><img src="../assets/fidbak.jpg" alt="fidbak log">
                </div>
                <div class="nav">
                <p class="home-icon"><font-awesome-icon :icon="['fas', 'house']"/> Home</p>
                <p class="bell-icons"><font-awesome-icon :icon="['fas', 'comments']"/>Feedback</p>
                <p class="bell-icons"><font-awesome-icon :icon="['fas', 'bell']"/> Notification</p>
                <p class="bell-icons"><font-awesome-icon :icon="['fas', 'bar-chart']"/>Report</p>
                </div>
                <div>
                    <p class="log-out-icon"><font-awesome-icon :icon="['fas', 'sign-out']"/>Log Out</p>
                </div>
            </div>
        <div class="main-body">
            <div class="top-nav">
                <h3 class="hello-Bolade">Hello Bolade!</h3>
                <div class="icons">
                        <!-- placeholder for icons -->
                    <p><font-awesome-icon :icon="['fas', 'search']"/></p>
                    <p><font-awesome-icon :icon="['fas', 'bell']"/></p>
                    <p><font-awesome-icon :icon="['fas', 'user-circle']"/></p>
                        <!-- replace line below with appropriate icon -->
                    <p><font-awesome-icon :icon="['fas', 'tools']"/></p>
                </div>
            </div>
            <div class="user-details">
                <h5 class="staff-id">Staff id<br> <strong class="bfr">BFR00055</strong></h5>
                <h5 class="am">Account Manager<br> <strong class="portfolio">Branch</strong></h5>
                <h5 class="email">Email<br> <strong class="bfr-mail">bolade@bfree.limited</strong></h5>
            </div>
        </div>
        <div>
            <div class="feedbacks-box">
                <h4 class="feedback-header">Feedbacks</h4>
                <div class="feedback-text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet officia ullam. Adipisci magni atque, fugiat, aut similique dolor iste eum sint </p>
                </div>
            </div>
            <div class="notifications">
                <h4 class="feedback-header">Notifications</h4>
                <div class="feedback-text">
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
</template>

<style scoped>
#grid-container{
    position: relative;
    width: 1440px;
    height: 1024px;
    background: linear-gradient(0deg, #F7F7F7, #F7F7F7), rgba(0, 164, 219, 0.32);
}

.side-nav{
    display: grid;
    grid-template-rows: 1fr 5fr;
    position: absolute;
    width: 232px;
    height: 1024px;
    left: 0px;
    top: 0px;
    background: #E3F5FB;
}

/* .nav{
    display: grid;
    grid-template-rows: 1fr 2fr 2fr 2fr 2fr;
    grid-gap: 50px;
} */

.logo{
    /* background-image: url("../assets/FIDBAK.jpg"); */
    position: relative;
    width: 150px;
    height: 32px;
    left: 24px;
    top: 34px;
}

/* .main-body{

} */

.top-nav{
    position: absolute;
    width: 1208px;
    margin-left: 232px;
    /* width: 1440px; */
    height: 99px;
    left: 0px;
    top: 0px;
    background: #F7F7F7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.am

.hello-Bolade{
    position: absolute;
    width: 149px;
    height: 33px;
    left: 75px;
    top: 34px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    /* identical to box height */
    color: #000000;

}

.icons{
    position: absolute;
    width: 300px;
    height: 63px;
    left: 800px;
    top: 20px;
    margin-right: 232px;
    background: rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
    top: 131px
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
    line-height: 30px;
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 2px 0px;
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
/* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 296px;
}

/* .bfr{
    position: absolute;
    width: 98px;
    height: 30px;
    left: 0px;
    top: 0px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px; */
    /* identical to box height */
    /* color: #000000;
} */

/* .am{} */

.feedbacks-box{
    position: absolute;
    width: 1125px;
    height: 350px;
    left: 273px;
    top: 227px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.notifications{
    position: absolute;
    width: 1125px;
    height: 333px;
    left: 274px;
    top: 607px;
    border-end-end-radius: 0px;
    background: #F7F7F7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.feedback-header{
        position: absolute;
        width: 1125px;
        height: 55px;
        left: 0px;
        top: 0px;
        line-height: 55px;
        text-align: start;
        color: #F7F7F7;
        background: #00A4DB;
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

.staff-id{
    margin-left: 35px;
}

p:hover{
    text-decoration: 5px underline #00A4DB;
}
</style>
