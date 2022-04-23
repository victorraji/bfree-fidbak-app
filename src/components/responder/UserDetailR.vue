<template>
  <div class="user-details">
        <div></div>
        <div></div>
        <div class="id">
            <!-- <p>{{department}}</p> -->
            <h3>Department</h3>
            <p class="bfr">Enginering</p>
        </div>
        <div class="job">
            <h3>Team</h3>
            <p class="portfolio">Product Manager</p>
        </div>
        <div class="mail">
            <h3>Email</h3>
            <p class="mail-path">Ifeanyi@bfree.limited</p>
        </div>
 </div>
</template>

<script>
export default {
  name: 'UserDetailR'
}
</script>

<style scoped>
.user-details{
    display: flex;
    margin-left: 0;
    width: 85%;
    top: 0;
    margin-top: -500px;
    justify-content: space-between;
    align-items: start;
    text-align: start;
}
.bfr{
    text-align: start;
}
.portfolio{
    text-align: start;
}
.mail-path{
    text-align: start;
}
</style>
