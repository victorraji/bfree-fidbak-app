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
                        <p><img src="../assets/bfreeLogo.jpg" alt="bfree logo"><img src="../assets/FIDBAK.jpg" alt="fidbak log"></p>
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
                <select name="Feedabacks" id="">
                    <option value="">Tech</option>
                    <option value="">QA</option>
                    <option value="">HR</option>
                </select>
                <!-- <div class="dropdown-container">
                    <p>Feedback</p>
                    <p>responses</p>
                    <p>Sort date</p>
                    <p>Department</p>
                </div> -->
            </div>
            <div class="note-container">
                <div class="recieved-note-header">
                    <h4 class="header-style">Notifications</h4>
                </div>
                <div class="recieved-notes">

                </div>
            </div>
    </div>
</template>

<style scoped>

</style>
