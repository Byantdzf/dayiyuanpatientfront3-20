<template>
  <div id="mineAddress">
    <div class="main-address">
      <div class="addressItem" v-for="(item,index) in addressList" :key="index">
        <div class="addressStyle flo_l">
          <p class="theme_bc colorff font20 active inline-block" v-if="item.active">默认</p>
          <p class="font30 color3 bold inline-block">{{item.name}}</p>
          <p class="font28 color3 bold mobile inline-block">{{item.mobile}}</p>
          <p class="font28 addressText color6">
            {{item.address}}
          </p>
        </div>
        <div class="addressEdit flo_l">
          <img src="@/assets/image/otherIcon/edit.png" alt="">
        </div>
        <p class="clearfloat"></p>
      </div>
      <div class="addAddress text-center" @click="gotoPage('/user/addAddress')">
        <!--      <div>-->
        <img src="@/assets/image/otherIcon/add.png" class="" alt="">
        <div class="colorTheme bold inline-block text font32">新建地址</div>
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
  #mineAddress{
    min-height: 100vh;
    background: #F2F2F2;
  }
  .main-address{
    background: white;
    .addressItem{
      margin-left: 32px;
      border-bottom: 1px solid #EEEEEE;
      padding: 30px 0;
      .addressStyle{
        width: 82%;
        .mobile{
          margin-left: 40px;
        }
        .active{
          padding: 2px 16px;
          margin-right: 17px;
          margin-bottom: 10px;
          border-radius: 4px;
          vertical-align: middle;
          border: none;
          margin-top: -1px;
        }
        .addressText{
          margin-top: 16px;
        }
      }
      .addressEdit{
        padding-left: 50px;
        position: relative;
        &:before{
          content: '';
          left: 16px;
          top: 46px;
          width: 1px;
          height: 68px;
          position: absolute;
          background: #D8D8D8;
        }

        img{
          width: 34px;
          height: 34px;
          margin-top: 62px;
        }
      }
    }
    .addAddress{
      width: 100%;
      height: 100px;
      background: white;
      position: fixed;
      bottom: 0;
      left: 0;
      line-height: 100px;
      img{
        width: 34px;
        height: 34px;
        vertical-align:middle;
        margin-bottom: 6px;
      }
      .text{
      }
    }
  }
</style>
