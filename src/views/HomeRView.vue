<template>
    <div class="body">
        <HeaderR/>
        <TheNav/>
        <!-- <UserDetailR/> -->
        <!-- <div class="wrapper">
            <div class="header">
                <h4>Recent Activity</h4>
            </div>
            <div class="active">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta ipsa fugit molestias iure impedit, numquam et quae quisquam </p>
            </div>
        </div> -->
    </div>
</template>

<script>
import HeaderR from '@/components/responder/HeaderR.vue'
import TheNav from '@/components/navbar/TheNav.vue'
// import UserDetailR from '@/components/responder/UserDetailR.vue'

export default {
  name: 'HomeR',

  components: {
    HeaderR,
    TheNav
    // UserDetailR
  }

}
</script>

<style scoped>
.body{
    background: #f7f7f7;
}
.wrapper{
    height:730px;
    width: 70%;
    padding: 10px 0;
    margin-left: 26%;
    margin-top: 5%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media screen and (min-width: 700px) {
    .wrapper{
    /* height:2000px; */
    width: 70%;
    padding: 10px 0;
    margin-left: 26%;
    margin-top: 5%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.header{
    width: 100%;
    height: 6.5vh;
    background: #00A4DB;
    color: #fff;
    text-align: start;
    text-indent: 4%;
    line-height: 6.5vh;
    margin-bottom: 2rem;
}
.active{
    text-align: start;
    font-style: normal;
    font-weight: 500;
    margin-left: 4%;
    line-height: 30px;
}
}
@media screen and (min-width: 1000px) {
    .wrapper{
    /* height:2000px; */
    width: 70%;
    padding: 10px 0;
    margin-left: 26%;
    margin-top: 5%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}
</style>
