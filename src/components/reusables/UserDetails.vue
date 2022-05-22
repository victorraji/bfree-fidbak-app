<template>
  <div class="user-details">
        <div class="id">
            <!-- <p>{{department}}</p> -->
            <h3>Staff ID</h3>
            <p class="details">BFR00055</p>
        </div>
        <div class="job">
            <h3>Account Manager</h3>
            <p class="details">Branch</p>
        </div>
        <div class="mail">
            <h3>Email</h3>
            <p class="details">Bolade@bfree.limited</p>
        </div>
 </div>
</template>

<script>
export default {
  name: 'UserDetails'
}
</script>

<style lang="scss" scoped>
@import "/scss/style.scss";
.user-details{
    display: flex;
    margin-left: 10%;
    width: 90%;
    padding: 0 0 0 250px;
    justify-content: space-between;
    align-items: start;
    text-align: start;
    @media screen and (max-width:1500px) {
    .user-details{
        display: flex;
        flex-direction: column;
        justify-content: start;
        /* grid-template-rows: 1fr 1fr 1fr; */
        height: 40vh;
        text-align: start;
        padding: 10% 0 0 350px;
    }
    .details{
        text-align: start;
    }
}
@media screen and (max-width:900px) {
    // width: 60%;
    margin: 25px 0 0 -10px;
    .details{
        text-align: start;
    }
}
@media screen and (max-width:450px) {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        text-align: start;
        justify-content: start;
        height: 25vh;
        margin: 17% 0 0 -150px;
}
}
h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
}
.details{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    text-align: start;
}
</style>
