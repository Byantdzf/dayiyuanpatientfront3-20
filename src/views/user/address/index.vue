<template>
  <div id="mineAddress">
    <div class="main-address">
      <div class="addressItem" v-for="(item,index) in addressList" :key="index">
        <div class="addressStyle flo_l">
          <span class="theme_bc colorff font10 active" v-if="item.active">默认</span>
          <span class="font14 bold">{{item.name}}</span>
          <span class="font14 bold">{{item.mobile}}</span>
          <p class="font14 addressText color6">
            {{item.address}}
          </p>
        </div>
        <div class="addressEdit flo_l">
          <img src="../../../assets/image/otherIcon/edit.png" alt="">
        </div>
        <p class="clearfloat"></p>
      </div>
      <div class="addAddress text-center" @click="gotoPage('/user/addAddress')">
        <!--      <div>-->
        <img src="../../../assets/image/otherIcon/add.png" class="" alt="">
        <div class="colorTheme bold inline-block text ">新建地址</div>
        <p class="clearfloat"></p>
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addressList: [
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: true},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false},
        {name: '汤小姐', address: '广东省深圳市宝安区公园路西一巷24号中州府二期11A架空城中级e', mobile: '15820462342', active: false}
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
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  body{
    background: #F2F2F2;
  }
  .main-address{
    background: white;
    .addressItem{
      margin-left: 32px;
      padding-bottom: 10px;
      border-bottom: 1px solid #EEEEEE;
      padding-top: 10px;
      .addressStyle{
        width: 82%;
        margin-top: -12px;
        margin-left: -14px;
        .active{
          padding: 1px 6px;
          border-radius: 3px;
        }
        .addressText{
        }
      }
      .addressEdit{
        margin-top: 20px;
        padding-left: 36px;
        position: relative;
        &:before{
          content: '';
          left: 16px;
          top: 16px;
          width: 1px;
          height: 36px;
          position: absolute;
          background: #D8D8D8;
        }

        img{
          width: 20px;
          height: 20px;
        }
      }
    }
    .addAddress{
      width: 100%;
      height: 40px;
      background: white;
      position: fixed;
      bottom: 0;
      left: 0;
      line-height: 40px;
      padding-bottom: 12px;
      img{
        width: 16px;
        height: 16px;
        vertical-align:middle;
        margin-top: 8px;
        margin-right: -4px;
      }
      .text{
        font-size: 15px;
        margin-top: -12px;
      }
    }
  }
</style>
