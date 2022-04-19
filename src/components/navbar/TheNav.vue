<template>
<nav class="nav-wrapper">
  <div class="wrapper">
    <div class="logo">
        <img src="../../assets/bfreeLogo.png" alt="Bfree Logo" />
        <img src="../../assets/fidbak.png" alt="Fidbak Logo">
    </div>
      <nav class="nav">
        <ul>
            <div class="active">
                <li class="list"><a href="/Dashboard"><font-awesome-icon :icon="['fas', 'house']" class="home-icon"/> <span class="homeText">Home</span></a></li>
            </div>
            <div class="listStyle"><li class="list"><a href="/feedback"><font-awesome-icon :icon="['fas', 'comments']" class="feedback-icon"/><span class="fedText">Feedback</span></a></li></div>
            <div class="listStyle"><li class="list"><a href="/not"><font-awesome-icon :icon="['fas', 'bell']" class="notification-icon" /> <span class="noText"> Notification</span></a></li></div>
            <div class="listStyle"><li class="list"><a href="/report"><font-awesome-icon :icon="['fas', 'bar-chart']" class="report-icon"/> <span class="reporText">Report</span></a></li></div>
        </ul>
        <div class="logout">
            <li class="list"><a href="/logout"><font-awesome-icon :icon="['fas', 'sign-out']" class="logout-icon"/> <span class="exiText">Log Out</span></a></li>
        </div>
      </nav>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar'
//   data () {
//     return {
//       color: red;
//       }
//   }
//   data: function () {
//     return {
//       items: [
//         { message: 'Home' },
//         { message: 'Feedback' },
//         { message: 'Notification' },
//         { message: 'Report' },
//         { message: 'Logout' }
//       ]
//     }
//   }
}
</script>

<style lang="scss" scoped>
@import "/scss/style.scss";
.nav-wrapper{
    position: sticky;
    top: 0;
    left: 0;
    .wrapper{
        display: grid;
        grid-template-rows: 1fr 3fr;
        position: relative;
        border-radius: 5px;
        top: 0;
        left: 0;
        width: 20%;
        height: 100vh;
        overflow: hidden;
        background: $nav-color;
        align-items: center;
        justify-content: start;
        .logo{
            width: 100%;
            padding: 0;
            text-align: start;
        }
        .nav{
            display: grid;
            grid-template-rows: 4fr 1fr;
            grid-row-gap: 10%;
            text-align: start;
            height: 90vh;
            width: 100%;
            margin-top: 106%;
            ul{
                display: grid;
                grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
                list-style-type: none;
                height: 30vh;
                .active{
                    display: flex;
                    justify-content: space-between;
                    background-color: $pri-color;
                    padding-top: 10%;
                    width: 320%;
                    &:first-child {
                    color: $white;
                }
                    .list{
                        padding-left: 10%;
                    }
                }
            }
            li{
                display: flex;
                list-style-type: none;
            }
            .logout{
                width: 300%;
                margin-top: -20px;
                color: $alt-color;
                margin-left: -70px;
                .exiText{
                    margin-left: 2%;
                }
            }
            .list{
                display: flex;
                justify-content: space-between;
                padding-left: 30%;
                // width: 100%;
                .homeText{
                padding-left: 55%;
                }
                .fedText{
                    padding-left: 30%;
                }
                .noText{
                    padding-left: 35%;
                }
                .reporText{
                    padding-left: 50%;
                }
            }
        }
    }
}
</style>
