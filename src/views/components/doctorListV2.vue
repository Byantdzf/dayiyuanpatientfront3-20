<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="wrapper" @click="gotoPage">
      <div class="flo_l">
        <img :src="item.photo" class="image" alt="">
      </div>
      <div class="flo_l content text-left ">
        <p class="font30 color3 bold name">{{item.name}}</p>
        <p class="font24 color6 title">{{item.title}}</p>
        <p class="font24 ellipsis_1 color9 title">擅长：{{item.skill}}</p>
        <p class="font26 title ellipsis_2 color9 rateBox">
          <img src="../../../src/assets/image/homeIcon/scoreIcon.png" class="img" alt="">
          <span class="score">5.0</span>
          <span class="font26">已接诊1223人</span>
        </p>
        <p class="font20 label flo_l">可开处方</p>
        <p class="font20 label flo_l">可开处方</p>
        <div class="clearfloat"></div>
        <div class="fnbox">
          <div class="font22 color3 flo_l">
            <img src="https://images.ufutx.com/202002/24/cc68e8f4fa799844fd11d5f07dfe51c0.png" alt="">图文 ￥0
          </div>
          <div class="font22  flo_l color3">
            <img src="https://images.ufutx.com/202002/24/cc68e8f4fa799844fd11d5f07dfe51c0.png" alt="">
            电话 <span class="colorbe">未开通</span>
          </div>
          <div class="font22  colorbe flo_l">
            <img src="https://images.ufutx.com/202002/24/cc68e8f4fa799844fd11d5f07dfe51c0.png" alt="">
            视频 <span class="colorbe">未开通</span>
          </div>
        </div>
      </div>
      <div class="_dot flo_l" v-if="index != list.length"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      showModal: this.show
    }
  },
  methods: {
    // hideModal () {
    //   this.$emit('hideModal', false)
    // }
    gotoPage () {
      this.$router.push({path: '/service/details'})
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  @import '../../../src/assets/style/reset';

  .wrapper{
    overflow: hidden;
    padding: 40px 40px 0 40px;
    .image{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .content{
      width: 84%;
      margin-left: 22px;
      .name{
        margin-bottom: 6px;
      }
      .title{
        margin-bottom: 10px;
      }
      .label{
        margin-top: 4px;
        background: #effbf9;
        margin-left: -4px;
        padding: 4px 15px;
        border-radius: 24px;
        color: #08B171;
        margin-right: 20px;
      }
    }
    ._dot{
      width: 100%;
      height: 1px;
      margin: auto;
      background: #f0f0f0;
      margin-top: 8px;
    }
    .van-rate{ display: inline-block;margin-left: 6px;}
    .fnbox{
      margin-top:36px;
      div{
        width: 33%;
      }
      img{
        width: 32px;
        height: 32px;
        margin-right: 4px;
        margin-bottom: 12px;
        vertical-align: middle;
      }
    }
    .rateBox{
      .img{
        width: 22px;
        height: 22px;
      }
      .score{
        color: #FF8A30;
        margin-right: 20px;
      }
    }
  }
</style>
