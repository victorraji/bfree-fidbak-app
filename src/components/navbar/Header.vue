<template>
  <div class="rectangle29">
<div class="topIcons">
<div class="boladeT"><p>Hello Bolade!</p></div>
<!-- top detail icons -->
<div class="frame53">
<div class="searchIcon">
<font-awesome-icon :icon="['fas', 'search']"/>
</div>
<div class="notification68">
<div class="notification68I">
<font-awesome-icon :icon="['fas', 'fa-bell']"/>
</div>
<div class="number4">
<div class="number">
<div class="four">4</div>
</div>
</div>
</div>
<div class="userCircle">
<font-awesome-icon :icon="['fas', 'user-circle']"/>
</div>
<div class="cogIcon">
<font-awesome-icon :icon="['fas', 'fa-cog']"/>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.rectangle29 {
position: fixed;
width: 1440px;
height: 99px;
left: 0px;
top: 0px;
background: #F7F7F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.topIcons {
position: absolute;
width: 1125px;
height: 63px;
left: 274px;
top: 20px;
}
.boladeT {
position: absolute;
width: 149px;
height: 33px;
left: 0px;
top: 14px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 33px;
color: #000000;
}

.frame53 {
position: absolute;
width: 311px;
height: 63px;
left: 750px;
top: 0px;
background: rgba(0, 0, 0, 0.08);
border-radius: 5px;
}
.searchIcon {
position: absolute;
width: 24px;
height: 24px;
left: 30px;
top: 19.5px;
color: #000000;
}
.notification68 {
position: absolute;
width: 24px;
height: 32px;
left: 104px;
top: 11px;
}
.notification68I {
position: absolute;
left: 0%;
right: 20.69%;
top: 32.43%;
bottom: 0%;
order: 2px solid #000000;;
}

.number4 {
position: absolute;
width: 20px;
height: 26px;
left: 9px;
top: 0px;
}

.number {
position: absolute;
width: 20px;
height: 20px;
left: 9px;
top: 3px;
background: #CD2D2D;
}
.four {
position: absolute;
width: 12px;
height: 26px;
left: 13px;
top: 0px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
}
.userCircle {
position: absolute;
width: 24px;
height: 24px;
left: 183px;
top: 19.5px;
color: #000000;
}
.cogIcon {
position: absolute;
width: 27px;
height: 27px;
left: 257px;
top: 17.5px;
color: #ffffff;
opacity: .4;
}
</style>
