<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="wrapper" @click="gotoPage(`/service/details?id=${item.doctorId}`)">
      <div class="flo_l">
        <img :src="item.avatar" class="image" alt="">
      </div>
      <div class="flo_l content text-left ">
        <p class="font30 color3 bold name">{{item.doctorName}} <span class="post">{{item.title}}</span></p>
        <p class="font24 color6 title">{{item.title}}</p>
        <p class="font24 ellipsis_1 color9 title">擅长：{{item.speciality}}</p>
        <p class="font20 label flo_l" v-if="item.character">{{item.character}}</p>
      </div>
      <div class="_dotv flo_l" v-if="index != list.length"></div>
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
    gotoPage (URL) {
      this.$router.push({path: URL})
    }
    // hideModal () {
    //   this.$emit('hideModal', false)
    // }
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
      width: 78%;
      padding: 0px 24px;
      .post{
        margin-left: 12px;
      }
      .name{
        margin-bottom: 6px;
      }
      .title{
        margin-bottom: 20px;
      }
      .label{
        margin-top: 4px;
        background: #effbf9;
        margin-left: -4px;
        padding: 4px 15px;
        border-radius: 24px;
        color: #08B171;
      }
    }
    ._dotv{
      width: 100%;
      height: 1px;
      margin: auto;
      background: #EFEFEF;
      margin-top: 30px;
    }
    .van-rate{ display: inline-block;margin-left: 6px;}
  }
</style>
