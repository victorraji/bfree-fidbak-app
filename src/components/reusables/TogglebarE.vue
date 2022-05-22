<template>
    <div class="reports">
        <router-link to="/ReportR">
            <div class="nps"><img src="../../assets/report.png" class="nps-icon"/><br><span class="nps-text">NPS Report</span></div>
        </router-link>
        <router-link to="pollR">
            <div class="poll"><img src="../../assets/poll.png" class="nps-icon"/><br><span class="nps-text"> Engage Poll</span></div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'ToggleE'
}
</script>

<style lang="scss" scoped>
@import "scss/style.scss";
.reports{
    @include style(normal, 'Poppins');
    display: flex;
    top: 30%;
    height: 100%;
    width: 100%;
    margin: 4% 0 2% 25%;
    .nps{
        height: 74px;
        width: 150px;
        background: rgba(0, 164, 219, 0.07);
        border-radius: 5px;
        font-weight: 600;
    }
    a.router-link-active{
        height: 74px;
        width: 150px;
        background: rgba(0, 164, 219, 0.07);
        border-radius: 5px;
        color: #00A4DB;
        border-bottom: 5px solid #00A4DB;
        font-weight: 600;
        .nps-icon, .nps-text{
        padding: 10px;
        color: #00A4DB;
    }
    }
}
.poll{
    height: 74px;
    width: 150px;
    background: rgba(0, 164, 219, 0.07);
    border-radius: 5px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
}
.poll-icon, .poll-text{
    padding: 10px;
    color: rgba(0, 0, 0, 0.28);
}
strong{
    margin-top: 3%;
}
a{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.28);
}
.nps-icon, .nps-text{
        padding: 10px;
        color: rgba(0, 0, 0, 0.28);
    }
</style>
