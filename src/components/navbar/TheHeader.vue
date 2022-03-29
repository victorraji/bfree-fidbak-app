<template>
    <header class="header">
            <div class="navContainer">
<!-- logo div -->
            <div class="logo">
                <div class="bfreeLogo">
                <img src="..\assets\bfreeLogo.jpg">
                </div>
                <div class="fidbakLogo">
                <img src="..\assets\fidbak.jpg" alt="logo">
                </div>
                </div>
                <div class="frame59">
                <!-- homebar -->
                <div class="homeBar">
                <div class="homeIcon">
                <font-awesome-icon :icon="['fas', 'home']"/>
                </div>
                <div class="homeP"><p>Home</p></div>
                </div>
                <!-- feedBackbar -->
                <div class="feedbackBar">
                <div class="feedbackIcon">
                <font-awesome-icon :icon="['fas', 'user']"/>
                </div>
                <div class="feedbackP"><p>Feedback</p></div>
                </div>
                <!-- notification bar -->
                <div class="notificationBar">
                <div class="notificationIcon">
                <font-awesome-icon :icon="['fas', 'bell']"/>
                </div>
                <div class="notificationP"><p>Notification</p></div>
                </div>
                <div class="reportBar">
                <div class="reportIcon">
                <font-awesome-icon :icon="['fas', 'area-chart']"/>
                </div>
                <div class="reportP"><p>Report</p></div>
                </div>
                </div>
                <div class="logOut">
                <div class="logOutI">
                <font-awesome-icon :icon="['fas', 'sign-out']"/>
                </div>
                <button class="logOutP">Log Out</button>
            </div>
</div>
    </header>
</template>
