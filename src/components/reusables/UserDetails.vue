<template>
  <div class="user-details">
        <div></div>
        <div></div>
        <div class="id">
            <!-- <p>{{department}}</p> -->
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
</template>

<script>
export default {
  name: 'UserDetails'
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
