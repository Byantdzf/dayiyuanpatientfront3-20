<template>
  <div class="security">
<!--    <div class="searchBox">-->
<!--      <van-search-->
<!--        v-model="searchValue"-->
<!--        shape="round"-->
<!--        background="#4fc08d"-->
<!--        placeholder="根据医院、疾病或科室搜索医生"-->
<!--      />-->
<!--      <van-search v-model="searchValue" placeholder="根据医院、疾病或科室搜索医生" >-->
<!--&lt;!&ndash;        <div slot="action" @click="goBack">取消</div>&ndash;&gt;-->
<!--      </van-search>-->
<!--    </div>-->
    <div class="searchWrapper">
      <img src="@/assets/image/homeIcon/search.png" class="icon" alt="">
      <input type="text" placeholder="搜索医院、疾病、医院"  class="_input font26">
      <!--      <van-search v-model="searchValue" @focus="focus" placeholder="搜索医院、疾病、医院" background=""></van-search>-->
    </div>
    <van-dropdown-menu active-color="#08B171">
      <van-dropdown-item v-model="value" :options="option" />
      <van-dropdown-item v-model="value" title="全国" :options="option" />
      <van-dropdown-item v-model="value" title="排序" :options="option" />
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="可开处方" />
        <van-switch-cell v-model="switch2" title="三甲医院" />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="list">
<!--      <OrderListItem :data="serviceList.list"></OrderListItem>-->
      <DoctorList :list="list"></DoctorList>
    </div>
<!--    <van-tabs>-->
<!--      <van-tab v-for="(item,index) in subnavList" :title="item.label" :key="index">-->

<!--      </van-tab>-->
<!--    </van-tabs>-->
  </div>
</template>
<script>
import datasList from './datas.js'
import DoctorList from '../../../views/components/doctorListV2'
// import OrderListItem from '@/views/components/order-list-item'

export default {
  components: {
    DoctorList
    // OrderListItem
  },
  data () {
    return {
      subnavList: [],
      searchValue: '',
      serviceList: datasList,
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '全部科室', value: 0 },
        { text: '脑科', value: 1 },
        { text: '外科', value: 2 }
      ],
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
        },
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 2
        },
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 2
        },
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 2
        },
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 2
        },
        {
          photo: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3072212054,4223657569&fm=11&gp=0.jpg',
          title: '北京医院 内科',
          name: '国红 主任医师',
          skill: '脑血管, 头疼, 头晕, 睡眠障碍, 高血压, 支气管哮喘',
          labels: ['可开处方'],
          value: 2
        }
      ]
    }
  },
  methods: {
    onConfirm () {
      this.$refs.item.toggle()
    }
  }
}
</script>
<style lang="less" scoped>
  @import '../../../../src/assets/style/reset';
  .service{
  }
  .searchWrapper{
    margin: 30px;
    background: #F6F6F6;
    height: 68px;
    border-radius: 32px;
    line-height: 68px;
    .icon{
      width: 22px;
      height: 22px;
      margin-left: 32px;
      vertical-align: middle;
    }
    ._input{
      background: none;
      border: none;
      margin-left: 8px;
    }
  }
  .van-dropdown-menu, .van-dropdown-menu__item{
    background: #F6F6F6;
  }
</style>
