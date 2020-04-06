<template>
  <div id="mineAddress">
    <div class="main-address">
      <div class="addressItem" v-for="(item,index) in addressList" :key="index"  @click="gotoPage(`/user/addAddress?id=${item.addrId}`)">
        <div class="addressStyle flo_l">
          <p class="theme_bc colorff font20 active inline-block" v-if="item.commonAddr">默认</p>
          <p class="font30 color3 bold inline-block">{{item.receiver}}</p>
          <p class="font28 color3 bold mobile inline-block">{{item.mobile}}</p>
          <p class="font28 addressText color6">
            {{item.province}}
            {{item.city}}
            {{item.area}}
            {{item.addr}}
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
import https from '@/config/http.js'
export default {
  data () {
    return {
      addressList: []
    }
  },
  methods: {
    gotoPage (URL) {
      this.$router.push({path: URL})
    },
    goToMyOrder () {
      this.$router.push({ name: 'OrderList' })
    },
    getData () {
      https.fetchGet('address/list').then((data) => {
        console.log(data)
        this.addressList = data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<!--<style lang='scss' src='index.scss'></style>-->
<style lang="less" scoped="scoped">
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
