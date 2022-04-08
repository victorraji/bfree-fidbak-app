<template>
<header>
<div class="headerBlock">
<div class="headerI"><h1>{{welcome}}</h1></div>
<div class="headerIcons">
<div class="searchIcon">
<font-awesome-icon :icon="['fas', 'search']"/></div>
<div class="notification68I" data-number="4">
<font-awesome-icon :icon="['fas', 'fa-bell']"/></div>
<div class="userCircle">
<font-awesome-icon :icon="['fas', 'user-circle']"/>
</div>
<div class="cogIcon">
<font-awesome-icon :icon="['fas', 'fa-cog']" />
</div>
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
}
.headerBlock {
display: flex;
justify-content: space-between;
/* position: fixed; */
mask-position: fixed;
background: #F7F7F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height: 15.06vh;
align-items: center;
margin: 0 250px;
width: 93.42vw;
}
.headerI {
color: #000000;
font-family: 'Poppins';
font-style: normal;
padding: 40px;
}
.headerIcons {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-content: space-around;
align-items: center;
background: rgba(0, 0, 0, 0.08);
border-radius: 5px;
height: 63px;
width: 311px;
margin: 30px;
}
.searchIcon {
position: relative;
padding: 20%;
/* margin-right: 30px; */
}
/* .cogIcon {
position: relative;
} */
.userCircle{
    position: relative;
    padding-right: 250px;
}
.notification68I {
position: relative;
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
</style>
