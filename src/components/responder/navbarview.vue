<template>
    <div>
        <div class="logo">
            <img src="../../assets/img/bfreeLogo.png" alt="Bfree Logo">
            <img src="../../assets/img/fidbak.png" alt="Fidbak Logo">
        </div>
        <div class="navs">
            <p class="home"><font-awesome-icon :icon="['fas', 'house']" class="home-icon"/><span class="home-text">Home</span></p>
            <p class="feedback"><font-awesome-icon :icon="['fas', 'comments']" class="feedback-icon"/><span class="feedback-text">Feedback</span></p>
            <p class="notification"><font-awesome-icon :icon="['fas', 'bell']" class="notification-icon" /> <span class="notification-text">Notification</span></p>
            <p class="report"><font-awesome-icon :icon="['fas', 'bar-chart']" class="report-icon"/><span class="report-text">Report</span></p>
        <div>
            <p class="logout"><font-awesome-icon :icon="['fas', 'sign-out']" class="logout-icon"/><span class="logout-text">Log Out</span></p>
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
