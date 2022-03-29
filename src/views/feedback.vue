<template>
<div class="feedBackMain">
<div class="mainGrid">
<!-- rectangle 59 hello bplade rectangle -->
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
<!-- top details -->
<div class="topDetails">
<div class="staffId">
<div class="iD">
<p>Staff ID</p>
</div>
<div class="frame">
<div class="siD">
<p>BFR00055</p>
</div>

</div>
</div>
<div class="accountM">
<div class="acc">
<p>Account Manager</p>
</div>
<div class="teamN"><p>Branch</p></div>
</div>
<div class="amEmail">
<div class="eTag"><p>Email</p></div>
</div>
<div class="emailAddress"><p>bolade@bfree.limited</p></div>
</div>
<!-- main body -->
<div class="mainBorder">
<!-- complaint box -->
<form>
<div class="complaintBox">
<div><p>Fill the form below to submit your complaints or issues</p></div>
<!-- first dropdown -->
<div class="departmentBox">
<div class="frame96">
<Select name="Department">
<option>Account Manager</option>

</Select>
</div>
</div>
<!-- 2nd dropdown -->
<div></div>
</div>
</form>
<!-- create poll box -->
<div class="pollBox">

</div>
</div>

<the-header />
<!-- nav container -->
<!-- <div class="navContainer"> -->
<!-- logo div -->
<!-- <div class="logo">
<div class="bfreeLogo">
<img src="..\assets\bfreeLogo.jpg">
</div>
<div class="fidbakLogo">
<img src="..\assets\fidbak.jpg" alt="logo">
</div>
</div>
<div class="frame59"> -->
<!-- homebar -->
<!-- <div class="homeBar">
<div class="homeIcon">
<font-awesome-icon :icon="['fas', 'home']"/>
</div>
<div class="homeP"><p>Home</p></div>
</div> -->
<!-- feedBackbar -->
<!-- <div class="feedbackBar">
<div class="feedbackIcon">
<font-awesome-icon :icon="['fas', 'user']"/>
</div>
<div class="feedbackP"><p>Feedback</p></div>
</div> -->
<!-- notification bar -->
<!-- <div class="notificationBar">
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
</div> -->
</div>
</div>

</template>

<script>
import TheHeader from "@/components/navbar/TheHeader.vue";

export default {
  name: "feedback",
  components: {
    TheHeader,
  },
};
</script>

<style >
*{
margin: 0px;
Padding: 0px;
}
/*styling for the overall page*/
.feedbackMain {
position: relative;
width: 1440px;
height: 1024px;
background: -o-linear-gradient(odeg, #FFFF, #FFFF), rgba(0, 164, 219, 0.32);
}
/*styling for nav container*/
.navContainer{
position: absolute;
width: 234px;
height: 1024px;
background-color: #E3F5FB;
top: 0px;
left: 0px;
}
/*logo styling*/
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
top: 34px;
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
.rectangle29 {
position: absolute;
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
left: 814px;
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
/*top detail CSS*/
.topDetails {
position: absolute;
width: 1123px;
height: 68px;
left: 274px;
top: 131px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
}
.staffId {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: static;
width: 123px;
height: 68px;
left: 0px;
top: 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 296px;
}
/*left: 0px is not moving this to the left, had to change*/
.iD {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
position: absolute;
width: 74px;
height: 30px;
left: 3px;
top: -10px;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
margin: 2px 0px;
}
.frame {
position: static;
width: 123px;
height: 36px;
left: 0px;
top: 32px;
flex: none;
order: 1;
flex-grow: 0;
margin: 2px 0px;
}
/*removed top measurement*/
.siD {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
position: absolute;
width: 98px;
height: 30px;
left: 0px;
top: 20px;
}
.accountM {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 183px;
height: 60px;
left: 200px;
top: 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 296px;
}
.acc{
position: absolute;
width: 183px;
height: 30px;
left: -150px;
top: -10px;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
}
.teamN {
position: absolute;
width: 71px;
height: 30px;
left: -140px;
top: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 0px;
}
.amEmail {
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
position: static;
width: 217px;
height: 60px;
left: 898px;
top: 0px;
flex: none;
order: 2;
flex-grow: 0;
margin: 0px 296px;
}
.eTag {
position: absolute;
width: 58px;
height: 30px;
left: 900px;
top: -10px;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px;
}
.emailAddress {
position: absolute;
width: 217px;
height: 30px;
left: 882px;
top: 25px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: #000000;
flex: none;
order: 1;
flex-grow: 0;
margin: 0px 0px;
}
/*CSS for main border*/
.mainBorder {
position: absolute;
width: 1131px;
height: 750px;
left: 266px;
top: 222px;
background-color: #FFFFFF;
border: 0.3px solid rgba(0, 0, 0, 0.63);
box-sizing: border-box;
}
.complaintBox {
position: absolute;
width: 531px;
height: 721px;
left: 14px;
top: 15px;
background: #F7F7F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.pollBox {
position: absolute;
width: 531px;
height: 721px;
left: 585px;
top: 15px;
background: #F7F7F7;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
