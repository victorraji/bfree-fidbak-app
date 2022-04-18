<template>
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
</template>

<script>
export default {
  name: 'HeadD'
}
</script>

<style scoped>
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
</style>
