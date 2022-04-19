<template>
    <div class="reports">
        <div class="nps"><font-awesome-icon :icon="['fas', 'file']" class="nps-icon"/><br><span class="nps-text">NPS Report</span></div>
        <router-link to="/ReportEngage"><div class="poll"><font-awesome-icon :icon="['fas', 'file']" class="poll-icon"/><br><span class="poll-text">Engage Poll</span></div></router-link>
    </div>
</template>

<script>
export default {
  name: 'Togglebar'
}
</script>

<style scoped>
.reports{
    display: flex;
    top: 30%;
    height: 100%;
    width: 100%;
    margin: 4% 0 2% 25%;
}
.nps{
    height: 74px;
    width: 150px;
    background: rgba(0, 164, 219, 0.27);
    border-radius: 5px;
    margin-left: 17px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
}
.nps-icon{
    padding: 10px;
    color: #00A4DB;
}
.nps-text{
    color: #00A4DB;
}
.poll{
    height: 74px;
    width: 150px;
    background: rgba(0, 164, 219, 0.07);
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    margin-left: 2%;
}
.poll-icon{
    padding: 10px;
    color: rgba(0, 0, 0, 0.28);;
}
.poll-text{
    color: rgba(0, 0, 0, 0.28);
}
strong{
    margin-top: 3%;
}
</style>
