<template>
<div class="topDetails">
<div class="staffId">
<div class="iD">
<p>Department</p>
</div>
<div class="siD">
<p>{{department}}</p>
</div>
</div>

<div class="accountM">
<div class="acc"><p>Team</p></div>
<div class="teamN"><p>{{team}}</p></div>
</div>
<div class="amEmail">
<div class="eTag"><p>Email</p></div>
<div class="emailAddress"><p>{{email}}</p></div>
</div>
</div>
</template>

<script>
export default {
  name: 'topHeaderR.vue',
  data () {
    return {
      department: 'Engineering',
      team: 'Product Manager',
      email: 'ifeanyi@bfree.africa'
    }
  }
}
</script>

<style>
.topDetails {
display: flex;
justify-content: space-between;
height: 99px;
align-items: center;
padding: 15px;
}
.iD {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #000000;
}
.siD {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 1px;
}
.acc{
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
width: 74px;
height: 30px;
}
.teamN {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 1px;
color: #000000;
}

.eTag {
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #000000;
width: 74px;
height: 30px;
}
.emailAddress {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 1px;
color: #000000;
}
</style>
