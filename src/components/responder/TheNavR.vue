<template>
<nav class="nav-wrapper">
  <div class="wrapper">
    <div class="logo">
            <img src="../../assets/bfreeLogo.png" alt="Bfree Logo" class="bfreeLogo"/>
            <img src="../../assets/fidbak.png" alt="Fidbak Logo" class="fidbakLogo"/>
    </div>
      <nav class="nav">
        <ul>
            <div class="listStyle">
                <router-link style="text-decoration: none;" to="/HomeRView">
                    <div class="home-icon"><font-awesome-icon :icon="['fas', 'house']" /></div>
                    <div class="list"><li><span class="homeText">Home</span></li></div>
                </router-link>
            </div>
            <div class="listStyle">
                <router-link style="text-decoration: none;" to="/notR">
                    <font-awesome-icon :icon="['fas', 'bell']" class="notification-icon" />
                    <li class="list"><span class="noText"> Notification</span></li>
                </router-link>
            </div>
            <div class="listStyle">
                <router-link style="text-decoration: none;" to="/ReportR">
                    <font-awesome-icon :icon="['fas', 'area-chart']" class="report-icon"/>
                    <li class="list"> <span class="reporText">Report</span></li>
                </router-link>
            </div>
        </ul>
        <div class="logOut">
            <router-link style="text-decoration: none;" to="/LogoutR">
                <font-awesome-icon :icon="['fas', 'sign-out']" class="logout-icon"/>
                <li class="list"> <span class="exiText">LogOut</span></li>
            </router-link>
        </div>
      </nav>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBarR'
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
        position: fixed;
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
            left: 2px;
            right: 2px;
            padding: 1px 0 0 1px;
            margin: 2rem 0 0 1rem;
            .fidbakLogo{
                padding: 0 0 3px 0;
            }
        }
        .nav{
            display: grid;
            grid-template-rows: 2fr 1fr;
            text-align: start;
            height: 90vh;
            width: 50px;
            margin-top: 22%;
            ul{
                display: grid;
                grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
                height: 35vh;
            }
            .logOut{
                @include font(18px, 600, 27px, $pri-color);
                list-style-type: none;
                padding: 10px 10px 10px 20px;
                transition-property: color, background;
                transition-duration: 0.3s;
                display: flex;
                align-items: center;
                // display: flex;
                    justify-content: space-between;
                    width: 100%;
                    .logout-icon{
                        color: rgba(0, 0, 0, 0.71);
                    }
                    .exiText{
                        padding:0 0 0 20px ;
                        color: rgba(0, 0, 0, 0.71);
                    }
            }
            .listStyle{
                display: flex;
                // width: 100%;
                flex-direction: column;
                list-style-type: none;
                text-align: start;
                justify-content: space-between;
                a.router-link-active{
                background: $pri-color;
                width: 400%;
                .home-icon, .homeText,.feedback-icon, .fedText, .notification-icon, .noText,.report-icon, .reporText{
                    color: $white;
                }
                }
            }
            a {
                @include font(18px, 600, 27px, $pri-color);
                display: block;
                text-decoration: none;
                padding: 10px 10px 10px 22px;
                transition-property: color, background;
                transition-duration: 0.3s;
                display: flex;
                align-items: center;
                width: 100%;
                .homeText{
                    padding: 0 0 0 25px;
                }
                .noText{
                    padding: 0 0 0 28px;
                }
                .reporText{
                    padding: 0 0 0 25px;
                }
            }
        }
    }
    @media screen and (max-width: 900px) {
        .wrapper{
            .logo{
                .bfreeLogo{
                    width: 30px;
                }
                .fidbakLogo{
                    width: 50px;
                }
            }
            .listStyle{
                a{
                    @include font(14px, 400, 20px, $pri-color);
                    width: 70%;
                }
            }
        }
    }
    @media screen and (max-width: 300px){
        .wrapper{
            .logo{
                display: flex;
                .bfreeLogo{
                    width: 10px;
                }
                .fidbakLogo{
                    width: 40px;
                    padding: 0 0 5px 3px;
                }
            }
            .listStyle{
                a{
                    @include font(12px, 400, 20px, $pri-color);
                    width: 70%;
                }
            }
        }
    }
}
</style>
