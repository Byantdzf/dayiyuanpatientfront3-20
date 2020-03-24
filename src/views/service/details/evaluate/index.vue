<template>
  <div class="evaluate">
    <div class="infoWrapper">
      <div class="info">
        <div class="color3 font30 title">客户评价
          <span class="numm">(88)</span>
          <span class="color9 font26">含开药门诊</span>
          <p class="font26 flo_r" style="color: #F9941F">好评率 100% ></p>
        </div>
<!--        <div class="desc">-->
<!--          <span class="name">查看详情</span>-->
<!--          <van-icon name="arrow" />-->
<!--        </div>-->
      </div>
      <ul class="search">
<!--        <li class="search-item is-active">全部</li>-->
        <li class="search-item font24 color6">确认速度快</li>
        <li class="search-item font24 color6">打扫很干净</li>
        <li class="search-item font24 color6">沟通顺畅</li>
        <li class="search-item font24 color6">态度好</li>
        <li class="search-item font24 color6">态度好</li>
        <li class="search-item font24 color6">态度好</li>
      </ul>
    </div>
    <div class="listsWrapper"  v-for="(item,index) in 3" :key="index">
      <ul class="lists" >
        <li class="lists-item">
          <div class="label">
            <div class="name color3 font28 flo_l">吴***达</div>
<!--            <div class="ratelist">-->
              <van-rate v-model="rateValue" :size="14" class="flo_l" style="margin-bottom: -4px;"/>
<!--            </div>-->
            <p class="clearfloat"></p>
          </div>
          <div class="desc font30 color3">毕竟是大医院的医生，让家长很安心，知道建议很 科学。</div>
          <div style="padding-right: 8px;">
            <span class="colorb font26">[图文问诊]</span>
            <span class="colorb font26 flo_r">2020.02.02</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="color3 font26 moreBtn text-center bold">更多全部评价></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      rateValue: 3
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../../../../src/assets/style/reset';
  .evaluate{
    padding: 30px 0 30px 30px;
  }
  .title{
    padding-left: 14px;
    position: relative;
    margin-bottom: 20px;
    padding-right: 30px;

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
  .search{
    padding: 0 12px;
    padding-right: 30px;
    .search-item{
      padding: 2px 22px;
      display: inline-block;
      background:rgba(246,246,246,1);
      border-radius:28px;
      margin-bottom: 18px;
      margin-right: 12px;
    }
  }
  .listsWrapper{
    margin-left: 12px;
    padding: 22px 0;
    padding-right: 30px;
    border-bottom: 1px solid #E7E7E7;
    .desc{
      margin-top: 16px;
      margin-bottom: 22px;
    }
  }
  .moreBtn{
    width:240px;
    height:60px;
    line-height: 60px;
    border-radius:34px;
    border:1px solid rgba(151,151,151,1);
    margin: 58px auto;
  }
</style>
