<template>
  <div>
    <div v-for="(item,index) in list" :key="index" class="wrapper" @click="gotoPage">
      <div class="flo_l">
        <img :src="item.photo" class="image" alt="">
      </div>
      <div class="flo_l content text-left ">
        <p class="font14 bold ">{{item.name}}<van-rate v-model="item.value" :size="10"/></p>
        <p class="font10 title">{{item.title}}</p>
        <p class="font10 title ellipsis_1">擅长：{{item.skill}}</p>
        <p class="font10 label flo_l">可开处方</p>
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
    gotoPage () {
      this.$router.push({path: '/service/details'})
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
    padding: 12px 12px 0 12px;
    .image{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .content{
      width: 74%;
      /*background: red;*/
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
    ._dot{
      width: 100%;
      height: 1px;
      margin: auto;
      background: #f0f0f0;
      margin-top: 8px;
    }
    .van-rate{ display: inline-block;margin-left: 6px;}
  }
</style>
