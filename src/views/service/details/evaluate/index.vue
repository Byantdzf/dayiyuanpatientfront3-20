<template>
  <div class="evaluate">
    <div class="infoWrapper">
      <div class="info">
        <div class="color3 font30 title">客户评价
          <span class="numm">({{comm_count}})</span>
          <span class="color9 font26">含开药门诊</span>
          <p class="font26 flo_r" style="color: #F9941F">好评率 {{praisePecent*100}}% ></p>
        </div>
<!--        <div class="desc">-->
<!--          <span class="name">查看详情</span>-->
<!--          <van-icon name="arrow" />-->
<!--        </div>-->
      </div>
      <ul class="search">
        <li class="search-item font24 color6" v-for="(item,index) in listLbl" :key="index">{{item.lable_name}}({{item.count}})</li>
      </ul>
    </div>
    <div class="listsWrapper"  v-for="(item,index) in listComment" :key="index">
      <ul class="lists" >
        <li class="lists-item">
          <div class="label">
            <div class="name color3 font28 flo_l">{{item.anoName}}</div>
            <van-rate v-model="item.score" :size="14" icon="https://images.ufutx.com/202004/06/48867762c1ac535d64dfc7fd13001976.png" class="flo_l" style="margin-top: 3px;margin-left: 4px;"/>
            <p class="clearfloat"></p>
          </div>
          <div class="desc font30 color3">{{item.content}}</div>
          <div style="padding-right: 8px;">
            <span class="colorb font26">[{{item.source}}]</span>
            <span class="colorb font26 flo_r">{{item.recTime}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="color3 font26 moreBtn text-center bold" @click="gotoPage(`/service/allComments?id={id}`)">更多全部评价></div>
  </div>
</template>
<script>
export default {
  props: ['listLbl', 'listComment', 'comm_count', 'id', 'praisePecent'],
  data () {
    return {
      rateValue: 3
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder (name) {
      this.$router.push({ name: name })
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
