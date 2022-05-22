<template>
<div class="minnavBox">
<div class="logo">
<div class="bfreeLogo">
<img src="../../assets/bfreeLogo.png" alt="bfreelogo">
</div>
<div class="fidbakLogo">
<img src="../../assets/fidbak.png" alt="logo">
</div>
</div>

<div class="mainnavBox">
<ul>
<li><router-link to="/HomeRView" class="active"><div class="homeBar">
<div class="homeIcon">
<font-awesome-icon :icon="['fas', 'home']"/>
</div>
<div class="homeP"><p>Home</p></div>
</div></router-link></li>
<!-- notification bar -->
<li><router-link to="/notR"><div class="notificationBar">
<div class="notificationIcon">
<font-awesome-icon :icon="['fas', 'bell']"/>
</div>
<div class="notificationP"><p>Notification</p></div>
</div></router-link></li>
<!-- report -->
<li><router-link to="/ReportR"><div class="reportBar">
<div class="reportIcon">
<font-awesome-icon :icon="['fas', 'area-chart']"/>
</div>
<div class="reportP"><p>Report</p></div>
</div></router-link></li>
</ul>
</div>
<!-- logout  -->
<div>
<router-link to="/LogoutR"><div class="logOut">
<div class="logOutI">
<font-awesome-icon :icon="['fas', 'sign-out']"/>
</div>
<button class="logOutP">Log Out</button>
</div></router-link>
</div>
<!-- main end tag -->
</div>
</template>

<script>
export default {
  name: 'NavbarR',
  data () {
    return {
      hover: true
    }
  }
}
</script>

<style scoped>
* {
margin: 0px;
padding: 0px;
}
.minnavBox {
display: flex;
flex-direction: column;
justify-content: space-between;
background: #E3F5FB;
width: 232px;
height: 1024px;

}
.logo {
display: flex;
padding: 65px 40px;
}
.fidbakLogo {
margin: 6px;
}
.mainnavBox {
margin-top: -700px;
}
.homeBar {
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 10px 5px 0px;
width: 231px;
height: 64px;
left: 0px;
top: 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
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

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 40px;
}

.homeP{
position: static;
width: 48px;
height: 24px;
left: 67px;
top: 20px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin-left: -20px;
}

.notificationBar{
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 10px 5px 0px;
width: 231px;
height: 64px;
left: 0px;
top: 0px;
flex: none;
order: 1;
flex-grow: 1;
margin: 0px 0px;
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

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 40px;
}
.notificationP {
position: static;
width: 48px;
height: 24px;
left: 67px;
top: 20px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin-left: -20px;
}
.reportBar {
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 10px 5px 0px;
width: 231px;
height: 64px;
left: 0px;
top: 0px;
flex: none;
order: 2;
flex-grow: 2;
margin: 0px 0px;
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

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 40px;
}

.reportP {
position: static;
width: 48px;
height: 24px;
left: 67px;
top: 20px;

font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
flex: none;
order: 1;
flex-grow: 0;
margin-left: -20px;
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
top: 893px;
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
a.router-link-active{
background:black;
}
.mainnavBox ul li a {
text-decoration: none;
color: #32829c;
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
