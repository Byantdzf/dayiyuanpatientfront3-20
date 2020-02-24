<template>
  <div class="details">
<!--    <div class="imgWrapper">-->
<!--      <img class="img" src="https://via.placeholder.com/780x480" alt="">-->
<!--      <p class="tips">深圳高级保姆，高级家教，好几工程师深圳高级保姆，高级家教，好几工程师</p>-->
<!--    </div>-->
<!--    <div class="timeWrapper">-->
<!--      <div class="price">￥-->
<!--        <span class="num">88</span>/小时</div>-->
<!--      <div class="label">服务时间</div>-->
<!--      <div class="times">2018-01-01 14:20:10</div>-->
<!--    </div>-->
<!--    <div class="infoWrapper">-->
<!--      <img class="img" src="https://via.placeholder.com/120x120" alt="">-->
<!--      <div class="info">-->
<!--        <div class="label">-->
<!--          <span class="name">陈不二</span>-->
<!--          <span class="total">成交：36件</span>-->
<!--        </div>-->
<!--        <div class="address">-->
<!--          <i class="fa fa-map-marker"></i>深圳市龙华区留仙大道彩悦大夏</div>-->
<!--        <div class="tel">-->
<!--          <i class="fa fa-phone"></i>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <div class="infoWrapper">
      <div class="flo_l">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="photo" alt="">
      </div>
      <div class="flo_l content text-left ">
        <p class="font16 bold colorff">
          黄晓敏
          <span class="font12 colorff">主治医师</span>
<!--          <van-rate v-model="item.value" size="10"/>-->
        </p>
        <p class="font10 title colorff">北京大学第三医师</p>
        <p class="font10 label flo_l">可开处方</p>
      </div>
      <div class="clearfloat"></div>
      <div class="commentsBox">
        <div class="text-center itemStyle">
          <p class="font10">好评率</p>
          <p class="font20 bold">100%</p>
        </div>
        <div class="text-center itemStyle">
          <p class="font10">接单数</p>
          <p class="font20 bold">1120</p>
        </div>
        <div class="text-center itemStyle">
          <p class="font10">平均响应时间</p>
          <p class="font20 bold">1小时内</p>
        </div>
      </div>
    </div>
    <div class="skillWrapper">
      <div class="flo_l" style="margin-top: -16px">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="icon" alt="">
      </div>
      <div class="title flo_l">
        <p class="font12"><span class="font14 bold">擅长：</span>阿萨德加快哈萨克的哈就，开始登记卡是妒忌卡萨丁尽快哈，砂进口的哈尽快哈三等奖会撒娇开会健康大数据库1</p>
      </div>
    </div>
    <div class="skillWrapper">
      <div class="flo_l" style="margin-top: -16px">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="icon" alt="">
      </div>
      <div class="title flo_l">
        <p class="font12"><span class="font14 bold">简介：</span>阿萨德加快哈萨克的哈就，开始登记卡是妒忌卡萨丁尽快哈，砂进口的哈尽快哈三等奖会撒娇开会健康大数据库1</p>
      </div>
    </div>
    <div class="text-center" style="margin-top: -16px; border-bottom: 10px solid #f3f4f5">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" width="20" height="20" alt="">
    </div>
    <div class="serviceWrapper">
      <p class="font16 bold">问诊服务</p>
      <div class="itemStyle">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="icon flo_l" alt="">
        <div class="flo_l ">
          <p class="font12 bold" style="margin-left: 12px; ">图文咨询</p>
          <p class="font10 bold colorb" style="margin-left: 12px; ">通过文字、图片向医生咨询</p>
        </div>
      </div>
      <div class="itemStyle">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="icon flo_l" alt="">
        <div class="flo_l ">
          <p class="font12 bold" style="margin-left: 12px; ">视频咨询</p>
          <p class="font10 bold colorb" style="margin-left: 12px; ">通过视频医生咨询</p>
        </div>
      </div>
      <div class="itemStyle">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" class="icon flo_l" alt="">
        <div class="flo_l ">
          <p class="font12 bold" style="margin-left: 12px; ">电话咨询</p>
          <p class="font10 bold colorb" style="margin-left: 12px; ">通过拨打电话向医生咨询</p>
        </div>
      </div>
    </div>
    <div class="serviceWrapper">
      <p class="font16 bold">诊后服务</p>
      <div class="itembBox flo_l text-center" >
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg" alt="" class="image">
        <div class="font10">我的病历</div>
      </div>
    </div>
    <div class="evaluateWrapper" style="border-top: 10px solid #f3f4f5">
      <TheEvaluate></TheEvaluate>
    </div>
<!--    <div class="serviceDetails">-->
<!--      <TheServiceDetails></TheServiceDetails>-->
<!--    </div>-->
  </div>
</template>
<script>
import TheEvaluate from './evaluate'
// import TheServiceDetails from './service-details'
export default {
  components: {
    TheEvaluate
    // TheServiceDetails
  }
}
</script>
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .details{
    .infoWrapper{
      height: 200px;
      background-image: linear-gradient(to top, #5090f9 0%, #3369f5 100%);
      padding: 22px;
      .photo{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #ffffff;
      }
      .content{
        width: 64%;
        padding: 6px 12px;
        .title{
          transform:scale(.9);
          margin-left: -13px;
        }
        .label{
          margin-top: 4px;
          transform:scale(.9);
          background: #f3f4f5;
          margin-left: -4px;
          padding: 0 4px;
          border-radius: 12px;
          color: #649ff6;
        }
      }
      .commentsBox{
        background: #5891f4;
        color: white;
        padding: 12px 0;
        border-radius: 8px;
        margin-top: 18px;
        .itemStyle{
          width: 30%;
          display: inline-block;
        }
      }
    }
    .skillWrapper{
      margin: 16px;
      overflow: hidden;
      .icon{
        width: 26px;
        height: 26px;
        border-radius: 50%;
      }
      .title{
        width: 88%;
        margin-left: 8px;
      }
    }
    .serviceWrapper{
      padding: 16px;
      overflow: hidden;
      .itemStyle{
        box-shadow: 1px 1px 12px #e7e7e7;
        padding: 14px;
        margin-top: 12px;
        border-radius: 12px;
        overflow: hidden;
        .icon{
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
      .itembBox{
        width: 24%;
        margin-right: 12px;
        border-radius: 12px;
        padding: 12px 0;
        .image{
          width: 46px;
          height: 46px;
          border-radius: 50%;
          margin-bottom: 8px;
        }
      }
    }
  }
</style>
