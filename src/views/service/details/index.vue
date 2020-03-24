<template>
  <div class="details">
    <div class="infoWrapper">
      <div class="flo_l">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="photo" alt="">
      </div>
      <div class="flo_l content text-left ">
        <p class="font36 bold colorff">
          黄晓敏
          <span class="font28 colorff _class">主治医师</span>
        </p>
        <p class="font26 title colorff">北京大学第三医师</p>
        <p class="font22 colorTheme label flo_l">可开处方</p>
      </div>
      <div class="clearfloat"></div>
      <div class="commentsBox">
        <div class="text-center itemStyle">
          <p class="font24">好评率</p>
          <p class="font30 bold">100%</p>
        </div>
        <div class="text-center itemStyle">
          <p class="font24">接单数</p>
          <p class="font30 bold">1120</p>
        </div>
        <div class="text-center itemStyle">
          <p class="font24">平均响应</p>
          <p class="font30 bold">1小时内</p>
        </div>
      </div>
    </div>
    <div class="skillWrapper">
      <div class="flo_l" >
        <img src="@/assets/image/serviceIcon/meritIcon.png" class="icon" alt="">
      </div>
      <div class="title flo_l">
        <p class="font28 color6"><span class="color3 bold">擅长：</span>呼吸系统疾病、消化系统疾病、新生儿黄 痘、过敏性疾病、手足口病、孢疹性口炎</p>
      </div>
    </div>
    <div class="skillWrapper">
      <div class="flo_l">
        <img src="@/assets/image/serviceIcon/introIcon.png"  class="icon" alt="">
      </div>
      <div class="title flo_l">
        <p class="font28 color6">
          <span class="color3 bold">简介：</span>
          30年一直从事儿科临床工作，积累了丰富 的工作经验。
        </p>
      </div>
    </div>
    <div class="text-center" style=" border-bottom: 10px solid #F7F7F7;padding-bottom: 6px;">
      <img src="@/assets/image/serviceIcon/downIcon.png" width="17" height="9" alt="">
    </div>
    <div class="serviceWrapper">
      <p class="font30 bold color3 title">问诊服务</p>
      <div class="itemStyle">
      <img src="@/assets/image/serviceIcon/picTIcon.png" class="icon flo_l" alt="">
      <div class="flo_l " style="margin-left: 12px;" @click="gotoPage('/service/onlineConsult')">
        <p class="font32 color3 bold flo_l" >图文咨询</p>
        <p class="font24 colorff iconT inline-block">义诊</p>
        <p class="font24 colorff iconTV inline-block">限时折扣</p>
        <p class="font26 color9" style="margin-top: 4px;">通过文字、图片向医生咨询</p>
      </div>
      <div class="flo_r text-right">
        <span class="font30 colorb"><span class="Price">0.00元</span>/次</span>
        <p class="font24 oPrice">￥15.00</p>
      </div>
    </div>
      <div class="itemStyle" @click="mobileFn">
        <img src="@/assets/image/serviceIcon/videoIcon.png" class="icon flo_l" alt="">
        <div class="flo_l " style="margin-left: 12px; ">
          <p class="font32 color3 bold" >视频咨询</p>
          <p class="font26 color9" style="margin-top: 4px;">在约定的时间内与医生视频交流</p>
        </div>
        <div class="text-center laber colorff font26">
          未开通
        </div>
      </div>
    </div>
    <div class="serviceWrapper">
      <p class="font30 bold color3 title">诊后服务</p>
      <div class="itembBox flo_l text-center" >
        <img src="@/assets/image/serviceIcon/caseIcon.png"  alt="" class="image">
        <div class="font24 color6">我的病历</div>
      </div>
    </div>
    <div class="evaluateWrapper">
      <TheEvaluate></TheEvaluate>
    </div>
    <p style="height: 50px;"></p>
    <div class="fnBox" :class="showFn?'showFn':'hideFn'">
      <div class="_mobileFn colorff flo_r" @click="mobileFn">
        <p class="font26">电话问诊</p>
        <span class="font20">60.00元/15分钟</span>
      </div>
      <div class="_picFn colorff flo_r" @click="gotoPage('/service/onlineConsult')" >
        <p class="font26">图文问诊</p>
        <span class="font20">0.00元/次</span>
      </div>
    </div>
  </div>
</template>
<script>
import TheEvaluate from './evaluate'
import { Dialog } from 'vant'
// import TheServiceDetails from './service-details'
export default {
  components: {
    TheEvaluate
    // TheServiceDetails
  },
  data () {
    return {
      scroll: '',
      showFn: true
    }
  },
  methods: {
    mobileFn () {
      Dialog({ message: '此功能正在开发中...', confirmButtonColor: '#00BD75' })
    },
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    focus () {
      this.$router.push({path: '/service/list-search'})
    },
    gotoLink (url) {
      // window.localtion.href = url
      window.open(url, '_blank')
    },
    menu () {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop
      console.log(this.scroll)
      // if (this.scroll > 380) {
      this.showFn = true
      // } else {
      // this.showFn = false
      // }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu)
  }
}
</script>
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .details{
    .infoWrapper{
      padding: 40px;
      background:linear-gradient(90deg,rgba(0,189,117,1) 0%,rgba(0,189,117,1) 100%);
      .photo{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid #ffffff;
      }
      .content{
        width: 76%;
        padding: 6px 22px;
        ._class{
          margin-left: 22px;
        }
        .title{
          color: #A0E8CC;
          margin: 4px 0;
        }
        .label{
          margin-top: 6px;
          background: #f3f4f5;
          padding: 4px 14px;
          border-radius:27px;
        }
      }
      .commentsBox{
        width:670px;
        height:120px;
        background:rgba(137,137,137,.2);
        border-radius:60px;
        color: white;
        margin-top: 18px;
        .itemStyle{
          width: 30%;
          display: inline-block;
          margin-top: 26px;
        }
      }
    }
    .skillWrapper{
      padding: 30px 40px 22px 40px;
      overflow: hidden;
      .icon{
        width: 67px;
        height: 67px;
        border-radius: 50%;
      }
      .title{
        width: 87%;
        margin-left: 20px;
        margin-top: 14px;
      }
    }
    .serviceWrapper{
      padding: 30px;
      overflow: hidden;
      .title{
        padding-left: 14px;
        position: relative;
        margin-bottom: 20px;
        &:before{
          content: '';
          left: 0px;
          top: 6px;
          width: 6px;
          height: 28px;
          position: absolute;
          background: #00BD75;
        }
      }
      .itemStyle{
        box-shadow: 1px 1px 12px #e7e7e7;
        padding: 43px 28px;
        margin-top: 30px;
        overflow: hidden;
        position: relative;
        box-shadow:0px 2px 10px 0px rgba(192,192,192,0.5);
        .icon{
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        .iconT,.iconTV{
          background:linear-gradient(90deg,rgba(20,217,142,1) 0%,rgba(0,189,117,1) 100%);
          border-radius:4px;
          padding: 1px 12px;
          margin: 0 12px;
        }
        .iconTV{
          margin-left: 2px;
          background:linear-gradient(90deg,rgba(245,175,51,1) 0%,rgba(236,150,10,1) 100%);
        }
        .Price{
          color: #F88D0C;
        }
        .oPrice{
          color: #B8B8B8;
          text-decoration: line-through;
        }
        .laber{
          background: #D8D8D8;
          width: 200px;
          height: 38px;
          line-height: 38px;
          position: absolute;
          right: -42px;
          top: 22px;
          transform: rotate(35deg);
        }
      }
      .itembBox{
        width: 24%;
        margin-right: 12px;
        border-radius: 12px;
        padding: 12px 0;
        .image{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 8px;
        }
      }
    }
    .fnBox{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 110px;
      background:rgba(255,255,255,1);
      box-shadow:0px -1px 2px 0px rgba(199,199,199,0.5);
      ._mobileFn, ._picFn{
        width:200px;
        height:78px;
        background:linear-gradient(180deg,rgba(255,161,101,1) 0%,rgba(241,173,67,1) 100%);
        border-radius:39px;
        text-align: center;
        margin-top: 16px;
        margin-right: 22px;
        margin-left: 12px;
        p{
          margin-top: 10px;
          margin-bottom: -16px;
        }
      }
      ._picFn{
        background:linear-gradient(360deg,rgba(56,211,176,1) 0%,rgba(0,189,117,1) 100%);
      }
    }
    .showFn {
      animation: 2s opacity1 0s 1;
      -webkit-animation: 2s opacity1 0s 1;
      -moz-animation: 2s opacity1 0s 1;
      animation-fill-mode: forwards;
    }
    .hideFn{
      animation: 2s opacity2 0s 1;
      -webkit-animation: 2s opacity2 0s 1;
      -moz-animation: 2s opacity2 0s 1;
      animation-fill-mode: forwards;
    }
    @keyframes opacity1 {
      0% {
        opacity: 0
      }
      100% {
        opacity: 1;
      }
    }
    @-webkit-keyframes opacity1 {
      0% {
        opacity: 0
      }
      100% {
        opacity: 1;
      }
    }
    @-moz-keyframes opacity1 {
      0% {
        opacity: 0
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes opacity2 {
      0% {
        opacity: 1
      }
      100% {
        opacity: 0;
      }
    }
    @-webkit-keyframes opacity2 {
      0% {
        opacity: 1
      }
      100% {
        opacity: 0;
      }
    }
    @-moz-keyframes opacity2 {
      0% {
        opacity: 1
      }
      100% {
        opacity: 0;
      }
    }
  }
</style>
