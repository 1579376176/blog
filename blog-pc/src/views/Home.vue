<template>
         <div class="opening-soon-info">
            <div class="wrapper">
                <div class="header">
                    <div class="logo">
                        <!-- <a class="brand-logo" href="index.html">首页</a> -->
                    </div>
                    
                </div>
                <div class="coming-block">
                    <h1>瀚文的万事屋</h1>
                    <p class="parahny">如果一个人既差又不努力，还有什么资格唉声叹气。<br>No matter when you start, the important thing is not to stop after you start; no matter when you end, the important thing is not to regret after you end.<br><br></p>
                    <img src="../imgs/wsw.jpg" alt=""><br><br><br><br><br><br>
                    <h2>个人介绍</h2>
                    <p class="parahny">&nbsp;&nbsp; 我叫崔瀚文，今年22岁，目前在哈尔滨理工大学软件工程专业就读，拥有扎实的JS基础，XXXXXXXXXXXXXXXX良好的编程风格;熟悉XXXXXXXXXXXX开发;熟悉XXXXXXXXXXXXXXXXXXXXX框架，了解XXXXXXX; 熟悉XXXXXXXXXXX等，熟悉基于XXXXXXXX下的软件开发。在校期间有多次社会实践经历。虽然实际工作经验不是很足，但是在学校几年以来培养了我充分的自信心和敬业精神以及扎实的学科基础知识和较强的专业技能，在学校生活中，我严格要求自己，自觉、遵纪、守时。本人坦诚且有责任心，有独立进取的品性，勤于动手、善于动脑，适应新环境能力很强。</p>
                    <div class="w3l-btn text-align">
                        <p> </p>
                        <p> </p>
                        <h3>为什么叫做万事屋</h3>
                        <p class="parahny">出自个人喜欢的一部动漫，一个平时无所事事，邋里邋遢，但是一旦在关键时刻，就会让人非常安心，让人可以安心的把任何事情交给他的一个“小混混”开的店，我也想成为这样的人，所以起名叫做万事屋。</p>
                        <button v-on:click="access">进入我的万事屋</button>
                        <!-- <a href="#url" class="btn-style btn">进入万事屋</a> -->
                    </div>
                    <div class="countdown">
                        <div class="countdown__days">
                            <div class="number"></div>
                            <span class>Years</span>
                        </div>

                        <div class="countdown__hours">
                            <div class="number"></div>
                            <span class>Month</span>
                        </div>

                        <div class="countdown__minutes">
                            <div class="number"></div>
                            <span class>Date</span>
                        </div>

                        <div class="countdown__seconds">
                            <div class="number"></div>
                            <span class>Day</span>
                        </div>
                    </div>
                    <form action="#" method="post">
                        <!-- <input type="text" name="email" required="" placeholder="Subscribe to get notified"> -->
                        <!-- <button class="btn1"><i class="fa fa-paper-plane" aria-hidden="true"></i></button> -->
                    </form>
                </div>
                <div class="copyright-footer">
                    <p>Copyright &copy; 2021.Company name All rights reserved.</p>
                </div>
            </div>
        </div>
</template>


    <script>
    export default {
        methods:{
            access(){
                this.$router.push("/about");
            },
        }
    }
            
</script>


<style scoped>


html {
    scroll-behavior: smooth;
}

body,
html {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
}

* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

.d-grid {
    display: grid;
}

.d-flex {
    display: flex;
    display: -webkit-flex;
}

.text-center {
    text-align: center;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

button,
input,
select {
    -webkit-appearance: none;
    outline: none;
}

button,
.btn,
select {
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
}

a {
    text-decoration: none;
}

iframe {
    border: none;
}

ul {
    margin: 0;
    padding: 0
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0
}

p {
    color: #485460;
}

.p-relative {
    position: relative;
}

.p-absolute {
    position: absolute;
}

.p-fixed {
    position: fixed;
}

.p-sticky {
    position: sticky;
}

.btn,
button,
.actionbg {
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    -o-border-radius: 2px;
    -ms-border-radius: 2px;
}

.btn:hover,
button:hover {
    transition: 0.5s ease;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    -ms-transition: 0.5s ease;
    -moz-transition: 0.5s ease;
}

/*--/wrapper--*/
.wrapper {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

@media (min-width: 576px) {
    .wrapper {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .wrapper {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .wrapper {
        max-width: 960px;
    }
}

@media (min-width: 1200px) {
    .wrapper {
        max-width: 1140px;
    }
}

.wrapper-full {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

/*--//wrapper--*/
.opening-soon-info {
    background: url(../imgs/bg.jpg) no-repeat center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    min-height: calc(100vh - 0px);
    position: relative;
    z-index: 0;
    display: grid;
    align-items: center;
    padding: 30px 0;
    
}

.opening-soon-info:before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}

.opening-soon-info .header {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 10px;
}

.opening-soon-info .top-hny-logo {
    padding: 2em 0;
}

.opening-soon-info a.brand-logo {
    color: #fff;
    font-weight: 400;
    font-size: 36px;
    text-transform: capitalize;
    position: relative;
    font-family: 'Pacifico', cursive;
    letter-spacing: 1px;
}

.opening-soon-info .coming-block {
    margin: 80px auto 60px;
    max-width: 600px;
    text-align: center;
    padding: 1em 0;
}
.opening-soon-info h1 {
    margin: 0;
    font-size: 75px;
    font-weight: 400;
    color: #fff;
    line-height: 96px;
    text-transform: capitalize;
    margin-bottom: 36px;
    font-family: 'Pacifico', cursive;
}
.opening-soon-info h2 {
    margin: 0;
    font-size: 50px;
    font-weight: 400;
    color: #fff;
    line-height: 96px;
    text-transform: capitalize;
    margin-bottom: 36px;
    font-family: 'Pacifico', cursive;
}
.opening-soon-info h3 {
    margin: 0;
    font-size: 35px;
    font-weight: 400;
    color: #fff;
    line-height: 96px;
    text-transform: capitalize;
    margin-bottom: 36px;
    font-family: 'Pacifico', cursive;
}

p.parahny {
    line-height: 26px;
    opacity: 0.9;
}

.opening-soon-info .countdown {
    margin: auto;
    display: table;
    font-size: 28px;
    font-weight: 500;
}

.opening-soon-info .number{
    font-family: 'Pacifico', cursive;
}

.opening-soon-info .countdown>div {
    float: left;
    min-width: 100px;
    margin: 40px 10px 0px 0px;
    font-size: 60px;
    line-height: 70px;
    font-weight: 700;
    color: #fff;
    padding: 0px 15px;
}

.opening-soon-info .countdown>div:last-child {
    border-right: none;
}

.opening-soon-info .btn {
    width: 100%;
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    text-transform: capitalize;
    border: none;
    outline: none;
    padding: 15px 30px;
    border-radius: 6px;
    color: #fff;
    background: #FF9800;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
}
.opening-soon-info .btn:hover {
    background: #e98c03;
}
.opening-soon-info p {
    color: #eee;
    font-size: 17px;
    font-weight: 400;
}

.opening-soon-info .countdown span {
    position: relative;
    display: block;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    color: #eee;
}
.copyright-footer {
    text-align: center;
}
.copyright-footer p a{
    color:#fff;
    font-weight: 600;
}

.copyright-footer p a:hover {
    color: #FF9800;
}
.w3l-copy-right-left a {
    font-size: 14px;
    line-height: 20px;
    color: #f9f9f9;
}

.opening-soon-info input[type="text"] {
    padding: 1em 1.5em;
    border: solid 1px #FFFFFF;
    width: 88%;
    margin-right: 10px;
    font-size: 17px;
    color: #999999;
    outline: none;
    display: inline-block;
    background: #ffffff;
    border-radius: 6px;
}
.opening-soon-info form {
    max-width: 500px;
    margin: 0 50px;
    margin-top: 40px;
    display: flex;
}
button {
    color: #ffffff;
    padding: 1em 1.5em;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    background: #FF9800;
    border: solid 1px #FF9800;
    transition: 0.3s all;
    -webkit-transition: 0.3s all;
    -moz-transition: 0.3s all;
    -o-transition: 0.3s all;
    -ms-transition: 0.3s all;
    border-radius: 6px;
}
button:hover {
    background: #e98c03;
}


@media (max-width: 991px) {
    .opening-soon-info h1 {
        font-size: 66px;
        line-height: 76px;
    }
}
@media (max-width: 768px) {
    .opening-soon-info h1 {
        font-size: 60px;
        line-height: 70px;
    }
}
@media (max-width: 736px) {
    .opening-soon-info form {
        margin: 0px 0px;
        margin-top: 40px;
    }
    .opening-soon-info h1 {
        font-size: 55px;
        line-height: 65px;
    }
    .opening-soon-info a.brand-logo {
        font-size: 30px;
    }
}

@media (max-width: 600px) {
    .opening-soon-info .countdown>div {
        font-size: 50px;
    }
    .opening-soon-info .coming-block {
        margin: 60px auto 50px;
        max-width: 500px;
        text-align: center;
        padding: 1em 0;
        display: grid;
    }
    ul.social li {
        margin-left: 6px;
    }
}

@media (max-width: 480px) {
    .opening-soon-info .countdown>div {
        min-width:80px;
    }
    .opening-soon-info h1 {
        font-size: 48px;
        line-height: 58px;
    }
    .opening-soon-info .header {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0 6px;
    }
}

@media (max-width: 415px) {
    .opening-soon-info a.brand-logo {
        font-size: 28px;
    }
    .opening-soon-info .countdown>div {
        min-width: 80px;
        margin-right: 0;
        font-size: 45px;
        line-height: 55px;
    }
    .opening-soon-info h1 {
        font-size: 45px;
        line-height: 55px;
    }
    .opening-soon-info p {
        font-size: 16px;
    }
}

@media (max-width: 384px) {
    .opening-soon-info .btn {
        font-size: 16px;
        line-height: 28px;
        padding: 15px 25px;
    }
    .opening-soon-info h1 {
        font-size: 40px;
        line-height: 50px;
    }
    .opening-soon-info .coming-block {
        margin: 50px auto 30px;
    }

    .opening-soon-info .countdown span {
        font-size: 10px;
        letter-spacing: 1px;
    }

    .opening-soon-info .countdown>div {
        font-size: 40px;
        line-height: 50px;
        margin: 20px 0px 0px;
    }
    .opening-soon-info a.brand-logo {
        font-size: 24px;
    }
    .opening-soon-info .btn {
        font-size: 15px;
        line-height: 28px;
        padding: 13px 23px;
    }
    .opening-soon-info input[type="text"] {
        font-size: 16px;
    }
    .opening-soon-info input[type="text"], button {
        padding: .7em 1.5em;
    }
}

@media (max-width: 376px) {
    .opening-soon-info .countdown>div {
        font-size: 35px;
        line-height: 45px;
        padding: 0 10px;
        min-width: 70px;
    }
    .opening-soon-info {
        padding: 20px 0;
    }
    .opening-soon-info h1 {
        font-size: 35px;
        line-height: 45px;
        margin-bottom: 20px;   
    }
    .opening-soon-info input[type="text"] {
        padding: 1em 1.2em;
        font-size: 15px;
    }
    .opening-soon-info p {
        font-size: 15px;
    }
}

@media (max-width: 320px) {
    .opening-soon-info .countdown>div {
        font-size: 22px;
        min-width: 68px;
    }
}


</style>
