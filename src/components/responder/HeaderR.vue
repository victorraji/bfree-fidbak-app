<template>
  <header>
    <div class="headerBlock">
      <div></div>
      <div class="headerI">
        <h1>{{welcome}}</h1>
      </div>
      <div class="headerIcons">
          <font-awesome-icon :icon="['fas', 'search']"/>
          <router-link style="text-decoration: none; color: #00000040;" to="/notR1"><span class="notification68I" data-number="4"><font-awesome-icon :icon="['fas', 'fa-bell']"/></span></router-link>
          <font-awesome-icon :icon="['fas', 'user-circle']"/>
          <font-awesome-icon :icon="['fas', 'fa-cog']" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderR',
  data () {
    return {
      welcome: 'Hello Ifeanyi!'
    }
  }
}
</script>

<style scoped>
header{
  position: sticky;
  top: 0;
  left: 0;
}
.headerBlock {
display: flex;
justify-content: space-between;
position: fixed;
top: 0;
mask-position: fixed;
background: #F7F7F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height: 99px;
align-items: center;
margin: 0;
width: 100%;
}
.headerI {
width: 20vw;
color: #000000;
font-family: 'Poppins';
font-style: normal;
padding: 40px 40px 40px 0px;
margin: 0 0 0 -130px;
}
.headerIcons {
display: flex;
/* grid-template-columns: 1fr 1fr 1fr 1fr; */
justify-content: space-around;
align-items: center;
background: rgba(0, 0, 0, 0.08);
border-radius: 5px;
height: 63px;
width: 311px;
margin: 30px;
}
.notification68I {
position: relative;
/* margin-bottom: 10%; */
animation: notification 2s infinite;
}
.notification68I::after {
content: attr(data-number);
background-color: red;
position: absolute;
width: 20px;
border-radius: 50%;
top: -6px;
color: #F7F7F7;
transform: translateX(-3px);
}
@keyframes notification {
5% {transform: rotate(10deg);}
10% {transform: rotate(-10deg);}
15% {transform: rotate(10deg);}
20% {transform: rotate(0deg);}
}
@media screen and (max-width: 900px) {
.headerI {
  width: 15vw;
  font-size: 15px;
  padding: 60px 40px 60px 100px;
  }
}
@media screen and (max-width: 600px){
.headerI {
  width: 10vw;
  font-size: 8px;
  padding: 60px 40px 40px 100px;
  }
}
</style>
