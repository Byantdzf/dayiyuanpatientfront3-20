<template>
  <div class="security">
    <div class="searchBox">
      <van-search v-model="searchValue" placeholder="根据医院、疾病或科室搜索医生" >
<!--        <div slot="action" @click="goBack">取消</div>-->
      </van-search>
    </div>
    <ul class="sortList">
      <li class="sortList-item synthesize is-active">
        <div class="name">科室</div>
        <div class="search">
          <i class="fa fa-caret-down"></i>
        </div>
      </li>
      <li class="sortList-item price">
        <div class="name">全国</div>
        <div class="search">
          <i class="fa fa-caret-up"></i>
          <i class="fa fa-caret-down"></i>
        </div>
      </li>
      <li class="sortList-item address">
        <div class="name">价格</div>
        <div class="search">
          <i class="fa fa-caret-down"></i>
        </div>
      </li>
      <li class="sortList-item filtrate">
        <div class="name">筛选</div>
        <div class="search">
          <i class="fa fa-filter"></i>
        </div>
      </li>
    </ul>
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
      subnavList: [
      ],
      searchValue: '',
      serviceList: datasList,
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
  }
}
</script>
