<template>
<!-- nav container -->
<div class="navContainer">
<!-- logo div -->
<div class="logo">
<div class="bfreeLogo">
<img src="..\..\assets\bfreeLogo.png" alt="bfreelogo">
</div>
<div class="fidbakLogo">
<img src="..\..\assets\fidbak.png" alt="logo">
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

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navContainer {
position: fixed;
width: 234px;
height: 1024px;
background-color: #E3F5FB;
top: 0px;
left: 0px;
}
.logo {
position: absolute;
width: 150px;
height: 32px;
left: 24px;
top: 34px;
}
.logo {
position: absolute;
width: 150px;
height: 32px;
left: 24px;
top: 20px;
margin: 5px 0px;
}
.bfreeLogo {
position: absolute;
left: 0%;
right: 77.91%;
top: 0%;
bottom: 0%;
}
.fidbakLogo{
position: absolute;
left: 25.77%;
right: 0%;
top: 22.22%;
bottom: 19.44%;
}
.frame59{
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 231px;
height: 286px;
left: 1px;
top: 99px;
}
.logoutButton{
display: flex;
flex-direction: row;
align-items: center;
padding: 40px 0px 40px 25px;
position: absolute;
width: 232px;
height: 64px;
top: 893px;
left: 0px;
}
.homeBar{
display: flex;
direction: row;
align-items: center;
padding: 40px 0px 40px 25px;
position: static;
width: 231px;
height: 64px;
left: 0px;
top: 0px;
flex: none;
order: 0;
/*changed CSS here too*/
flex-grow: 0;
margin: -10px -25px;

}
.homeIcon {
position: static;
width: 16px;
height: 16px;
left: 25px;
top: 24px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
color: #00A4DB;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
}

.homeP{
position: static;
width: 48px;
height: 24px;
left: 67px;
top: 20px;
color: #00A4DB;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 26px;
}
.feedbackBar{
display: flex;
flex-direction: row;
align-items: center;
padding: 40px 0px 40px 25px;
background: #00A4DB;
/*had to readjust some CSS on the figma to get this since the original CSS was outflowing*/
flex: none;
flex-grow: 0;
order: 1;
position: static;
width: 231px;
height: 1px;
left: 0px;
margin: -10px -25px;

}
.feedbackP{
position: static;
width: 48px;
height: 24px;
left: 67px;
top: 20px;
color: #FFFFFF;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 26px;
}

.feedbackIcon{
position: static;
width: 16px;
height: 16px;
left: 25px;
top: 24px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
}

.notificationBar{
display: flex;
direction: row;
align-items: center;
padding: 40px 0px 40px 25px;
position: static;
width: 231px;
height: 64px;
left: 0px;
top: 0px;
flex: none;
order: 2;
/*changed CSS here too*/
flex-grow: 0;
margin: -10px -25px;
}
.notificationIcon {
position: static;
width: 16px;
height: 16px;
left: 25px;
top: 24px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
color: #00A4DB;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
}
.notificationP {
position: static;
width: 48px;
height: 24px;
left: 67px;
top: 20px;
color: #00A4DB;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 26px;
}
.reportBar {
display: flex;
direction: row;
align-items: center;
padding: 40px 0px 40px 25px;
position: static;
width: 231px;
height: 0px;
left: 0px;
top: 222px;
flex: none;
order: 3;
/*changed CSS here too*/
flex-grow: 0;
margin: -10px -25px;
}
.reportIcon{
position: static;
width: 16px;
height: 16px;
left: 25px;
top: 24px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
color: #00A4DB;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
}

.reportP {
position: static;
width: 48px;
height: 24px;
left: 67px;
top: 20px;
color: #00A4DB;
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 26px;
}
.logOut{
display: flex;
flex-direction: row;
align-items: center;
padding: 40px 0px 40px 25px;
position: absolute;
width: 232px;
height: 64px;
left: 0px;
top: 550px;
margin: -10px -25px;
}
.logOutI {
position: static;
width: 16px;
height: 16px;
left: 25px;
top: 24px;
color: rgba(0, 0, 0, 0.43);
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 26px;
}
.logOutP {
position: static;
left: 28.88%;
right: 44.4%;
top: 31.25%;
bottom: 31.25%;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: rgba(0, 0, 0, 0.71);
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 26px;
}
</style>
