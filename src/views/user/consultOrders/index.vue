<template>
  <div>
    <van-tabs v-model="activeName" color="#00BD75" style="border-bottom: 1px solid #D6D6D6;">
      <van-tab :title="item" name="a" v-for="(item,index) in tabs" color="#00BD75" :key="index">
        <template is="list"></template>
      </van-tab>
    </van-tabs>
    <template name="list">
      <div  v-for="(item,index) in list" :key="index">
        <div class="wrapper ff" @click="gotoPage">
          <div class="listItem">
            <div class="flo_l">
              <img :src="item.photo" class="image" alt="">
            </div>
            <div class="flo_l content text-left ">
              <p class="font30 color3 bold name inline-block">{{item.name}}</p>
              <p class="font24 label inline-block text-center">图文问诊</p>
              <p class="colorTheme font26 flo_r bold">待接诊</p>
              <p class="font26 color6 title">{{item.title}}</p>
              <p class="font26 color9 title">擅长：{{item.skill}}</p>
              <p style="margin-top: 22px;">
              <p class="font26 color9 title flo_l">就诊人：李四 30(男)</p>
              <p class="font24 color9 title flo_r">2020.02.22 13.34</p>
            </div>
            <div class="_dotV flo_r" ></div>
            <div class="flo_l content contentV  text-left">
              <p class="btnStyle font26 colorff text-center flo_r">去支付</p>
              <p class="btnStyle cancel font26 color3 text-center flo_r">取消</p>
            </div>
            <p class="clearfloat"></p>
          </div>
        </div>
        <div class="_dot" v-if="index != list.length"></div>
        <p class="clearfloat"></p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'a',
      tabs: ['全部', '待支付', '待接诊', '已支付', '已取消'],
      list: [
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 3
        },
        {
          photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036745067,4011189473&fm=26&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 5
        }
      ]
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    }
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less">
  @import '../../../../src/assets/style/reset';
  body{
    background:rgba(247,247,247,1);
  }
  .van-tab--active {
    font-weight: 500;
    color: #00BD75;
  }
  .wrapper{
    .listItem{
      overflow: hidden;
      padding-top: 30px;
      margin-left: 30px;
      /*border-bottom: 1px solid #E7E7E7;*/
    }
    ._dotV{
      width: 100%;
      height: 1px;
      border-bottom: 1px solid #E7E7E7;
    }
    .image{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .content{
      width: 80%;
      padding: 0px 24px;
      margin-top: -6px;
      padding-right: 30px;
      .name{
        margin-bottom: 6px;
      }
      .title{
        margin-bottom: 10px;
      }
      .label{
        color: #ffffff;
        width:100px;
        height:30px;
        background:linear-gradient(90deg,rgba(245,175,51,1) 0%,rgba(236,150,10,1) 100%);
        border-radius:4px;
        vertical-align: middle;
        padding: 2px 8px;
        margin-bottom: 6px;
      }
    }
    .van-rate{ display: inline-block;margin-left: 6px;}
  }
  .contentV{
    overflow: hidden;
    margin-left: 86px;
    height: 100px;
    line-height: 100px;
    .name{color: #FF0000}
  }
  .btnStyle{
    width:159px;
    height:61px;
    background:rgba(0,189,117,1);
    border-radius:33px;
    line-height: 61px;
    margin-top: 24px;
    margin-left: 22px;
  }
  .cancel{
    width:156px;
    height:58px;
    background: none;
    border:1px solid rgba(151,151,151,1);
  }
  ._dot{
    width: 100%;
    height: 1px;
    margin: auto;
    /*background: #EFEFEF;*/
    padding-top: 20px;
  }
</style>
