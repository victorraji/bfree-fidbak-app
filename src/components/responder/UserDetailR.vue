<template>
    <div class="topDetails">
        <div class="staffId">
            <div class="iD">
                <h3>Department</h3>
            </div>
            <div class="siD">
                <p>{{department}}</p>
            </div>
        </div>

    <div class="accountM">
        <div class="acc"><h3>Team</h3></div>
        <div class="teamN"><p>{{team}}</p></div>
    </div>
    <div class="amEmail">
        <div class="eTag"><h3>Email</h3></div>
        <div class="emailAddress"><p>{{email}}</p></div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'UserDetailR',
  data () {
    return {
      department: 'Engineering',
      team: 'Product Manager',
      email: 'ifeanyi@bfree.africa'
    }
  }
}
</script>

<style scoped>
.topDetails {
display: flex;
justify-content: space-between;
height: 99px;
width: 70%;
text-align: start;
margin-left: 22%;
background-color: #fff;
padding: 15px;
}
</style>
